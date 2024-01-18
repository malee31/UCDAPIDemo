import { Component } from '@angular/core';
import { ChunkInterface } from "../chunk-interface";

@Component({
	selector: 'app-course-crn-metadata-doc-chunk',
	templateUrl: './course-crn-metadata-doc-chunk.component.html',
	styleUrls: ['./course-crn-metadata-doc-chunk.component.scss']
})
export class CourseCrnMetadataDocChunkComponent extends ChunkInterface {
	exampleResponse = JSON.stringify({
		"ok": true,
		"metadata": {
			"subject_code": "AAS",
			"subject_number": "010",
			"term": "202310",
			"reserved": false
		}
	}, null, "\t");
	constructor() {
		super("course-crn-metadata");
	}
}
