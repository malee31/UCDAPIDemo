import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCodeBlockComponent } from './doc-code-block.component';

describe('DocCodeBlockComponent', () => {
	let component: DocCodeBlockComponent;
	let fixture: ComponentFixture<DocCodeBlockComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DocCodeBlockComponent]
		});
		fixture = TestBed.createComponent(DocCodeBlockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
