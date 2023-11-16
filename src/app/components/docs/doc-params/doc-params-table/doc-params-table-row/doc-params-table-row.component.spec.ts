import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocParamsTableRowComponent } from './doc-params-table-row.component';

describe('DocParamsTableRowComponent', () => {
	let component: DocParamsTableRowComponent;
	let fixture: ComponentFixture<DocParamsTableRowComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DocParamsTableRowComponent]
		});
		fixture = TestBed.createComponent(DocParamsTableRowComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
