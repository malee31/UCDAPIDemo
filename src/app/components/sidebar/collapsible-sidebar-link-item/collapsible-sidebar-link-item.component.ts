import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-sidebar-link-item',
  templateUrl: './collapsible-sidebar-link-item.component.html',
  styleUrls: ['./collapsible-sidebar-link-item.component.scss']
})
export class CollapsibleSidebarLinkItemComponent {
	@Input({ required: true }) routerLink: string = "";
	@Input({ required: true }) onclick: () => void = () => {
		console.log("Click handler missing for CollapsibleSidebarLinkItemComponent");
	};
}
