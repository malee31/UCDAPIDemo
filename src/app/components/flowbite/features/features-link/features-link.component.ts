import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { initFlowbite } from "flowbite";

@Component({
  selector: 'app-features-link',
  standalone: true,
	imports: [
		RouterLink
	],
  templateUrl: './features-link.component.html',
  styleUrl: './features-link.component.scss'
})
export class FeaturesLinkComponent implements OnInit {
	@Input({required: true}) label!: string;
	@Input({required: true}) routerLink!: string;

	ngOnInit(): void {
		initFlowbite();
	}
}
