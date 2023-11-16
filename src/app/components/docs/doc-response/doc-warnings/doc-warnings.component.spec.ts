import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocWarningsComponent } from './doc-warnings.component';

describe('DocWarningsComponent', () => {
	let component: DocWarningsComponent;
	let fixture: ComponentFixture<DocWarningsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DocWarningsComponent]
		});
		fixture = TestBed.createComponent(DocWarningsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
