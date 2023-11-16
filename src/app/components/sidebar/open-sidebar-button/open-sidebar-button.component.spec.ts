import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSidebarButtonComponent } from './open-sidebar-button.component';

describe('OpenSidebarButtonComponent', () => {
	let component: OpenSidebarButtonComponent;
	let fixture: ComponentFixture<OpenSidebarButtonComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [OpenSidebarButtonComponent]
		});
		fixture = TestBed.createComponent(OpenSidebarButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
