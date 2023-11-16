import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCrnsDocChunkComponent } from './course-crns-doc-chunk.component';

describe('CourseCrnsDocChunkComponent', () => {
	let component: CourseCrnsDocChunkComponent;
	let fixture: ComponentFixture<CourseCrnsDocChunkComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CourseCrnsDocChunkComponent]
		});
		fixture = TestBed.createComponent(CourseCrnsDocChunkComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
