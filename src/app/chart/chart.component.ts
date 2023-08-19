import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Chart, ChartConfiguration } from "chart.js";
import { Plugin } from "chart.js/dist/types";
import { BaseChartDirective } from "ng2-charts";
import * as moment from "moment";
import { ApiService } from "../api-services/api.service";
import { APICourse, APISeats } from "../api-services/api-types";

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

@Component({
	selector: "app-chart",
	templateUrl: "./chart.component.html",
	styleUrls: ["./chart.component.scss"],
	providers: [ApiService]
})
export class ChartComponent implements OnInit {
	public loading = true;
	public crnData: APISeats[] = [];

	public generatedData: ChartConfiguration['data'] | undefined;
	public generatedOptions: ChartConfiguration['options'] | undefined;
	public generatedPlugins: ChartConfiguration['plugins'] | undefined;

	public _crn: string = "";
	@Input()
	set crn(crn: string) {
		this._crn = crn;
	}

	@ViewChild(BaseChartDirective) chart?: BaseChartDirective;
	constructor(private api: ApiService) {
		Chart.register(tooltipPlugin);
	}

	ngOnInit() {
		if(this._crn.length !== 5) {
			throw new Error("CRN must be 5 characters");
		}

		this.api.fetchSeatHistoryByCRN(this._crn)
			.then((seats: APISeats[]) => {
				this.crnData = seats;

				const labels = this.crnData.map(e => moment(new Date(Number(e.timestamp_local))).format("M/D h:mm a"));
				// @ts-ignore
				this.generatedData = {
					labels: labels,
					datasets: [
						{
							label: "Net Seats",
							data: this.crnData.map(e => e.seats_available + e.seats_reserved - e.waitlist),
							fill: true,
							borderColor: "rgb(91,194,38)",
							backgroundColor: "rgba(91,194,38, 0.5)",
							tension: 0.05
						},
						{
							label: "Reserved Seats",
							data: this.crnData.map(e => e.seats_reserved),
							fill: true,
							borderColor: "rgb(20,121,189)",
							backgroundColor: "rgba(20,121,189,0.5)",
							tension: 0.05
						},
						{
							label: "Waitlist Seats",
							data: this.crnData.map(e => e.waitlist),
							fill: true,
							borderColor: "rgb(159,11,31)",
							backgroundColor: "rgba(159,11,31, 0.5)",
							tension: 0.05
						},
						{
							label: "Linear Trend Line",
							data: [],
							fill: false,
							borderColor: "rgb(200,100,30)",
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

				this.generatedPlugins = [tooltipPlugin];

				this.generatedOptions = {
					interaction: {
						intersect: false,
						mode: "index"
					},
					plugins: {
						tooltip: {
							enabled: true,
							position: "average"
						}
					}
				};

				this.loading = false;
			})
			.catch(alert);
	}
}
