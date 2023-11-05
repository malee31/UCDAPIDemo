import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-multichart',
	templateUrl: './multi-chart.component.html',
	styleUrls: ['./multi-chart.component.scss']
})
export class MultiChartComponent {
	@Input({ required: true }) term: string = "";
	@Input({ required: true }) subject_code: string = "";
	@Input({ required: true }) subject_number: string = "";
}
