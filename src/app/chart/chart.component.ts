import { Component, Input } from "@angular/core";

@Component({
	selector: "app-chart",
	templateUrl: "./chart.component.html",
	styleUrls: ["./chart.component.scss"]
})
export class ChartComponent {
	@Input({ required: true }) crn: string = "";
}
