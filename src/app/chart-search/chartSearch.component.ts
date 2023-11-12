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

	// Mobile-specific settings
	mobileShowFilters: boolean = false;
	toggleMobileFilters(): void {
		this.mobileShowFilters = !this.mobileShowFilters;
	}

	// Filters and their values
	// Term filter
	@ViewChild("termInput") termInput!: ElementRef<HTMLInputElement>;
	termControl = new FormControl("Default");
	// Subject code and number filters
	@ViewChild("subjectCodeInput") subjectCodeInput!: ElementRef<HTMLInputElement>;
	subjectCodeControl = new FormControl("");
	@ViewChild("subjectNumberInput") subjectNumberInput!: ElementRef<HTMLInputElement>;
	subjectNumberControl = new FormControl("All");

	appliedFilters = {
		term: "",
		subjectCode: "",
		subjectNumber: ""
	};

	// Autocomplete filters
	filteredCodeOptions: string[];
	filteredNumberOptions: string[] = [];

	// Displayed results
	results: APICrn[] = [];

	constructor(private api: ApiService) {
		this.filteredCodeOptions = this.validSubjectCodes;
	}

	resetAutofillSubjectCode() {
		this.filteredCodeOptions = this.validSubjectCodes;
	}
	resetAutofillSubjectNumber() {
		this.filteredNumberOptions = this.validSubjectNumbers;
	}

	applyPartialSubjectCodeFilter(e: Event): void {
		const filterValue = (e.currentTarget as HTMLInputElement).value.toLowerCase();
		this.filteredCodeOptions = this.validSubjectCodes.filter(o => o.toLowerCase().includes(filterValue));
	}

	applyPartialSubjectNumberFilter(e: Event): void {
		const filterValue = (e.currentTarget as HTMLInputElement).value.toLowerCase();
		this.filteredNumberOptions = this.validSubjectNumbers.filter(o => o.toLowerCase().includes(filterValue));
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
		this.appliedFilters.subjectNumber = "";
		this.subjectNumberControl.reset("");
		this.searchCRN();
	}

	setSubjectNumber(val: string) {
		const newSubjectNumberVal = val === "All" ? "" : val;
		if(this.appliedFilters.subjectNumber === newSubjectNumberVal) return;

		this.appliedFilters.subjectNumber = newSubjectNumberVal;
		this.searchCRN();
	}

	searchCRN() {
		if(!this.appliedFilters.subjectCode) return;

		this.api.fetchCRNs(this.appliedFilters.term, this.appliedFilters.subjectCode, this.appliedFilters.subjectNumber)
			.then(courses => {
				this.results = courses;
				this.validSubjectNumbers = courses
					.map(res => res.subject_number)
					.filter((x, index, arr) => arr.indexOf(x) === index);
			})
			.catch(alert);
	}
}
