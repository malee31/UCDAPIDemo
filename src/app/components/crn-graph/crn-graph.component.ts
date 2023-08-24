// A wrapper around graph.component.ts that independently loads in the data given a CRN
import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "../../api-services/api.service";
import { APISeats } from "../../api-services/api-types";

@Component({
	selector: "app-crn-graph",
	templateUrl: "./crn-graph.component.html",
	styleUrls: ["./crn-graph.component.scss"],
	providers: [ApiService]
})
export class CrnGraphComponent implements OnInit {
	public loading: boolean = true;
	public failed: boolean = false;
	public crnData: APISeats[] = [];
	@Input({ required: true }) crn: string = "";

	constructor(private api: ApiService) {}

	ngOnInit(): void {
		if(this.crn.length !== 5) {
			throw new Error(`CRN must be 5 characters: "${this.crn}"`);
		}

		this.api.fetchSeatHistoryByCRN(this.crn)
			.then((seats: APISeats[]) => {
				this.crnData = seats;
			})
			.catch(err => {
				this.failed = true;
				console.error(err);
			})
			.finally(() => {
				this.loading = false;
			});
	}
}
