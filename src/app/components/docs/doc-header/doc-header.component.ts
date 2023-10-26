import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-doc-header',
	templateUrl: './doc-header.component.html',
	styleUrls: ['./doc-header.component.scss']
})
export class DocHeaderComponent {
	@Input({ required: true }) anchorId: string = "";
	@Input({ required: true }) title: string = "";
	@Input({ required: true }) description: string = "";
}
