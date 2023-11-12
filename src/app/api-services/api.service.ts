import { Injectable } from "@angular/core";
import { APICrn, APILog, APISeats } from "./api-types";
import { ConstantsService } from "../config/constants.service";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	fetchLogs = async (): Promise<APILog[]> => {
		const apiRes = await fetch(`${this.CONSTANTS.SERVER_URL}/logs/raw`);
		if(apiRes.status !== 200) throw new RangeError(`Logs responded with HTTP ${apiRes.status}`);
		const logResponse = await apiRes.json();
		return logResponse.logs;
	}

	fetchCRNs = async (term: string, subjectCode: string, subjectNumber?: string): Promise<APICrn[]> => {
		let baseURL = `${this.CONSTANTS.SERVER_URL}/v1/courses/crns/${subjectCode}`;
		if(subjectNumber) {
			baseURL = `${baseURL}/${subjectNumber}`;
		}

		const apiRes = await fetch(`${baseURL}?term=${term}`);
		if(apiRes.status !== 200) throw new RangeError(`Course by Subject Code responded with HTTP ${apiRes.status}`);
		const coursesResponse: { ok: boolean, crns: APICrn[] } = await apiRes.json();
		return coursesResponse.crns;
	}

	fetchSeatHistoryByCRN = async (term: string, crn: string, optimized: boolean = false): Promise<APISeats[]> => {
		const apiRes = await fetch(`${this.CONSTANTS.SERVER_URL}/v1/seats/history/${crn}?optimized=${Number(optimized)}&term=${term}`);
		if(apiRes.status !== 200) throw new RangeError(`Seats by CRN responded with HTTP ${apiRes.status}`);
		const coursesResponse: { ok: boolean, history: APISeats[] } = await apiRes.json();
		return coursesResponse.history;
	}

	constructor(private CONSTANTS: ConstantsService) {}
}
