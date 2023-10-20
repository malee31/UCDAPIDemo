import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-doc-code-block',
	templateUrl: './doc-code-block.component.html',
	styleUrls: ['./doc-code-block.component.scss']
})
export class DocCodeBlockComponent {
	@Input({ required: false }) code: string = "";
}
