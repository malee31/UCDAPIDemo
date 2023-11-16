import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocParamsComponent } from './doc-params.component';

describe('DocParamsComponent', () => {
	let component: DocParamsComponent;
	let fixture: ComponentFixture<DocParamsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DocParamsComponent]
		});
		fixture = TestBed.createComponent(DocParamsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
