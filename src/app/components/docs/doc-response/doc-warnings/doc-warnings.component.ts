import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-doc-warnings',
	templateUrl: './doc-warnings.component.html',
	styleUrls: ['./doc-warnings.component.scss']
})
export class DocWarningsComponent {
	@Input({ required: true }) anchorId: string = "";
}
