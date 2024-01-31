import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ApiService } from "../services/api-services/api.service";
import { APICrn, APISeats } from "../services/api-services/api-types";

import { SUBJECT_CODE_LIST, TERMS_LIST } from "../../temp/subjectCodes";
import json2csv from "../../utils/json2csv";
import downloadToFile from "../../utils/downloadString";
import { NotificationsService } from "../services/notification-services/notifications.service";

type SeatMap = { [key: APICrn["crn"] | APISeats["crn"] | string]: APISeats };

@Component({
	selector: 'app-seats',
	templateUrl: './seats.component.html',
	styleUrls: ['./seats.component.scss'],
	providers: [ApiService],
})
export class SeatsComponent {
	// Filter option lists
	validTerms: string[] = TERMS_LIST.slice();
	validSubjectCodes: string[] = SUBJECT_CODE_LIST.slice();
	validSubjectNumbers: string[] = [];

	appliedFilters = {
		term: "",
		subjectCode: "",
		subjectNumber: ""
	};

	subjectCodeControl: FormControl<string | null> = new FormControl("All");

	// Results directly from the API
	allResults: APICrn[] = [];
	// Displayed results after applying local filters
	results: APICrn[] = [];
	downloadSeatCount: boolean = false;
	seatsLoaded: boolean = false;
	seatMap: SeatMap = {};

	constructor(private api: ApiService, private notifications: NotificationsService) {}

	setTerm(val: string) {
		const newTermVal = val === "Default" ? "" : val;
		if(this.appliedFilters.term === newTermVal) return;

		this.appliedFilters.term = newTermVal;
		this.searchCRN();
	}

	setSubjectCode(newSubjectCodeVal: string) {
		if(this.appliedFilters.subjectCode === newSubjectCodeVal) return;

		this.appliedFilters.subjectCode = newSubjectCodeVal;
		this.appliedFilters.subjectNumber = "";
		this.subjectCodeControl.reset("All");
		this.searchCRN();
	}

	setSubjectNumber(val: string) {
		const newSubjectNumberVal = val === "All" ? "" : val;
		if(this.appliedFilters.subjectNumber === newSubjectNumberVal) return;

		this.appliedFilters.subjectNumber = newSubjectNumberVal;
		this.results = this.allResults.filter(course => !this.appliedFilters.subjectNumber || course.subject_number === this.appliedFilters.subjectNumber);
	}

	setDownloadSeatCount(event: Event) {
		this.downloadSeatCount = (event.currentTarget as HTMLInputElement).checked;
	}

	async searchCRN() {
		if(!this.appliedFilters.subjectCode) return;

		this.seatsLoaded = false;
		this.seatMap = {};
		try {
			const courses = await this.api.fetchCRNs(this.appliedFilters.term, this.appliedFilters.subjectCode);

			this.allResults = courses;
			this.results = this.allResults;
			this.validSubjectNumbers = courses
				.map(res => res.subject_number)
				.filter((x, index, arr) => arr.indexOf(x) === index);

			// TODO: Debug dropped frames and get around rate limit
			// const currentSeats = await Promise.all(courses.map(async (res: APICrn): Promise<APISeats | null> => {
			// 	const crn = res.crn;
			//
			// 	try {
			// 		return await this.api.fetchCurrentSeatsByCRN(this.appliedFilters.term, crn);
			// 	} catch(err: any) {
			// 		this.notifications.addNotification("error", err.toString());
			// 		console.error(err);
			//
			// 		return null;
			// 	}
			// }));
			//
			// this.seatMap = currentSeats.reduce((acc: SeatMap, cur: APISeats | null) => {
			// 	if(!cur) return acc;
			//
			// 	acc[(cur as APISeats).crn] = cur;
			// 	return acc;
			// }, {});
			// this.seatsLoaded = true;

		} catch(err: any) {
			this.notifications.addNotification("error", err.toString());
			console.error(err);
		}
	}

	downloadCRNResults(convertToCSV: boolean = false) {
		// Zip together the seatMap if enabled
		const exportResult = this.results.map(res => {
			const resultClone: APICrn & { seats?: APISeats | null } = { ...res };
			if(this.downloadSeatCount) {
				resultClone.seats = this.seatMap[res.crn] || null;
			}

			return resultClone;
		});

		let exportBlob: Blob;
		if(convertToCSV) {
			// Flatten seats into main object before exporting as CSV
			exportBlob = new Blob([json2csv(exportResult.map((res): APICrn | (APICrn & APISeats) => {
				const seats = res.seats || {};
				const result = {
					...res,
					...seats
				};
				delete result.seats;
				return result;
			}))], { type: "text/csv" });
		} else {
			exportBlob = new Blob([JSON.stringify(exportResult)], { type: "application/json" });
		}
		const exportDataUrl: string = window.URL.createObjectURL(exportBlob);
		let exportFileName = `CRN_Search_Results_${this.appliedFilters.term}_${this.appliedFilters.subjectCode}`;
		if(this.appliedFilters.subjectNumber) {
			exportFileName += `_${this.appliedFilters.subjectNumber}`;
		}

		downloadToFile(exportDataUrl, exportFileName);
	}
}
