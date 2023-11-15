import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
	selector: 'app-autocomplete-filter-field',
	templateUrl: './autocomplete-filter-field.component.html',
	styleUrls: ['./autocomplete-filter-field.component.scss']
})
export class AutocompleteFilterFieldComponent implements OnInit {
	@Input({ required: true }) titleText: string = "";
	@Input({ required: true }) labelText: string = "";
	@Input({ required: true }) placeholder: string = "";
	@Input({ required: true }) options: string[] = [];
	@Input() required: boolean = false;
	@Input() initialValue: string = "";
	@Input() defaultOption: string = "";
	@Input() defaultLabel: string = "";
	// Optionally provide form control to control the input externally
	@Input() autocompleteTextControl: FormControl<string|null> = new FormControl("");
	@Output() onChange = new EventEmitter<string>();
	@Output() onSelect = new EventEmitter<string>();

	@ViewChild("autocompleteInput") autocompleteInput!: ElementRef<HTMLInputElement>;
	filteredOptions: Object[] = []
	autocompleteFilter = (opt: string, inputVal: string) => opt.toLowerCase().includes(inputVal)

	ngOnInit(): void {
		this.resetAutocompleteTextInput();
		this.autocompleteTextControl.reset(this.initialValue);
	}
	resetAutocompleteTextInput() {
		this.filteredOptions = this.options;
	}

	handleInput(e: Event): void {
		const inputVal = (e.currentTarget as HTMLInputElement).value.toLowerCase();
		this.filteredOptions = this.options
			.filter(opt => this.autocompleteFilter(opt, inputVal));
		// this.onChange.emit(inputVal);
	}

	selectValue(val: string) {
		this.onChange.emit(val);
		this.onSelect.emit(val);
		this.autocompleteTextControl.reset(val);
	}
}
