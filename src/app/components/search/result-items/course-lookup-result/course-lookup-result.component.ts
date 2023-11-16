import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-course-lookup-result',
	templateUrl: './course-lookup-result.component.html',
	styleUrls: ['./course-lookup-result.component.scss']
})
export class CourseLookupResultComponent {
	@Input({ required: true }) subject_code: string = "";
	@Input({ required: true }) subject_number: string = "";
	@Input({ required: true }) course_title: string = "";
	@Input({ required: true }) units: number = -1;
	@Input({ required: true }) description: string = "";
	@Input({ required: true }) prerequisites: string = "";
	@Input({ required: true }) GE_credits: string = "";
	@Input({ required: true }) learning_activities: string = "";
	@Input({ required: true }) grade_mode: string = "";
	@Input({ required: true }) enrollment_restrictions: string = "";
	@Input({ required: true }) credit_limit: string = "";
	@Input({ required: true }) cross_listing: string = "";
	@Input({ required: true }) repeat_credit: string = "";
}
