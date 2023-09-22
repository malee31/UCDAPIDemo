import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsDocsComponent } from './seats-docs.component';

describe('SeatsDocsComponent', () => {
  let component: SeatsDocsComponent;
  let fixture: ComponentFixture<SeatsDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatsDocsComponent]
    });
    fixture = TestBed.createComponent(SeatsDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
