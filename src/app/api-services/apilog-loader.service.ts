import { Injectable } from "@angular/core";
import { APILog } from "./api-types";
import { ConstantsService } from "../config/constants.service";

@Injectable({
	providedIn: "root",
})
export class APILogLoaderService {
	logs: APILog[] = [];

	fetchLogs = async (): Promise<APILog[]> => {
		// TODO: Add interaction with server
		const apiRes = await fetch(`${this.CONSTANTS.SERVER_URL}/logs/raw`, {
			headers: {}
		});
		if(apiRes.status !== 200) throw new RangeError(`Logs responded with HTTP ${apiRes.status}`);
		const logResponse = await apiRes.json();
		return logResponse.logs;
	};

	constructor(private CONSTANTS: ConstantsService) {
		this.fetchLogs()
			.then(() => console.log("Logs Fetched"))
			.catch(err => {
				console.warn("Failed to Fetch Logs");
				console.error(err);
			});
	}
}
