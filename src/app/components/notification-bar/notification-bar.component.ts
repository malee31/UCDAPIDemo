import { Component } from '@angular/core';
import { NotificationsService, Notification } from "../../services/notification-services/notifications.service";

@Component({
	selector: 'app-notification-bar',
	templateUrl: './notification-bar.component.html',
	styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent {
	displayedNotifications: Notification[] = [];
	constructor(private notifications: NotificationsService) {
		this.displayedNotifications = notifications.notifications;
	}

	dismissNotification(notificationId: string) {
		this.notifications.removeNotification(notificationId);
	}
}
