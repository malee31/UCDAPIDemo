import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLookupResultComponent } from './course-lookup-result.component';

describe('CourseLookupResultComponent', () => {
	let component: CourseLookupResultComponent;
	let fixture: ComponentFixture<CourseLookupResultComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CourseLookupResultComponent]
		});
		fixture = TestBed.createComponent(CourseLookupResultComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
