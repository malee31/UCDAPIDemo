import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesDocChunkComponent } from './degrees-doc-chunk.component';

describe('DegreesDocChunkComponent', () => {
  let component: DegreesDocChunkComponent;
  let fixture: ComponentFixture<DegreesDocChunkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DegreesDocChunkComponent]
    });
    fixture = TestBed.createComponent(DegreesDocChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
