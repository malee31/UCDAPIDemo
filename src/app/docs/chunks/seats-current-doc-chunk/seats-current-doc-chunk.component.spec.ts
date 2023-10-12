import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsCurrentDocChunkComponent } from './seats-current-doc-chunk.component';

describe('SeatsCurrentDocChunkComponent', () => {
  let component: SeatsCurrentDocChunkComponent;
  let fixture: ComponentFixture<SeatsCurrentDocChunkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatsCurrentDocChunkComponent]
    });
    fixture = TestBed.createComponent(SeatsCurrentDocChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
