import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
	SERVER_URL: string = "https://e148-71-204-173-72.ngrok-free.app";
  constructor() {
		if(!this.SERVER_URL) {
			throw new Error(`SERVER_URL not configured: ${this.SERVER_URL}`);
		}
	}
}
