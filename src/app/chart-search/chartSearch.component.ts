import { Component, Input } from "@angular/core";

@Component({
	selector: "app-chart-search",
	templateUrl: "./chartSearch.component.html",
	styleUrls: ["./chartSearch.component.scss"]
})
export class ChartSearchComponent {
	_crn: string = "";
	crnValid: boolean = false;

	@Input()
	set crn(val: string) {
		this._crn = val;
		this.crnValid = !isNaN(Number(val)) && val.length === 6;
	}
	get crn() { return this._crn; }
}
