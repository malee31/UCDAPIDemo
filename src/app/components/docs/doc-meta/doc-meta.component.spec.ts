import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocMetaComponent } from './doc-meta.component';

describe('DocMetaComponent', () => {
	let component: DocMetaComponent;
	let fixture: ComponentFixture<DocMetaComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DocMetaComponent]
		});
		fixture = TestBed.createComponent(DocMetaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
