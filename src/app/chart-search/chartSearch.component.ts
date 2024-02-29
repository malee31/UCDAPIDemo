import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api-services/api.service";
import { APICrn } from "../services/api-services/api-types";

import { SUBJECT_CODE_LIST, TERMS_LIST } from "../../temp/subjectCodes";

import { FormControl } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
	selector: "app-chart-search",
	templateUrl: "./chartSearch.component.html",
	styleUrls: ["./chartSearch.component.scss"],
	providers: [ApiService],
})
export class ChartSearchComponent implements OnInit {
	// Filter option lists
	validTerms: string[] = TERMS_LIST.slice();
	validSubjectCodes: string[] = SUBJECT_CODE_LIST.slice();
	validSubjectNumbers: string[] = [];

	appliedFilters = {
		term: "",
		subjectCode: "",
		subjectNumber: ""
	};

	subjectCodeControl: FormControl<string | null> = new FormControl("");
	subjectNumberControl: FormControl<string | null> = new FormControl("All");

	// Results directly from the API
	allResults: APICrn[] = [];
	// Displayed results after applying local filters
	results: APICrn[] = [];

	constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {}

	setTerm(val: string) {
		const newTermVal = val === "Default" ? "" : val;
		if(this.appliedFilters.term === newTermVal) return;

		this.router.navigate(
			[],
			{
				relativeTo: this.activatedRoute,
				queryParamsHandling: "merge",
				queryParams: {
					term: newTermVal
				}
			}
		);
	}

	setSubjectCode(newSubjectCodeVal: string) {
		if(this.appliedFilters.subjectCode === newSubjectCodeVal) return;

		this.subjectNumberControl.reset("All");

		this.router.navigate(
			[],
			{
				relativeTo: this.activatedRoute,
				queryParamsHandling: "merge",
				queryParams: {
					subjectCode: newSubjectCodeVal,
					subjectNumber: ""
				}
			}
		);
	}

	setSubjectNumber(val: string) {
		const newSubjectNumberVal = val === "All" ? "" : val;
		if(this.appliedFilters.subjectNumber === newSubjectNumberVal) return;

		this.router.navigate(
			[],
			{
				relativeTo: this.activatedRoute,
				queryParamsHandling: "merge",
				queryParams: {
					subjectNumber: newSubjectNumberVal
				}
			}
		);
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
					.filter((x, index, arr) => arr.indexOf(x) === index)
					.sort();

				if(this.appliedFilters.subjectNumber && this.appliedFilters.subjectNumber !== "All") {
					this.results = this.allResults.filter(course => course.subject_number === this.appliedFilters.subjectNumber);
				}
			})
			.catch(alert);
	}

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((value: Params) => {
			this.appliedFilters.term = value["term"] ?? "";
			this.appliedFilters.subjectCode = value["subjectCode"] ?? "";
			this.appliedFilters.subjectNumber = value["subjectNumber"] ?? "";

			if(this.appliedFilters.subjectCode) {
				this.subjectCodeControl.setValue(this.appliedFilters.subjectCode);
			}
			if(this.appliedFilters.subjectNumber) {
				this.subjectNumberControl.setValue(this.appliedFilters.subjectNumber);
			}

			this.searchCRN();
		})
	}
}
