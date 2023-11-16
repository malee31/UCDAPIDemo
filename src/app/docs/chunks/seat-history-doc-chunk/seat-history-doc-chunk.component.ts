import { Component } from '@angular/core';
import { ChunkInterface } from "../chunk-interface";

@Component({
	selector: 'app-seat-history-doc-chunk',
	templateUrl: './seat-history-doc-chunk.component.html',
	styleUrls: ['./seat-history-doc-chunk.component.scss']
})
export class SeatHistoryDocChunkComponent extends ChunkInterface {
	exampleResponse: string = JSON.stringify({
		"ok": true,
		"history": [
			{
				"crn": "30459",
				"seats_available": 0,
				"seats_reserved": 0,
				"waitlist": 54,
				"refresh_cycle_timestamp": "1685761205974",
				"timestamp": "1685761271569",
				"net_diff": 0
			},
			{
				"crn": "30459",
				"seats_available": 1,
				"seats_reserved": 0,
				"waitlist": 54,
				"refresh_cycle_timestamp": "1685764804224",
				"timestamp": "1685764896355",
				"net_diff": 1
			},
			{
				"crn": "30459",
				"seats_available": 0,
				"seats_reserved": 0,
				"waitlist": 53,
				"refresh_cycle_timestamp": "1685772004274",
				"timestamp": "1685772075992",
				"net_diff": 0
			}
		]
	}, null, "\t");
	constructor() {
		super("seat-history");
	}
}
