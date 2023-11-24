import { Component, OnDestroy, OnInit } from "@angular/core";
import { NotificationsService, Notification } from "../../services/notification-services/notifications.service";
import { Subscription } from "rxjs";

@Component({
	selector: 'app-notification-bar',
	templateUrl: './notification-bar.component.html',
	styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent implements OnInit, OnDestroy {
	notificationSub!: Subscription;
	displayedNotifications: Notification[] = [];
	dismissFadeNotificationsIds: string[] = [];
	constructor(private notifications: NotificationsService) {}

	ngOnInit() {
		this.notificationSub = this.notifications.getNotifications()
			.subscribe(newNotifications => {
				this.displayedNotifications = newNotifications;
			});
	}

	ngOnDestroy() {
		this.notificationSub.unsubscribe();
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
