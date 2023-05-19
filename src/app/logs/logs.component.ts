import { Component } from "@angular/core";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.scss"]
})
export class LogsComponent {
	logs = [
		{
			timestamp: 1684479600000,
			log_type: "demo",
			message: "Hi",
			related_data: "None"
		}
	]
}
