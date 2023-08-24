import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNameGraphComponent } from './course-name-graph.component';

describe('CourseNameGraphComponent', () => {
  let component: CourseNameGraphComponent;
  let fixture: ComponentFixture<CourseNameGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseNameGraphComponent]
    });
    fixture = TestBed.createComponent(CourseNameGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
