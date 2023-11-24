import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { APISeats } from "../../../services/api-services/api-types";
import { ApiService } from "../../../services/api-services/api.service";
import { ChartConfiguration } from "chart.js";

function epochToDateTime(timestamp: number): string {
	const date = new Date(timestamp);
	date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
	return date.toISOString().slice(0, 16);
}

@Component({
	selector: 'app-chart-chunk',
	templateUrl: './chart-chunk.component.html',
	styleUrls: ['./chart-chunk.component.scss']
})
export class ChartChunkComponent implements OnInit, OnChanges {
	@Input({ required: true }) crn: string = "";
	@Input({ required: true }) term: string = "";
	@Input() defaultOptimized: boolean = true;
	customOptimizedSetting: boolean = false;

	loading: boolean = false;
	failed: boolean = false;
	chartCRNData: APISeats[] = [];
	chartDatasets: ChartConfiguration["data"]["datasets"] = [];

	// Graph and filter settings
	optimized!: boolean;
	enableBestFit: boolean;
	rangeFilterEnabled: boolean;
	rangeToPresent: boolean;
	startTimestamp: string;
	endTimestamp: string;
	constructor(private api: ApiService) {
		// Sensible defaults
		this.enableBestFit = false;
		this.rangeFilterEnabled = false;
		this.rangeToPresent = true;
		this.startTimestamp = epochToDateTime(0);
		this.endTimestamp = epochToDateTime(Date.now());
	}

	ngOnInit() {
		if(this.crn.length !== 5) {
			throw new Error(`CRN must be 5 characters: "${this.crn}"`);
		}

		this.optimized = this.defaultOptimized;
		// Fire-and-forget since all errors are handled internally
		void this.reloadData()
			.then(() => {
				// Set range filters to the first and last available points
				if(this.chartCRNData.length) {
					this.startTimestamp = epochToDateTime(Number(this.chartCRNData[0].timestamp));
					this.endTimestamp = epochToDateTime(Number(this.chartCRNData[this.chartCRNData.length - 1].timestamp));
				}
			});
	}

	ngOnChanges(changes: SimpleChanges) {
		// Switch optimized status if the default changes
		// TODO: Make it possible to customize the optimized setting on a per-graph basis
		if(changes["defaultOptimized"]) {
			this.optimized = changes["defaultOptimized"].currentValue;
		}

		// Fire-and-forget since all errors are handled internally
		void this.reloadData();
	}

	toggleOptimized() {
		// Indicate modification and ignore all changes to the default optimize setting
		// TODO: Make URL serializable
		this.customOptimizedSetting = true;
		this.optimized = !this.optimized;
		void this.reloadData();
	}

	toggleBestFit() {
		this.enableBestFit = !this.enableBestFit;
		void this.regenerateDataset(this.filterCRNData());
	}

	toggleRangeFilter() {
		this.rangeFilterEnabled = !this.rangeFilterEnabled;
		void this.regenerateDataset(this.filterCRNData());
	}
	toggleRangeToPresent() {
		this.rangeToPresent = !this.rangeToPresent;
		void this.regenerateDataset(this.filterCRNData());
	}

	setStartRange(event: Event) {
		this.startTimestamp = (event.target as HTMLInputElement).value;

		// Forbid end timestamp from being after the start timestamp. A questionable choice
		if(new Date(this.startTimestamp).getTime() > new Date(this.endTimestamp).getTime()) {
			this.endTimestamp = this.startTimestamp;
		}

		void this.regenerateDataset(this.filterCRNData());
	}
	setEndRange(event: Event) {
		this.endTimestamp = (event.target as HTMLInputElement).value;
		void this.regenerateDataset(this.filterCRNData());
	}

	async reloadData() {
		this.loading = true;
		try {
			this.chartCRNData = await this.api.fetchSeatHistoryByCRN(this.term, this.crn, this.optimized);
		} catch(err) {
			this.failed = true;
			console.warn("Failed to load data:");
			console.error(err);
		}

		this.regenerateDataset(this.filterCRNData());

		this.loading = false;
	}

	filterCRNData(): APISeats[] {
		const startRange = new Date(this.startTimestamp).getTime();
		const endRange = this.rangeToPresent ? Infinity : new Date(this.endTimestamp).getTime();

		return this.chartCRNData.filter(point => {
			if(!this.rangeFilterEnabled) return true;

			return Number(point.timestamp) >= startRange && Number(point.timestamp) <= endRange;
		});
	}

	regenerateDataset(displayedCRNData: APISeats[]) {
		// Transform data for the chart
		const netSeatData = displayedCRNData.map(e => ({
			x: Number(e.timestamp),
			y: e.seats_available + e.seats_reserved - e.waitlist
		}));
		this.chartDatasets = [
			{
				label: "Net Seats",
				data: netSeatData,
				fill: true,
				borderColor: "rgb(91,194,38)",
				pointBackgroundColor: "rgb(91,194,38)",
				backgroundColor: "rgba(91,194,38, 0.5)",
				tension: 0.05
			},
			{
				label: "Reserved Seats",
				data: displayedCRNData.map(e => ({
					x: Number(e.timestamp),
					y: e.seats_reserved
				})),
				fill: true,
				borderColor: "rgb(72,152,30)",
				pointBackgroundColor: "rgb(72,152,30)",
				backgroundColor: "rgba(91,194,38,0.7)",
				tension: 0.05
			},
			{
				label: "Waitlist Seats",
				data: displayedCRNData.map(e => ({
					x: Number(e.timestamp),
					y: e.waitlist
				})),
				fill: true,
				borderColor: "rgb(159,11,31)",
				pointBackgroundColor: "rgb(159,11,31)",
				backgroundColor: "rgba(159,11,31, 0.5)",
				tension: 0.05
			}
		];

		if(this.enableBestFit) {
			// Formula for linear regression:
			const pointCount = netSeatData.length;
			const timeSum = netSeatData.reduce((acc, point) => {
				return acc + point.x;
			}, 0);
			const timeSquaredSum = netSeatData.reduce((acc, point) => {
				return acc + Math.pow(point.x, 2);
			}, 0);
			const seatTimeProductSum = netSeatData.reduce((acc, point) => {
				return acc + point.x * point.y;
			}, 0);
			const seatSum = netSeatData.reduce((acc, point) => {
				return acc + point.y;
			}, 0);

			const seatSlope = (pointCount * seatTimeProductSum - timeSum * seatSum) / (pointCount * timeSquaredSum - Math.pow(timeSum, 2));
			const seatIntercept = (seatSum / pointCount) - (seatSlope * timeSum) / pointCount;

			const trendLinePredict = (x: number) => Number((seatSlope * x + seatIntercept).toFixed(1));

			const trendLineData = netSeatData.map(point => {
				return {
					x: point.x,
					y: trendLinePredict(point.x)
				};
			});

			// TODO: Re-enable lookahead
			// const lookAheadFrom = Math.max(...trendLineData.map(point => point.x));
			// const interval = 15 * 60 * 1000;
			// for(let lookAheadNum = 0; lookAheadNum < this.numIntervals; lookAheadNum++) {
			// 	const lookAheadX = lookAheadFrom + lookAheadNum * interval;
			// 	trendLineData.push({
			// 		x: lookAheadX,
			// 		y: trendLinePredict(lookAheadX)
			// 	});
			// }

			this.chartDatasets.push({
				label: "Linear Trend Line",
				data: trendLineData,
				fill: false,
				borderColor: "rgb(200,100,30)",
				tension: 0.05
			});
		}
	}
}
