import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-doc-params',
	templateUrl: './doc-params.component.html',
	styleUrls: ['./doc-params.component.scss']
})
export class DocParamsComponent {
	@Input({ required: true }) anchorId: string = "";
}
