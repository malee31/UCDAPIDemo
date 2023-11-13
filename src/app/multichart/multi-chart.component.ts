import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
	selector: 'app-multichart',
	templateUrl: './multi-chart.component.html',
	styleUrls: ['./multi-chart.component.scss']
})
export class MultiChartComponent implements OnInit {
	loaded: boolean = false;
	term: string = "";
	@Input({ required: true }) subject_code: string = "";
	@Input({ required: true }) subject_number: string = "";

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.queryParamMap.subscribe((params: ParamMap) => {
			this.term = params.get("term") || "";
			this.loaded = true;
		});
	}
}
