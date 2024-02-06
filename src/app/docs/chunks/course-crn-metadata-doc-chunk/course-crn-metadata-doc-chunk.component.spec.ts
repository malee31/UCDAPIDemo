import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCrnMetadataDocChunkComponent } from './course-crn-metadata-doc-chunk.component';

describe('CourseCrnMetadataDocChunkComponent', () => {
	let component: CourseCrnMetadataDocChunkComponent;
	let fixture: ComponentFixture<CourseCrnMetadataDocChunkComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CourseCrnMetadataDocChunkComponent]
		});
		fixture = TestBed.createComponent(CourseCrnMetadataDocChunkComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
