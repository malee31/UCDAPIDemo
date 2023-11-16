import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocHeaderComponent } from './doc-header.component';

describe('DocHeaderComponent', () => {
	let component: DocHeaderComponent;
	let fixture: ComponentFixture<DocHeaderComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DocHeaderComponent]
		});
		fixture = TestBed.createComponent(DocHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
