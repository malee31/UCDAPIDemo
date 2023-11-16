import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeLookupResultComponent } from './degree-lookup-result.component';

describe('DegreeLookupResultComponent', () => {
	let component: DegreeLookupResultComponent;
	let fixture: ComponentFixture<DegreeLookupResultComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DegreeLookupResultComponent]
		});
		fixture = TestBed.createComponent(DegreeLookupResultComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
