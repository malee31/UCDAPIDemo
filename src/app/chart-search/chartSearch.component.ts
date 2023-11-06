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
	validTerms: string[] = TERMS_LIST;
	options: string[] = SUBJECT_CODE_LIST;
	termControl = new FormControl("Default");
	subjectCodeControl = new FormControl("");
	crnControl = new FormControl("");
	filteredOptions: string[];
	filteredCRNOptions: APICrn[];

	chosenTerm: string = "";
	chosenSubjectCode: string = "";
	results: APICrn[] = [];
	chosenCourse: APICrn | null = null;

	mobileShowFilters: boolean = false;

	@ViewChild("input") input!: ElementRef<HTMLInputElement>;
	@ViewChild("termInput") termInput!: ElementRef<HTMLInputElement>;
	@ViewChild("crnInput") crnInput!: ElementRef<HTMLInputElement>;

	constructor(private api: ApiService) {
		this.filteredOptions = this.options.slice();
		this.filteredCRNOptions = [];
	}

	filter(): void {
		const filterValue = this.input.nativeElement.value.toLowerCase();
		this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
		this.crnControl.setValue("");
	}

	filterCRN(): void {
		const filterValue = this.crnInput.nativeElement.value.toLowerCase();
		this.filteredCRNOptions = this.results.filter(course => course.crn.toLowerCase().includes(filterValue));
	}

	toggleMobileFilters(): void {
		this.mobileShowFilters = !this.mobileShowFilters;
	}

	set crn(val: string) {
		this.chosenCourse = this.results.find(course => course.crn === val) || null;
	}

	set term(val: string) {
		if(val === "Default") {
			this.chosenTerm = "";
		} else {
			this.chosenTerm = val;
		}
		this.searchCRN();
	}

	set subjectCode(val: string) {
		this.chosenSubjectCode = val;
		this.searchCRN();
	}

	searchCRN() {
		if(!this.chosenSubjectCode) return;

		this.api.fetchCRNsBySubjectCode(this.chosenTerm, this.chosenSubjectCode)
			.then(courses => {
				this.results = courses;
			})
			.catch(alert);
	}
}
