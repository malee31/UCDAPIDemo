import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesLinkComponent } from './features-link.component';

describe('FeaturesLinkComponent', () => {
	let component: FeaturesLinkComponent;
	let fixture: ComponentFixture<FeaturesLinkComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FeaturesLinkComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(FeaturesLinkComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
