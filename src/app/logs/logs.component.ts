import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api-services/api.service";
import { APILog } from "../api-services/api-types";

@Component({
	selector: "app-logs",
	templateUrl: "./logs.component.html",
	styleUrls: ["./logs.component.scss"],
	providers: [ApiService]
})
export class LogsComponent implements OnInit  {
	logs: APILog[] = [
		{
			timestamp: 1690873200000,
			log_type: "Loading",
			message: "Logs are Loading",
			related_data: "..."
		}
	]

	constructor(private api: ApiService) {}

	ngOnInit(): void {
		this.api.fetchLogs().then((logs: APILog[]) => this.logs = logs);
	}
}
