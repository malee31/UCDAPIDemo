import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HTTP404Component } from "./http404.component";

describe("HTTP404Component", () => {
	let component: HTTP404Component;
	let fixture: ComponentFixture<HTTP404Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HTTP404Component]
		})
			.compileComponents();

		fixture = TestBed.createComponent(HTTP404Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
