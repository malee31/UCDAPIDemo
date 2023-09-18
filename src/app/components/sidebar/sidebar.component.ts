import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { initFlowbite } from "flowbite";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	@Input() showOverlay: boolean = true;
	@Output() showOverlayChange = new EventEmitter<boolean>();
	ngOnInit(): void {
		initFlowbite();
	}

	hideSidebar() {
		this.showOverlay = false;
		this.showOverlayChange.emit(false);
	}
}
