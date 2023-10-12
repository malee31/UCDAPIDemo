import { Component } from '@angular/core';

type DOC_SLUGS = {
	details: string,
	params: string,
	response: string,
	warnings: string,
	errors: string,
}
@Component({
	selector: 'app-seat-history-doc-chunk',
	templateUrl: './seat-history-doc-chunk.component.html',
	styleUrls: ['./seat-history-doc-chunk.component.scss']
})
export class SeatHistoryDocChunkComponent {
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
				"refresh_cycle_timestamp": "1696366801536",
				"timestamp": "1696366814073",
				"crn": "30459",
				"seats_available": 0,
				"seats_reserved": 0,
				"waitlist": 15
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
