import { Injectable } from '@angular/core';

export type NotificationType = "default" | "notice" | "warning" | "error";
export type Notification = {
	id: string,
	type: NotificationType,
	message: string
}

@Injectable({
	providedIn: "root"
})
export class NotificationsService {
	notifications: Notification[] = [];

	constructor() {}

	addNotification = (type: NotificationType, message: string): void => {
		const notificationId = Date.now().toString();
		if(this.notifications.find(notification => notification.id === notificationId)) {
			throw new TypeError(`Two notifications should never have the same id. The offending id is [${notificationId}]`);
		}

		this.notifications.push({
			id: notificationId,
			type: type,
			message: message
		});
	}

	removeNotification = (notificationId: string, ignoreNonexistent: boolean = false): void => {
		const notificationIndex = this.notifications.findIndex(notification => notification.id === notificationId);
		if(notificationIndex === -1) {
			if(!ignoreNonexistent) {
				throw new RangeError(`No notification found with the id [${notificationId}]`);
			}
			return;
		}
		this.notifications.splice(notificationIndex, 1);
	}
}
