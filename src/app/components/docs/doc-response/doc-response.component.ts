import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-doc-response',
	templateUrl: './doc-response.component.html',
	styleUrls: ['./doc-response.component.scss']
})
export class DocResponseComponent {
	@Input({ required: true }) anchorId: string = "";
	@Input({ required: true }) description: string = "";
}
