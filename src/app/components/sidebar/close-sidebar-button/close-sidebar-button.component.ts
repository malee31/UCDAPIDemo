import { Component, EventEmitter, Output } from '@angular/core';
import { initFlowbite } from "flowbite";

@Component({
	selector: 'app-close-sidebar-button',
	templateUrl: './close-sidebar-button.component.html',
	styleUrls: ['./close-sidebar-button.component.scss']
})
export class CloseSidebarButtonComponent {
	@Output() onHide = new EventEmitter<void>();
	ngOnInit(): void {
		initFlowbite();
	}
}
