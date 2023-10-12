import { Component } from '@angular/core';
import { ChunkInterface } from "../chunk-interface";

@Component({
  selector: 'app-seats-current-doc-chunk',
  templateUrl: './seats-current-doc-chunk.component.html',
  styleUrls: ['./seats-current-doc-chunk.component.scss']
})
export class SeatsCurrentDocChunkComponent extends ChunkInterface {
	constructor() {
		super("seat-current");
	}

	exampleResponse = JSON.stringify({
		ok: true,

	}, null, "\t");
}
