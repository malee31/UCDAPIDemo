import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Prism from 'prismjs';
import 'clipboard';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

@Component({
	selector: 'prism, [prism]',
	template: `
		<div>
			<span>Example</span>
		</div>
		<pre data-src="assets/examples/seat-history.json"></pre>
	`
})
export class PrismComponent implements AfterViewInit {
	@Input() code: string = "";
	@Input() language = 'javascript';
	@ViewChild("container") container!: ElementRef<HTMLSpanElement>;
	constructor(private el: ElementRef) {}
	ngAfterViewInit() {
		const code = (this.code || this.el.nativeElement.innerText)
		const grammar = Prism.languages[this.language];
		// this.container.nativeElement.innerHTML = Prism.highlight(code, grammar, this.language);
		console.log(Prism.plugins["toolbar"])
	}
}
