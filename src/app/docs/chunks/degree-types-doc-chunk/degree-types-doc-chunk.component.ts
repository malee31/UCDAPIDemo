import { Component } from '@angular/core';
import { ChunkInterface } from "../chunk-interface";

@Component({
	selector: 'app-degree-types-doc-chunk',
	templateUrl: './degree-types-doc-chunk.component.html',
	styleUrls: ['./degree-types-doc-chunk.component.scss']
})
export class DegreeTypesDocChunkComponent extends ChunkInterface {
	constructor() {
		super("degree-types");
	}

	exampleResponse = JSON.stringify({
		"ok": true,
		"degree_types": [
			"Bachelor of Arts",
			"Bachelor of Science",
			"Bachelor of Science/Master of Science Integrated",
			"Bachelor of Science/Master of Science Integrated Degree Programs (IDP)",
			"Designated Emphasis",
			"Doctorate in Education (CANDEL)",
			"Doctor of Engineering",
			"Doctor of Jurisprudence",
			"Doctor of Medicine",
			"Doctor of Nursing Practice—Family Nurse Practitioner Degree Program",
			"Doctor of Philosophy",
			"Doctor of Philosophy (Joint Doctorate with SDSU)",
			"Individual",
			"Master of Advanced Studies",
			"Master of Advanced Study",
			"Master of Arts",
			"Master of Arts/Doctor of Jurisprudence",
			"Master of Business Administration",
			"Master of Business Administration Online",
			"Master of Engineering",
			"Master of Fine Arts",
			"Master of Health Services",
			"Master of Laws",
			"Master of Preventive Veterinary Medicine",
			"Master of Professional Accountancy",
			"Master of Public Health",
			"Master of Science",
			"Master of Science/Master of Business Administration",
			"Master's Entry Program in Nursing",
			"Minor"
		]
	}, null, "\t");
}
