import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleSidebarLinkComponent } from './collapsible-sidebar-link.component';

describe('CollapsibleSidebarLinkComponent', () => {
	let component: CollapsibleSidebarLinkComponent;
	let fixture: ComponentFixture<CollapsibleSidebarLinkComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CollapsibleSidebarLinkComponent]
		});
		fixture = TestBed.createComponent(CollapsibleSidebarLinkComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
