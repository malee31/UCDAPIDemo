import { Component, ViewChild, ElementRef } from "@angular/core";
import { ApiService } from "../api-services/api.service";
import { APICrn } from "../api-services/api-types";

import { TERMS_LIST, SUBJECT_CODE_LIST } from "../../temp/subjectCodes";

import { FormControl } from "@angular/forms";

@Component({
	selector: "app-chart-search",
	templateUrl: "./chartSearch.component.html",
	styleUrls: ["./chartSearch.component.scss"],
	providers: [ApiService],
})
export class ChartSearchComponent {
	// Filter option lists
	validTerms: string[] = TERMS_LIST.slice();
	validSubjectCodes: string[] = SUBJECT_CODE_LIST.slice();
	validSubjectNumbers: string[] = [];

	appliedFilters = {
		term: "",
		subjectCode: "",
		subjectNumber: ""
	};

	subjectCodeControl: FormControl<string|null>  = new FormControl("All");

	// Results directly from the API
	allResults: APICrn[] = [];
	// Displayed results after applying local filters
	results: APICrn[] = [];

	constructor(private api: ApiService) {}

	setTerm(val: string) {
		const newTermVal = val === "Default" ? "" : val;
		if(this.appliedFilters.term === newTermVal) return;

		this.appliedFilters.term = newTermVal;
		this.searchCRN();
	}

	setSubjectCode(newSubjectCodeVal: string) {
		if(this.appliedFilters.subjectCode === newSubjectCodeVal) return;

		this.appliedFilters.subjectCode = newSubjectCodeVal;
		this.appliedFilters.subjectNumber = "";
		this.subjectCodeControl.reset("All");
		this.searchCRN();
	}

	setSubjectNumber(val: string) {
		const newSubjectNumberVal = val === "All" ? "" : val;
		if(this.appliedFilters.subjectNumber === newSubjectNumberVal) return;

		this.appliedFilters.subjectNumber = newSubjectNumberVal;
		this.results = this.allResults.filter(course => course.subject_number === this.appliedFilters.subjectNumber);
	}

	searchCRN() {
		if(!this.appliedFilters.subjectCode) return;

		this.api.fetchCRNs(this.appliedFilters.term, this.appliedFilters.subjectCode)
			.then(courses => {
				this.allResults = courses;
				this.results = this.allResults;
				this.validSubjectNumbers = courses
					.map(res => res.subject_number)
					.filter((x, index, arr) => arr.indexOf(x) === index);
			})
			.catch(alert);
	}
}
