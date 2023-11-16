import { Component, EventEmitter, Output } from '@angular/core';
import { initFlowbite } from "flowbite";

@Component({
	selector: 'app-open-sidebar-button',
	templateUrl: './open-sidebar-button.component.html',
	styleUrls: ['./open-sidebar-button.component.scss']
})
export class OpenSidebarButtonComponent {
	@Output() onShow = new EventEmitter<void>();
	ngOnInit(): void {
		initFlowbite();
	}
}
