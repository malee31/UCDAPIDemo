import { Component, Input } from '@angular/core';

type HTTP_METHODS = "GET" | "POST";

@Component({
	selector: 'app-doc-meta',
	templateUrl: './doc-meta.component.html',
	styleUrls: ['./doc-meta.component.scss']
})
export class DocMetaComponent {
	@Input({ required: true }) endpoint: string = "";
	@Input({ required: false }) methods: HTTP_METHODS[] = ["GET"];
}
