import { Component, Input } from '@angular/core';

type PARAM_TYPE = "url" | "query";

@Component({
	selector: 'app-doc-params-table-row',
	templateUrl: './doc-params-table-row.component.html',
	styleUrls: ['./doc-params-table-row.component.scss']
})
export class DocParamsTableRowComponent {
	@Input({ required: true }) paramType: PARAM_TYPE = "url";
	@Input({ required: true }) param: string = "";
	@Input({ required: true }) description: string = "";
	@Input({ required: false }) required: boolean = false;
	@Input({ required: false }) default: string = "n/a";
}
