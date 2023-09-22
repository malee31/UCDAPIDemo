import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesDocsComponent } from './degrees-docs.component';

describe('DegreesDocsComponent', () => {
  let component: DegreesDocsComponent;
  let fixture: ComponentFixture<DegreesDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DegreesDocsComponent]
    });
    fixture = TestBed.createComponent(DegreesDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
