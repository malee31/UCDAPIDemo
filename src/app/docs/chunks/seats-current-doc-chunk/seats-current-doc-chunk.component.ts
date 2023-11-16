import { Component } from '@angular/core';
import { ChunkInterface } from "../chunk-interface";

@Component({
	selector: 'app-seats-current-doc-chunk',
	templateUrl: './seats-current-doc-chunk.component.html',
	styleUrls: ['./seats-current-doc-chunk.component.scss']
})
export class SeatsCurrentDocChunkComponent extends ChunkInterface {
	exampleResponse = JSON.stringify({
		ok: true,
		seats: {
			crn: "30457",
			seats_available: 0,
			seats_reserved: 0,
			waitlist: 32,
			refresh_cycle_timestamp: "1697130001943",
			timestamp: "1697130014116"
		}
	}, null, "\t");
	constructor() {
		super("seat-current");
	}
}
