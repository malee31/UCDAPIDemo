import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class ConstantsService {
	public SERVER_URL: string = environment.SERVER_URL;

	constructor() {
		if(!this.SERVER_URL) {
			throw new Error(`SERVER_URL not configured: ${this.SERVER_URL}`);
		}
		if(this.SERVER_URL.endsWith("/")) {
			this.SERVER_URL = this.SERVER_URL.slice(0, -1);
		}
	}
}
