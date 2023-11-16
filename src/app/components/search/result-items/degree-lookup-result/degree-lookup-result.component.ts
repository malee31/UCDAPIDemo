import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-degree-lookup-result',
	templateUrl: './degree-lookup-result.component.html',
	styleUrls: ['./degree-lookup-result.component.scss']
})
export class DegreeLookupResultComponent {
	@Input({ required: true }) identifier: string = "";
	@Input({ required: true }) name: string = "";
	@Input({ required: true }) degree_type: string = "";
}
