import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { initFlowbite } from "flowbite";

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	@Output() showOverlayEvent = new EventEmitter<void>();
	ngOnInit(): void {
		initFlowbite();
	}
}
