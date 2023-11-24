import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Chart, ChartConfiguration } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
import * as moment from "moment";
import downloadToFile from "../../../../../utils/downloadString";
import { NotificationsService } from "../../../../services/notification-services/notifications.service";
import chartToDataURL from "../../../../../utils/chartToDataURL";
import tooltipPlugin from "../../../../../utils/chartTooltipPlugin";

@Component({
	selector: 'app-chart-figure',
	templateUrl: './chart-figure.component.html',
	styleUrls: ['./chart-figure.component.scss']
})
export class ChartFigureComponent {
	@ViewChild(BaseChartDirective) chart?: BaseChartDirective;
	@ViewChild("chartSource") chartElem!: ElementRef<HTMLCanvasElement>;
	@Input({ required: true }) datasets!: ChartConfiguration["data"]["datasets"];

	detectsClipboardSupport: boolean = Boolean(window["ClipboardItem"]);

	generatedData: ChartConfiguration["data"] | undefined;
	generatedOptions: ChartConfiguration["options"] = {
		responsive: true,
		maintainAspectRatio: false,
		layout: {
			padding: {
				left: 50
			}
		},
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
			legend: {
				position: "bottom"
			},
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

	constructor(private notifications: NotificationsService) {
		Chart.register(tooltipPlugin);
	}

	ngOnChanges(): void {
		if(!this.datasets.length) {
			throw new Error("Datasets must not be empty");
		}

		const labels = this.datasets[0].data.map((point: any) => {
			return moment(new Date(point.x)).format("M/D h:mm a");
		});

		// @ts-ignore
		this.generatedData = {
			labels: labels,
			datasets: this.datasets
		};

		// Modify scale start and end
		const sampleData = this.generatedData.datasets[0].data;
		// @ts-ignore
		// this.generatedOptions.scales.x.min = sampleData[0].x;
		// @ts-ignore
		// this.generatedOptions.scales.x.max = sampleData[sampleData.length - 1].x;
	}

	downloadChart() {
		downloadToFile(chartToDataURL(this.chartElem.nativeElement), "CRN_Seat_Chart.png");
	}

	copyChart() {
		const chartDataUrl: string = chartToDataURL(this.chartElem.nativeElement);

		// Copy to clipboard
		fetch(chartDataUrl)
			.then(res => res.blob())
			.then(async blob => {
				if(!this.detectsClipboardSupport) {
					this.notifications.addNotification("warning", "Your browser does not support copying as image!");
					return;
				}

				await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
				this.notifications.addNotification("notice", "Copied to Clipboard!");
			})
			.catch(err => {
				this.notifications.addNotification("error", `Copy failed. Download instead.\n\nError: ${err}`);
			});
	}
}
