import { Component } from '@angular/core';
import { SUBJECT_CODE_LIST, TERMS_LIST } from "../../temp/subjectCodes";
import { FormControl } from "@angular/forms";
import { APICrn } from "../api-services/api-types";
import { ApiService } from "../api-services/api.service";

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
	// Filter option lists
	validTerms: string[] = TERMS_LIST.slice();
	validSubjectCodes: string[] = SUBJECT_CODE_LIST.slice();
	validSubjectNumbers: string[] = [];

	appliedFilters = {
		term: "",
		subjectCode: "",
		subjectNumber: ""
	};

	subjectCodeControl: FormControl<string | null> = new FormControl("All");

	// Results directly from the API
	allResults: APICrn[] = [];
	// Displayed results after applying local filters
	results: APICrn[] = [];

	constructor(private api: ApiService) {}

	setTerm(val: string) {
		const newTermVal = val === "Default" ? "" : val;
		if(this.appliedFilters.term === newTermVal) return;

		this.appliedFilters.term = newTermVal;
		this.searchCourses();
	}

	setSubjectCode(newSubjectCodeVal: string) {
		if(this.appliedFilters.subjectCode === newSubjectCodeVal) return;

		this.appliedFilters.subjectCode = newSubjectCodeVal;
		this.appliedFilters.subjectNumber = "";
		this.subjectCodeControl.reset("All");
		this.searchCourses();
	}

	setSubjectNumber(val: string) {
		const newSubjectNumberVal = val === "All" ? "" : val;
		if(this.appliedFilters.subjectNumber === newSubjectNumberVal) return;

		this.appliedFilters.subjectNumber = newSubjectNumberVal;
		this.results = this.allResults.filter(course => course.subject_number === this.appliedFilters.subjectNumber);
	}

	searchCourses() {
		if(!this.appliedFilters.subjectCode) return;

		alert("Not implemented")
	}
}
