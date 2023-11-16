import { Component, Input } from '@angular/core';

// Slot in a <ul> list of filters onto the sidebar with the identifier `filter-list`
@Component({
	selector: 'app-filter-ui-layout',
	templateUrl: './filter-ui-layout.component.html',
	styleUrls: ['./filter-ui-layout.component.scss']
})
export class FilterUiLayoutComponent {
	// Mobile-specific settings
	mobileShowFilters: boolean = false;
	@Input({ required: true }) filterTitle: string = "";
	@Input() showSubtitle: boolean = false;
	@Input() subtitle: string = "Insert Subtitle Here";
	toggleMobileFilters(): void {
		this.mobileShowFilters = !this.mobileShowFilters;
	}
}
