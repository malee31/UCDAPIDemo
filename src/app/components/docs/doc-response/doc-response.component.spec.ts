import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocResponseComponent } from './doc-response.component';

describe('DocResponseComponent', () => {
  let component: DocResponseComponent;
  let fixture: ComponentFixture<DocResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocResponseComponent]
    });
    fixture = TestBed.createComponent(DocResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
