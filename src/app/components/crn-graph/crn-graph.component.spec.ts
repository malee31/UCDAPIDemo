import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrnGraphComponent } from './crn-graph.component';

describe('CrnGraphComponent', () => {
	let component: CrnGraphComponent;
	let fixture: ComponentFixture<CrnGraphComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CrnGraphComponent]
		});
		fixture = TestBed.createComponent(CrnGraphComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
