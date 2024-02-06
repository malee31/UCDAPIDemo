import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFigureComponent } from './chart-figure.component';

describe('ChartFigureComponent', () => {
	let component: ChartFigureComponent;
	let fixture: ComponentFixture<ChartFigureComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ChartFigureComponent]
		});
		fixture = TestBed.createComponent(ChartFigureComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
