import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSidebarButtonComponent } from './close-sidebar-button.component';

describe('CloseSidebarButtonComponent', () => {
	let component: CloseSidebarButtonComponent;
	let fixture: ComponentFixture<CloseSidebarButtonComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CloseSidebarButtonComponent]
		});
		fixture = TestBed.createComponent(CloseSidebarButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
