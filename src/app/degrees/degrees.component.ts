import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api-services/api.service";
import { APIDegrees } from "../api-services/api-types";

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
}
