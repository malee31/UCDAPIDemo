import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsNewNoticeComponent } from './whats-new-notice.component';

describe('WhatsNewNoticeComponent', () => {
	let component: WhatsNewNoticeComponent;
	let fixture: ComponentFixture<WhatsNewNoticeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WhatsNewNoticeComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(WhatsNewNoticeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
