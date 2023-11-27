import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { APISeats } from "../../../../services/api-services/api-types";
import { initFlowbite } from "flowbite";

@Component({
	selector: 'app-crn-lookup-result',
	templateUrl: './crn-lookup-result.component.html',
	styleUrls: ['./crn-lookup-result.component.scss']
})
export class CrnLookupResultComponent implements OnChanges {
	@Input({ required: true }) term: string = "";
	@Input({ required: true }) crn: string = "";
	@Input({ required: true }) subject_code: string = "";
	@Input({ required: true }) subject_number: string = "";
	@Input() currentSeats: APISeats | null = null;

	ngOnChanges(changes: SimpleChanges) {
		if(changes["currentSeats"]) {
			initFlowbite();
		}
	}
}
