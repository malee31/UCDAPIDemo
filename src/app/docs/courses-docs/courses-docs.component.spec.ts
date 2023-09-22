import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDocsComponent } from './courses-docs.component';

describe('CoursesDocsComponent', () => {
  let component: CoursesDocsComponent;
  let fixture: ComponentFixture<CoursesDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDocsComponent]
    });
    fixture = TestBed.createComponent(CoursesDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
