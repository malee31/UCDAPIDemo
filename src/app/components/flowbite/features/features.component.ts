import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FeaturesLinkComponent } from "./features-link/features-link.component";

@Component({
	selector: 'app-features',
	standalone: true,
	imports: [
		RouterLink,
		FeaturesLinkComponent
	],
	templateUrl: './features.component.html',
	styleUrl: './features.component.scss'
})
export class FeaturesComponent {

}
