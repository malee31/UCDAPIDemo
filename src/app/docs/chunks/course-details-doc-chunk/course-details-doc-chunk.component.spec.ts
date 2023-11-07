import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsDocChunkComponent } from './course-details-doc-chunk.component';

describe('CourseDetailsDocChunkComponent', () => {
  let component: CourseDetailsDocChunkComponent;
  let fixture: ComponentFixture<CourseDetailsDocChunkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDetailsDocChunkComponent]
    });
    fixture = TestBed.createComponent(CourseDetailsDocChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
