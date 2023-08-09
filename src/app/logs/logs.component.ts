import { Component, OnInit } from "@angular/core";
import { APILogLoaderService } from "../api-services/apilog-loader.service";
import { APILog } from "../api-services/api-types";

@Component({
	selector: "app-logs",
	templateUrl: "./logs.component.html",
	styleUrls: ["./logs.component.scss"],
	providers: [APILogLoaderService]
})
export class LogsComponent implements OnInit  {
	logs: APILog[] = [
		{
			timestamp: 1684479600000,
			log_type: "demo",
			message: "Hi",
			related_data: "None"
		}
	]

	constructor(private APILogLoader: APILogLoaderService) {}

	ngOnInit(): void {
		this.APILogLoader.fetchLogs().then((logs: APILog[]) => this.logs = logs);
	}
}
