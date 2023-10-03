import { Component } from '@angular/core';

type DOC_SLUGS = {
	details: string,
	params: string,
}
@Component({
	selector: 'app-seats-docs',
	templateUrl: './seats-docs.component.html',
	styleUrls: ['./seats-docs.component.scss']
})
export class SeatsDocsComponent {
	docSlug: string = "seats";
	slugs!: DOC_SLUGS;
	constructor() {
		this.slugs = {
			details: `${this.docSlug}-details`,
			params: `${this.docSlug}-params`
		}
	}
}
