import { Component } from '@angular/core';
import { ChunkInterface } from "../chunk-interface";

@Component({
	selector: 'app-course-crns-doc-chunk',
	templateUrl: './course-crns-doc-chunk.component.html',
	styleUrls: ['./course-crns-doc-chunk.component.scss']
})
export class CourseCrnsDocChunkComponent extends ChunkInterface {
	exampleResponse = JSON.stringify({
		"ok": true,
		"crns": [
			{
				"crn": "21623",
				"subject_code": "ECS",
				"subject_number": "017",
				"reserved": false
			},
			{
				"crn": "21624",
				"subject_code": "ECS",
				"subject_number": "017",
				"reserved": false
			}
		]
	}, null, "\t");
	constructor() {
		super("course-crns");
	}
}
