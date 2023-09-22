import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleSidebarLinkItemComponent } from './collapsible-sidebar-link-item.component';

describe('CollapsibleSidebarLinkItemComponent', () => {
  let component: CollapsibleSidebarLinkItemComponent;
  let fixture: ComponentFixture<CollapsibleSidebarLinkItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsibleSidebarLinkItemComponent]
    });
    fixture = TestBed.createComponent(CollapsibleSidebarLinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
