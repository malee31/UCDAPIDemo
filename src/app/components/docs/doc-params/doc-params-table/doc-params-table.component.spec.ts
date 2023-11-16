import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocParamsTableComponent } from './doc-params-table.component';

describe('DocParamsTableComponent', () => {
	let component: DocParamsTableComponent;
	let fixture: ComponentFixture<DocParamsTableComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DocParamsTableComponent]
		});
		fixture = TestBed.createComponent(DocParamsTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
