import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from "../../api-services/api.service";
import { APICourse } from "../../api-services/api-types";

@Component({
	selector: 'app-course-name-graph',
	templateUrl: './course-name-graph.component.html',
	styleUrls: ['./course-name-graph.component.scss'],
	providers: [ApiService]
})
export class CourseNameGraphComponent implements OnInit {
	@Input({ required: true }) subject_code: string = "";
	@Input({ required: true }) subject_number: string = "";

	courses: APICourse[] = [];

	constructor(private api: ApiService) {}

	ngOnInit(): void {
		this.api.fetchCRNsBySubjectCodeAndNumber(this.subject_code, this.subject_number)
			.then((courses: APICourse[]) => {
				this.courses = courses;
			})
			.catch(err => {
				alert(`Unable to find courses: ${err}`);
			});
	}
}
