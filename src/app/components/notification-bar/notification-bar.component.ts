import { Component } from "@angular/core";
import { NotificationsService, Notification } from "../../services/notification-services/notifications.service";

@Component({
	selector: 'app-notification-bar',
	templateUrl: './notification-bar.component.html',
	styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent {
	displayedNotifications: Notification[] = [];
	dismissFadeNotificationsIds: string[] = []
	constructor(private notifications: NotificationsService) {
		this.displayedNotifications = notifications.notifications;
	}

	dismissNotification(notificationId: string) {
		if(this.dismissFadeNotificationsIds.includes(notificationId)) return;

		this.dismissFadeNotificationsIds.push(notificationId);

		setTimeout(() => {
			// Delayed notification deletion
			this.notifications.removeNotification(notificationId);
			const dismissIdIndex = this.dismissFadeNotificationsIds.findIndex(id => id === notificationId);
			this.dismissFadeNotificationsIds.splice(dismissIdIndex, 1);
		}, 1000);
	}
}
