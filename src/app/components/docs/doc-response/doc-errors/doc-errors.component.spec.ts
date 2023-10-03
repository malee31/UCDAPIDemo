import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocErrorsComponent } from './doc-errors.component';

describe('DocErrorsComponent', () => {
  let component: DocErrorsComponent;
  let fixture: ComponentFixture<DocErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocErrorsComponent]
    });
    fixture = TestBed.createComponent(DocErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
