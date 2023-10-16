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
		<div>
			<code
				#container
				class="whitespace-pre-wrap"
			>
				<ng-content></ng-content>
			</code>
		</div>
	`,
	styles: [`
		:host.dark {
			background: #333;
			color: #FFF;
		}`
	]
})
export class PrismComponent implements AfterViewInit {
	@Input() code: string = "";
	@Input() language = 'javascript';
	@ViewChild("container") container!: ElementRef<HTMLSpanElement>;
	constructor(private el: ElementRef) {}
	ngAfterViewInit() {
		const code = (this.code || this.el.nativeElement.innerText)
		const grammar = Prism.languages[this.language];
		this.container.nativeElement.innerHTML = Prism.highlight(code, grammar, this.language);
	}
}
