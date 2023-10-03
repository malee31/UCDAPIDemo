import { Component } from '@angular/core';

type DOC_SLUGS = {
	details: string,
	params: string,
	response: string,
	warnings: string,
	errors: string,
}
@Component({
	selector: 'app-seats-docs',
	templateUrl: './seats-docs.component.html',
	styleUrls: ['./seats-docs.component.scss']
})
export class SeatsDocsComponent {
	docSlug: string = "seats";
	slugs!: DOC_SLUGS;
	exampleResponse: string = JSON.stringify({
		ok: true,
		history: [
			{
				"id": 9960085,
				"refresh_cycle_timestamp": "1695301201951",
				"timestamp": "1695301215143",
				"crn": "30459",
				"seats_available": 0,
				"seats_reserved": 0,
				"waitlist": 39
			},
			"----- 198 more results -----",
			{
				"id": 10825650,
				"batch_timestamp": "1696366801536",
				"timestamp_local": "1696366814073",
				"crn": "30459",
				"seats_available": 0,
				"seats_reserved": 0,
				"waitlist": 15,
				"createdAt": "2023-10-03T21:00:14.073Z",
				"updatedAt": "2023-10-03T21:00:14.073Z"
			}
		]
	}, null, "\t");
	constructor() {
		this.slugs = {
			details: `${this.docSlug}-details`,
			params: `${this.docSlug}-params`,
			response: `${this.docSlug}-response`,
			warnings: `${this.docSlug}-warnings`,
			errors: `${this.docSlug}-errors`
		};
	}
}
