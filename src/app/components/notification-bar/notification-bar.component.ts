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
		notifications.getNotifications().subscribe(newNotifications => {
			console.log("NOTIFY!");
			console.log(newNotifications)
			this.displayedNotifications = newNotifications;
		})
	}

	dismissNotification(notificationId: string) {
		// Avoid duplicate timeouts for deletion
		if(this.dismissFadeNotificationsIds.includes(notificationId)) return;

		this.dismissFadeNotificationsIds.push(notificationId);

		setTimeout(() => {
			// Deferred notification deletion to let animation finish
			this.notifications.removeNotification(notificationId);
			const dismissIdIndex = this.dismissFadeNotificationsIds.findIndex(id => id === notificationId);
			this.dismissFadeNotificationsIds.splice(dismissIdIndex, 1);
		}, 1000);
	}
}
