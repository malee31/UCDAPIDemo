import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "../api-services/api.service";
import { APISeats } from "../api-services/api-types";

@Component({
	selector: "app-chart",
	templateUrl: "./chart.component.html",
	styleUrls: ["./chart.component.scss"],
	providers: [ApiService]
})
export class ChartComponent implements OnInit {
	public loading = true;
	public crnData: APISeats[] = [];

	@Input()
	public crn: string = "";

	constructor(private api: ApiService) {}

	ngOnInit() {
		if(this.crn.length !== 5) {
			throw new Error("CRN must be 5 characters");
		}

		this.api.fetchSeatHistoryByCRN(this.crn)
			.then((seats: APISeats[]) => {
				this.crnData = seats;
				this.loading = false;
			})
			.catch(alert);
	}
}
