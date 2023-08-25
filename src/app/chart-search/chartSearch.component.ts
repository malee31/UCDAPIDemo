import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { ApiService } from "../api-services/api.service";
import { APICourse } from "../api-services/api-types";

import { SUBJECT_CODE_LIST } from "../../temp/subjectCodes";

import { FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";

@Component({
	selector: "app-chart-search",
	templateUrl: "./chartSearch.component.html",
	styleUrls: ["./chartSearch.component.scss"],
	providers: [ApiService],
})
export class ChartSearchComponent {
	options: string[] = SUBJECT_CODE_LIST;
	subjectCodeControl = new FormControl("");
	crnControl = new FormControl("");
	filteredOptions: string[];
	filteredCRNOptions: string[];

	chosenSubjectCode: string = "";
	results: APICourse[] = [];
	chosenCourse: APICourse | null = null;

	@ViewChild("input") input!: ElementRef<HTMLInputElement>;
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
		this.filteredCRNOptions = this.results.map(course => course.crn).filter(o => o.toLowerCase().includes(filterValue));
	}

	@Input()
	set crn(val: string) {
		this.chosenCourse = this.results.find(course => course.crn === val) || null;
	}


	searchCRN(selection: MatAutocompleteSelectedEvent) {
		this.chosenSubjectCode = selection.option.value;

		this.api.fetchCRNsBySubjectCode(this.chosenSubjectCode)
			.then(courses => {
				this.results = courses;
			})
			.catch(alert);
	}
}
