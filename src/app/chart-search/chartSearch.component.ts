import { Component, Input } from "@angular/core";
import { ApiService } from "../api-services/api.service";
import { APICourse } from "../api-services/api-types";

@Component({
	selector: "app-chart-search",
	templateUrl: "./chartSearch.component.html",
	styleUrls: ["./chartSearch.component.scss"],
	providers: [ApiService]
})
export class ChartSearchComponent {
	_crn: string = "";
	_subjectCodeFilter: string = "";
	crnValid: boolean = false;
	results: APICourse[] = [];

	constructor(private api: ApiService) {}

	@Input()
	set crn(val: string) {
		this._crn = val;
		this.crnValid = !isNaN(Number(val)) && val.length === 5;
	}
	get crn() { return this._crn; }

	updateSubjectCodeFilter(newVal: string) {
		this._subjectCodeFilter = newVal.trim();
	}

	searchCRN() {
		if(this._subjectCodeFilter.length !== 3) {
			alert("Invalid Subject Code Length (3 characters)");
			return;
		}

		this.api.fetchCRNsBySubjectCode(this._subjectCodeFilter)
			.then(courses => {
				this.results = courses;
			})
			.catch(alert);
	}
}
