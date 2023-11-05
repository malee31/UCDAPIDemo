import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Chart, ChartConfiguration } from "chart.js";
import { Plugin } from "chart.js/dist/types";
import { BaseChartDirective } from "ng2-charts";
import * as moment from "moment";
import { APISeats } from "../../api-services/api-types";

const DEFAULT_POINT_COUNT: number = 50;
const tooltipPlugin: Plugin = {
	id: "trace-tooltip",
	afterDraw: chart => {
		if(!chart.tooltip) {
			return;
		}
		const x = chart.tooltip.caretX;
		const yAxis = chart.scales["y"];
		const ctx = chart.ctx;
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x, yAxis.top);
		ctx.lineTo(x, yAxis.bottom);
		ctx.lineWidth = 2;
		ctx.strokeStyle = "rgba(100, 100, 200, 0.6)";
		ctx.stroke();
		ctx.restore();
	}
};

function epochToDateTime(timestamp: number): string {
	const date = new Date(timestamp);
	date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
	return date.toISOString().slice(0, 16);
}

@Component({
	selector: 'app-graph',
	templateUrl: './graph.component.html',
	styleUrls: ['./graph.component.scss']
})
export class GraphComponent {
	@ViewChild(BaseChartDirective) chart?: BaseChartDirective;
	@ViewChild("chartSource") chartElem!: ElementRef<HTMLCanvasElement>;
	@Input({ required: true }) crnData!: APISeats[];

	public pointIndexRange!: [number, number];
	public datePointRangeLimits!: [string, string];
	public datePointRangeLabels!: [string, string];

	public generatedData: ChartConfiguration['data'] | undefined;

	public generatedOptions: ChartConfiguration['options'] = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				type: "linear",
				ticks: {
					callback: (xVal) => moment(new Date(Number(xVal))).format("M/D h:mm a")
				}
			}
		},
		interaction: {
			intersect: false,
			mode: "index"
		},
		plugins: {
			tooltip: {
				enabled: true,
				position: "average",
				callbacks: {
					title: (context) => {
						return moment(new Date(Number(context[0].parsed.x))).format("M/D h:mm a");
					}
				}
			}
		}
	};

	constructor() {
		Chart.register(tooltipPlugin);
	}

	ngOnChanges(): void {
		if(!this.crnData.length) {
			throw new Error("CRN data must not be empty");
		}

		if(!this.pointIndexRange) {
			this.pointIndexRange = [
				Number(this.crnData[Math.max(0, this.crnData.length - DEFAULT_POINT_COUNT - 1)].timestamp),
				Number(this.crnData[this.crnData.length - 1].timestamp)
			];
		}

		this.datePointRangeLabels = this.pointIndexRange.map(ts => epochToDateTime(ts)) as [string, string];
		this.datePointRangeLimits = [
			epochToDateTime(Number(this.crnData[0].timestamp)),
			epochToDateTime(Number(this.crnData[this.crnData.length - 1].timestamp)),
		];

		const renderCrnData = this.crnData
			.filter(c => Number(c.timestamp) >= this.pointIndexRange[0] && Number(c.timestamp) <= this.pointIndexRange[1]);

		// Fix edge case in which there are no points to render by rendering the first point
		// TODO: Locate nearest points instead
		if(renderCrnData.length === 0) renderCrnData.push(this.crnData[0]);

		const labels = renderCrnData.map(e => {
			return moment(new Date(Number(e.timestamp))).format("M/D h:mm a")
		});
		// @ts-ignore
		this.generatedData = {
			labels: labels,
			datasets: [
				{
					label: "Net Seats",
					data: renderCrnData.map(e => ({
						x: Number(e.timestamp),
						y: e.seats_available + e.seats_reserved - e.waitlist
					})),
					fill: true,
					borderColor: "rgb(91,194,38)",
					pointBackgroundColor: "rgb(91,194,38)",
					backgroundColor: "rgba(91,194,38, 0.5)",
					tension: 0.05
				},
				{
					label: "Reserved Seats",
					data: renderCrnData.map(e => ({
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
					data: renderCrnData.map(e => ({
						x: Number(e.timestamp),
						y: e.waitlist
					})),
					fill: true,
					borderColor: "rgb(159,11,31)",
					pointBackgroundColor: "rgb(159,11,31)",
					backgroundColor: "rgba(159,11,31, 0.5)",
					tension: 0.05
				}
			]
		};

		// @ts-ignore
		this.generatedData.datasets.push({
			label: "Linear Trend Line",
			data: [],
			fill: false,
			borderColor: "rgb(200,100,30)",
			tension: 0.05
		})

		// TODO: Re-add trend line feature
		this.generatedData.datasets.pop();

		// Modify scale start and end
		// @ts-ignore
		this.generatedOptions.scales.x.min = Number(renderCrnData[0].timestamp);
		// @ts-ignore
		this.generatedOptions.scales.x.max = Number(renderCrnData[renderCrnData.length - 1].timestamp);
	}

	setRange(index: number, event: Event) {
		const newPointIndex: [number, number] = [...this.pointIndexRange];
		newPointIndex[index] = (new Date((event.target as HTMLInputElement).value)).getTime();
		this.pointIndexRange = newPointIndex;
		this.ngOnChanges();
	}

	chartToDataURL() {
		const sourceCanvas = this.chartElem.nativeElement;

		// Add white background to chart
		const canvasClone: HTMLCanvasElement = sourceCanvas.cloneNode(true) as HTMLCanvasElement;
		const cloneCtx: CanvasRenderingContext2D = canvasClone.getContext("2d")!;
		cloneCtx.fillStyle = "#FFFFFF";
		cloneCtx.fillRect(0, 0, canvasClone.width, canvasClone.height);
		cloneCtx.drawImage(sourceCanvas, 0, 0);
		return canvasClone.toDataURL("image/png");
	}

	downloadChart() {
		const chartDataUrl: string = this.chartToDataURL();

		// Start a download
		const downloadLink = document.createElement("a");
		downloadLink.href = chartDataUrl;
		downloadLink.download = "CRN_Seat_Chart.png";
		downloadLink.click();
	}

	copyChart() {
		const chartDataUrl: string = this.chartToDataURL();

		// Copy to clipboard
		fetch(chartDataUrl)
			.then(res => res.blob())
			.then(blob => navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]))
			.catch(err => alert(`Copy failed. Download instead.\n\nError: ${err}`))
	}
}
