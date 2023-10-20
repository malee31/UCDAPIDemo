import { AfterViewInit, Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import Prism from "prismjs";
import "clipboard";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";

@Component({
	selector: 'prism, [prism]',
	template: `
		<div>
			<span>Example</span>
		</div>
		<!--	MUST be one-lined due to the quirks of <pre>	-->
		<pre class="whitespace-pre-wrap"><code class="language-{{language}}" #content>{{code}}</code></pre>
	`
})
export class PrismComponent implements AfterViewInit {
	@Input() code: string = "";
	@Input() language = "javascript";
	@ViewChild("content") prismContentElem!: ElementRef<HTMLDivElement>;
	constructor() {}
	ngAfterViewInit(): void {
		this.highlightCode();
	}

	ngOnChanges(diff: SimpleChanges): void {
		console.log(diff)
		if(diff["code"] && !diff["code"].firstChange) {
			this.highlightCode();
		}
	}

	highlightCode() {
		Prism.highlightAll();
		// Note: Re-highlight required in production for some reason
		this.prismContentElem.nativeElement.innerHTML = Prism.highlight(this.code, Prism.languages[this.language], this.language);
	}
}
