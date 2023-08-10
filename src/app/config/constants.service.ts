import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
	SERVER_URL: string = "http://localhost:3000";
  constructor() {
		if(!this.SERVER_URL) {
			throw new Error(`SERVER_URL not configured: ${this.SERVER_URL}`);
		}
	}
}
