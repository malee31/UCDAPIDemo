import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsOverviewComponent } from './docs-overview.component';

describe('DocsOverviewComponent', () => {
  let component: DocsOverviewComponent;
  let fixture: ComponentFixture<DocsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocsOverviewComponent]
    });
    fixture = TestBed.createComponent(DocsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
