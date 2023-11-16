import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-crn-lookup-result',
	templateUrl: './crn-lookup-result.component.html',
	styleUrls: ['./crn-lookup-result.component.scss']
})
export class CrnLookupResultComponent {
	@Input({ required: true }) term: string = "";
	@Input({ required: true }) crn: string = "";
	@Input({ required: true }) subject_code: string = "";
	@Input({ required: true }) subject_number: string = "";
}
