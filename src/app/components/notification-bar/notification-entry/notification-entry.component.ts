import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Notification } from "../../../services/notification-services/notifications.service";

@Component({
	selector: 'app-notification-entry',
	templateUrl: './notification-entry.component.html',
	styleUrls: ['./notification-entry.component.scss']
})
export class NotificationEntryComponent implements OnInit {
	@Input({ required: true }) notification!: Notification;
	@Input({ required: true }) isFading: boolean = false;
	@Output() onDismiss = new EventEmitter<void>();

	ngOnInit() {
		setTimeout(() => {
			this.dismiss();
		}, 5000);
	}
	dismiss() {
		this.onDismiss.emit();
	}
}
