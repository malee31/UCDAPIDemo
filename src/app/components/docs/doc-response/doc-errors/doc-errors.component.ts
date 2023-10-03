import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-doc-errors',
	templateUrl: './doc-errors.component.html',
	styleUrls: ['./doc-errors.component.scss']
})
export class DocErrorsComponent {
	@Input({ required: true }) anchorId: string = "";
}
