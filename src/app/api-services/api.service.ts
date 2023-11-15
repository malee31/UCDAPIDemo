import { Injectable } from "@angular/core";
import { APICourses, APICrn, APIDegrees, APILog, APISeats } from "./api-types";
import { ConstantsService } from "../config/constants.service";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	constructor(private CONSTANTS: ConstantsService) {}

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

	fetchDegreeTypes = async (): Promise<string[]> => {
		const apiRes = await fetch(`${this.CONSTANTS.SERVER_URL}/v1/degrees/types`);
		if(apiRes.status !== 200) throw new RangeError(`Degrees API responded with HTTP ${apiRes.status}`);
		const coursesResponse: { ok: boolean, degree_types: string[] } = await apiRes.json();
		return coursesResponse.degree_types;
	}

	fetchDegrees = async (degreeType: string = ""): Promise<APIDegrees[]> => {
		const apiRes = await fetch(`${this.CONSTANTS.SERVER_URL}/v1/degrees?type=${degreeType}`);
		if(apiRes.status !== 200) throw new RangeError(`Degrees API responded with HTTP ${apiRes.status}`);
		const coursesResponse: { ok: boolean, degrees: APIDegrees[] } = await apiRes.json();
		return coursesResponse.degrees;
	}

	fetchCourses = async (subjectCode: string): Promise<APICourses[]> => {
		const apiRes = await fetch(`${this.CONSTANTS.SERVER_URL}/v1/courses/details/${subjectCode}`);
		if(apiRes.status !== 200) throw new RangeError(`Courses API responded with HTTP ${apiRes.status}`);
		const coursesResponse: { ok: boolean, courses: APICourses[] } = await apiRes.json();
		return coursesResponse.courses;
	}
}
