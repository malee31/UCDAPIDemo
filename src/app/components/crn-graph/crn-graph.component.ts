// A wrapper around graph.component.ts that independently loads in the data given a CRN
import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "../../api-services/api.service";
import { APISeats } from "../../api-services/api-types";
import { ActivatedRoute } from "@angular/router";

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

	constructor(private api: ApiService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		if(this.crn.length !== 5) {
			throw new Error(`CRN must be 5 characters: "${this.crn}"`);
		}

		this.route.queryParams.subscribe(params => {
			console.log(params)
			const optimized: boolean = params["optimized"] === "true" || params["optimized"] === "0";
			this.api.fetchSeatHistoryByCRN(this.crn, optimized)
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
		});


	}
}
