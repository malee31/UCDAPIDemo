import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { initFlowbite } from "flowbite";

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	@Output() showOverlayEvent = new EventEmitter<boolean>();
	ngOnInit(): void {
		initFlowbite();
	}
}
