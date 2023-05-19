import { Pipe, PipeTransform } from "@angular/core";

/*
 * Convert a string of Milliseconds Epoch to a formatted date for logs
*/
@Pipe({ name: "logdate" })
export class LogDatePipe implements PipeTransform {
	transform(value: number | string): string {
		const epochMillis = Number(value);
		const date = new Date(epochMillis);

		return date.toLocaleString();
	}
}
