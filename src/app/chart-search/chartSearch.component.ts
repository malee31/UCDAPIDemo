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

	// Mobile-specific settings
	mobileShowFilters: boolean = false;
	toggleMobileFilters(): void {
		this.mobileShowFilters = !this.mobileShowFilters;
	}

	// Filters and their values
	// Term filter
	@ViewChild("termInput") termInput!: ElementRef<HTMLInputElement>;
	termControl = new FormControl("Default");
	// Subject code filter
	@ViewChild("subjectCodeInput") subjectCodeInput!: ElementRef<HTMLInputElement>;
	subjectCodeControl = new FormControl("");

	appliedFilters = {
		term: "",
		subjectCode: "",
		subjectNumber: ""
	};

	// Autocomplete filters
	filteredOptions: string[];

	// Displayed results
	results: APICrn[] = [];

	constructor(private api: ApiService) {
		this.filteredOptions = this.validSubjectCodes;
	}

	resetAutofillSubjectCode() {
		this.filteredOptions = this.validSubjectCodes;
	}

	filterSubjectCodes(): void {
		const filterValue = this.subjectCodeInput.nativeElement.value.toLowerCase();
		this.filteredOptions = this.validSubjectCodes.filter(o => o.toLowerCase().includes(filterValue));
	}

	setTerm(val: string) {
		const newTermVal = val === "Default" ? "" : val;
		if(this.appliedFilters.term === newTermVal) return;

		this.appliedFilters.term = newTermVal;
		this.searchCRN();
	}

	setSubjectCode(newSubjectCodeVal: string) {
		if(this.appliedFilters.subjectCode === newSubjectCodeVal) return;

		this.appliedFilters.subjectCode = newSubjectCodeVal;
		this.searchCRN();
	}

	searchCRN() {
		if(!this.appliedFilters.subjectCode) return;

		this.api.fetchCRNsBySubjectCode(this.appliedFilters.term, this.appliedFilters.subjectCode)
			.then(courses => {
				this.results = courses;
			})
			.catch(alert);
	}
}
