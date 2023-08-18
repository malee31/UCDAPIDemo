import { Component, ViewChild } from "@angular/core";
import { Chart, ChartConfiguration } from "chart.js";
import { Plugin } from "chart.js/dist/types";
import { BaseChartDirective } from "ng2-charts";
import * as moment from "moment";

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
	styleUrls: ["./chart.component.scss"]
})
export class ChartComponent {
	public loading = false;
	public crnData: any[] = [
		{
			"id": 5970509,
			"batch_timestamp": "1689199203238",
			"timestamp_local": "1689199250423",
			"crn": "26765",
			"seats_available": 7,
			"seats_reserved": 4,
			"waitlist": 0,
			"createdAt": "2023-07-12T22:00:50.424Z",
			"updatedAt": "2023-07-12T22:00:50.424Z"
		},
		{
			"id": 5974801,
			"batch_timestamp": "1689202803340",
			"timestamp_local": "1689202851630",
			"crn": "26765",
			"seats_available": 7,
			"seats_reserved": 4,
			"waitlist": 0,
			"createdAt": "2023-07-12T23:00:51.631Z",
			"updatedAt": "2023-07-12T23:00:51.631Z"
		},
		{
			"id": 7699749,
			"batch_timestamp": "1692248404712",
			"timestamp_local": "1692248437114",
			"crn": "26765",
			"seats_available": 0,
			"seats_reserved": 1,
			"waitlist": 0,
			"createdAt": "2023-08-17T05:00:37.114Z",
			"updatedAt": "2023-08-17T05:00:37.114Z"
		}
	];

	public generatedData: ChartConfiguration['data'];
	public generatedOptions: ChartConfiguration['options'];
	public generatedPlugins: ChartConfiguration['plugins'];

	@ViewChild(BaseChartDirective) chart?: BaseChartDirective;
	constructor() {
		// Chart.register(Annotation);
		Chart.register(tooltipPlugin);
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
	}
}
