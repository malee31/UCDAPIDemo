import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeTypesDocChunkComponent } from './degree-types-doc-chunk.component';

describe('DegreeTypesDocChunkComponent', () => {
  let component: DegreeTypesDocChunkComponent;
  let fixture: ComponentFixture<DegreeTypesDocChunkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DegreeTypesDocChunkComponent]
    });
    fixture = TestBed.createComponent(DegreeTypesDocChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
