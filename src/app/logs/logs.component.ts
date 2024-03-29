import { Component, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { LogDatePipe } from "./LogDate.pipe";
import { ApiService } from "../services/api-services/api.service";
import { APILog } from "../services/api-services/api-types";

@Component({
	selector: "app-logs",
	templateUrl: "./logs.component.html",
	styleUrls: ["./logs.component.scss"],
	providers: [ApiService],
	standalone: true,
	imports: [LogDatePipe, MatTableModule]
})
export class LogsComponent implements OnInit {
	columns: string[] = ["timestamp", "log_type", "message", "related_data"];
	logs: APILog[] = [
		{
			timestamp: Date.now(),
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
