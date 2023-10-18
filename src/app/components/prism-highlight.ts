import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import Prism from 'prismjs';
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
		<pre class="whitespace-pre-wrap"><code class="language-{{language}}">{{code}}</code></pre>
	`
})
export class PrismComponent implements AfterViewInit {
	@Input() code: string = "";
	@Input() language = "javascript";
	constructor(private el: ElementRef) {}
	ngAfterViewInit() {
		Prism.highlightAll();
	}
}
