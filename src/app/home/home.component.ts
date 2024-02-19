import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
	scrollToAbout(e: Event) {
		e.preventDefault();
		const about = document.getElementById("about");

		if(about) {
			about.scrollIntoView();
		}
	}
}
