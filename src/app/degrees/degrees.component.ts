import { Component } from '@angular/core';

@Component({
	selector: 'app-degrees',
	templateUrl: './degrees.component.html',
	styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent {
	validDegreeTypes: string[] = ["Major", "Minor"];
	filters = {
		degreeType: ""
	};

	results: Object[] = []

	setDegreeType(degreeType: string) {
		if(this.filters.degreeType === degreeType) return;
		this.filters.degreeType = degreeType;
		this.searchDegrees()
	}

	searchDegrees() {
		alert("Not implemented");
	}
}
