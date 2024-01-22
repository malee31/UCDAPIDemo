// A wrapper around graph.component.ts that independently loads in the data given a CRN
import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "../../services/api-services/api.service";
import { APICrnMetadata, APISeats } from "../../services/api-services/api-types";
import { ActivatedRoute, ParamMap } from "@angular/router";

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
	public crnMetadata: APICrnMetadata | null = null;
	public term: string = "";
	public optimized: boolean = false;
	@Input({ required: true }) crn: string = "";

	constructor(private api: ApiService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		if(this.crn.length !== 5) {
			throw new Error(`CRN must be 5 characters: "${this.crn}"`);
		}

		this.route.queryParamMap.subscribe((params: ParamMap) => {
			const optimizedParam = params.get("optimized");
			this.optimized = optimizedParam === "true" || optimizedParam === "1";
			this.term = params.get("term") || "";

			Promise.all([
				this.api.fetchCRNMetadata(this.term, this.crn)
					.then((metadata: APICrnMetadata) => this.crnMetadata = metadata)
					.catch(err => {
						this.failed = true;
						console.error(err);
					}),
				this.api.fetchSeatHistoryByCRN(this.term, this.crn, this.optimized)
					.then((seats: APISeats[]) => {
						this.crnData = seats;
					})
					.catch(err => {
						this.failed = true;
						console.error(err);
					})
			])
				.finally(() => {
					this.loading = false;
				});
		});
	}
}
