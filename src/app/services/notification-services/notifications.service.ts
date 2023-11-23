import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

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
	constructor() {}

	notificationsSubj: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>([]);
	getNotifications() {
		return this.notificationsSubj.asObservable();
	}

	addNotification = (type: NotificationType, message: string): void => {
		const notificationId = Date.now().toString();
		const notificationArr = this.notificationsSubj.getValue();
		if(notificationArr.find(notification => notification.id === notificationId)) {
			throw new TypeError(`Two notifications should never have the same id. The offending id is [${notificationId}]`);
		}

		const newNotification: Notification = {
			id: notificationId,
			type: type,
			message: message
		};

		this.notificationsSubj.next([
			...notificationArr,
			newNotification
		]);
	}

	removeNotification = (notificationId: string, ignoreNonexistent: boolean = false): void => {
		const notificationArrCopy = [...this.notificationsSubj.getValue()];
		const notificationIndex = notificationArrCopy.findIndex(notification => notification.id === notificationId);
		if(notificationIndex === -1) {
			if(!ignoreNonexistent) {
				throw new RangeError(`No notification found with the id [${notificationId}]`);
			}
			return;
		}

		notificationArrCopy.splice(notificationIndex, 1);
		this.notificationsSubj.next(notificationArrCopy);
	}
}
