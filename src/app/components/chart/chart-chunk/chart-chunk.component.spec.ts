import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartChunkComponent } from './chart-chunk.component';

describe('ChartChunkComponent', () => {
	let component: ChartChunkComponent;
	let fixture: ComponentFixture<ChartChunkComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ChartChunkComponent]
		});
		fixture = TestBed.createComponent(ChartChunkComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
