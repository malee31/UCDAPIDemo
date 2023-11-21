import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from "../../services/api-services/api.service";
import { APICrn } from "../../services/api-services/api-types";
import { NotificationsService } from "../../services/notification-services/notifications.service";

@Component({
	selector: 'app-course-name-graph',
	templateUrl: './course-name-graph.component.html',
	styleUrls: ['./course-name-graph.component.scss'],
	providers: [ApiService]
})
export class CourseNameGraphComponent implements OnInit {
	@Input({ required: true }) term: string = "";
	@Input({ required: true }) subject_code: string = "";
	@Input({ required: true }) subject_number: string = "";

	courses: APICrn[] = [];

	constructor(private api: ApiService, private notification: NotificationsService) {}

	ngOnInit(): void {
		this.api.fetchCRNs(this.term, this.subject_code, this.subject_number)
			.then((courses: APICrn[]) => {
				this.courses = courses;
			})
			.catch(err => {
				this.notification.addNotification("error", `Unable to find courses: ${err}`);
			});
	}
}
