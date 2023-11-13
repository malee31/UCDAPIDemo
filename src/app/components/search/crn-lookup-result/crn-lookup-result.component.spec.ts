import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrnLookupResultComponent } from './crn-lookup-result.component';

describe('CrnLookupResultComponent', () => {
  let component: CrnLookupResultComponent;
  let fixture: ComponentFixture<CrnLookupResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrnLookupResultComponent]
    });
    fixture = TestBed.createComponent(CrnLookupResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
