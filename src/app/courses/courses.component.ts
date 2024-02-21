import { Component } from '@angular/core';
import { SUBJECT_CODE_LIST } from "../../temp/subjectCodes";
import { FormControl } from "@angular/forms";
import { APICourses } from "../services/api-services/api-types";
import { ApiService } from "../services/api-services/api.service";
import json2csv from "../../utils/json2csv";
import downloadToFile from "../../utils/downloadString";

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
	// Filter option lists
	validSubjectCodes: string[] = SUBJECT_CODE_LIST.slice();
	validSubjectNumbers: string[] = [];

	appliedFilters = {
		subjectCode: "",
		subjectNumber: ""
	};

	subjectCodeControl: FormControl<string | null> = new FormControl("All");

	// Results directly from the API
	allResults: APICourses[] = [];
	// Displayed results after applying local filters
	results: APICourses[] = [];

	constructor(private api: ApiService) {}

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

		this.api.fetchCourses(this.appliedFilters.subjectCode)
			.then(courses => {
				this.allResults = courses;
				this.results = this.allResults;
				this.validSubjectNumbers = courses
					.map(res => res.subject_number)
					.filter((x, index, arr) => arr.indexOf(x) === index);
			})
	}

	downloadResults(convertToCSV: boolean = false) {
		let exportBlob: Blob;
		if(convertToCSV) {
			exportBlob = new Blob([json2csv(this.results)], { type: "text/csv" });
		} else {
			exportBlob = new Blob([JSON.stringify(this.results, null, "\t")], { type: "application/json" });
		}
		const exportDataUrl: string = window.URL.createObjectURL(exportBlob);
		const exportFileName = "Course_Search_Results";

		downloadToFile(exportDataUrl, exportFileName);
	}
}
