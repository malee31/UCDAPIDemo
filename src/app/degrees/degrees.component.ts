import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api-services/api.service";
import { APIDegrees } from "../api-services/api-types";
import json2csv from "../../utils/json2csv";
import downloadToFile from "../../utils/downloadString";

@Component({
	selector: 'app-degrees',
	templateUrl: './degrees.component.html',
	styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {
	validDegreeTypes: string[] = [];
	filters = {
		degreeType: ""
	};

	results: APIDegrees[] = [];

	constructor(private api: ApiService) {}
	ngOnInit() {
		this.api.fetchDegreeTypes()
			.then(degreeTypes => {
				this.validDegreeTypes = degreeTypes;
			});
		this.searchDegrees();
	}

	setDegreeType(degreeType: string) {
		const degreeVal = degreeType === "All" ? "" : degreeType;
		if(this.filters.degreeType === degreeVal) return;
		this.filters.degreeType = degreeVal;
		this.searchDegrees();
	}

	searchDegrees() {
		this.api.fetchDegrees(this.filters.degreeType)
			.then(degrees => {
				this.results = degrees
			})
	}

	downloadResults(convertToCSV: boolean = false) {
		let exportBlob: Blob;
		if(convertToCSV) {
			exportBlob = new Blob([json2csv(this.results)], { type: "text/csv" });
		} else {
			exportBlob = new Blob([JSON.stringify(this.results)], { type: "application/json" });
		}
		const exportDataUrl: string = window.URL.createObjectURL(exportBlob);
		let exportFileName = "Degree_Search_Results";
		if(this.filters.degreeType) {
			exportFileName += `_${this.filters.degreeType.replace(/\s+/g, "_")}`;
		}

		downloadToFile(exportDataUrl, exportFileName);
	}
}
