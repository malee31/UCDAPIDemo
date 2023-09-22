import { Component, Input } from '@angular/core';

// Uses `data-ng-slot` for `icon` for svg icon and `links` for all the contents
@Component({
	selector: 'app-collapsible-sidebar-link',
	templateUrl: './collapsible-sidebar-link.component.html',
	styleUrls: ['./collapsible-sidebar-link.component.scss']
})
export class CollapsibleSidebarLinkComponent {
	@Input({ required: true }) collapsibleTitle: string = "";
	@Input({ required: true }) controlId: string = "";
}
