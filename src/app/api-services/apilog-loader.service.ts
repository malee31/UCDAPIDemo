import { Injectable } from "@angular/core";
import { APILog } from "./api-types";

@Injectable({
	providedIn: "root"
})
export class APILogLoaderService {
	logs: APILog[] = [];

	fetchLogs = async (): Promise<APILog[]> => {
		// TODO: Add interaction with server
		return Promise.resolve([
			{
				timestamp: 1684479600000,
				log_type: "Mocked",
				message: "Loaded in Logs",
				related_data: "None"
			}
		]);
	};

	constructor() {
		this.fetchLogs()
			.then(() => console.log("Logs Fetched"))
			.catch(err => {
				console.warn("Failed to Fetch Logs");
				console.error(err);
			});
	}
}
