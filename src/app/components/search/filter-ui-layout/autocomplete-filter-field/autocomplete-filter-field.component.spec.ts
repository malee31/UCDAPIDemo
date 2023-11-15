import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteFilterFieldComponent } from './autocomplete-filter-field.component';

describe('AutocompleteFilterFieldComponent', () => {
  let component: AutocompleteFilterFieldComponent;
  let fixture: ComponentFixture<AutocompleteFilterFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteFilterFieldComponent]
    });
    fixture = TestBed.createComponent(AutocompleteFilterFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
