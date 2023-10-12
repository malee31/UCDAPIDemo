import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatHistoryDocChunkComponent } from './seat-history-doc-chunk.component';

describe('SeatHistoryDocChunkComponent', () => {
  let component: SeatHistoryDocChunkComponent;
  let fixture: ComponentFixture<SeatHistoryDocChunkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatHistoryDocChunkComponent]
    });
    fixture = TestBed.createComponent(SeatHistoryDocChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
