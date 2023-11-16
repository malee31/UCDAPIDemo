import { Component } from '@angular/core';
import { ChunkInterface } from "../chunk-interface";

@Component({
	selector: 'app-degrees-doc-chunk',
	templateUrl: './degrees-doc-chunk.component.html',
	styleUrls: ['./degrees-doc-chunk.component.scss']
})
export class DegreesDocChunkComponent extends ChunkInterface {
	exampleResponse = JSON.stringify({
		"ok": true,
		"degrees": [
			{
				"identifier": "Master's Entry Program in Nursing",
				"name": "",
				"degree_type": "Master's Entry Program in Nursing"
			},
			{
				"identifier": "Doctor of Medicine",
				"name": "",
				"degree_type": "Doctor of Medicine"
			},
			{
				"identifier": "Master of Laws",
				"name": "",
				"degree_type": "Master of Laws"
			},
			{
				"identifier": "Agricultural & Environmental Chemistry, Master of Science",
				"name": "Agricultural & Environmental Chemistry",
				"degree_type": "Master of Science"
			},
			{
				"identifier": "Agricultural & Environmental Chemistry, Doctor of Philosophy",
				"name": "Agricultural & Environmental Chemistry",
				"degree_type": "Doctor of Philosophy"
			},
			{
				"identifier": "Agricultural & Environmental Sciences, Bachelor of Science, Individual",
				"name": "Agricultural & Environmental Sciences, Bachelor of Science",
				"degree_type": "Individual"
			},
			{
				"identifier": "Agricultural & Environmental Technology, Bachelor of Science",
				"name": "Agricultural & Environmental Technology",
				"degree_type": "Bachelor of Science"
			},
			{
				"identifier": "Agricultural Pest Management, Minor",
				"name": "Agricultural Pest Management",
				"degree_type": "Minor"
			}
		]
	}, null, "\t");
	constructor() {
		super("degrees");
	}
}
