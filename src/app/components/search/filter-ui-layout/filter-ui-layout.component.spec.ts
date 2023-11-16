import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUiLayoutComponent } from './filter-ui-layout.component';

describe('FilterUiLayoutComponent', () => {
	let component: FilterUiLayoutComponent;
	let fixture: ComponentFixture<FilterUiLayoutComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FilterUiLayoutComponent]
		});
		fixture = TestBed.createComponent(FilterUiLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
