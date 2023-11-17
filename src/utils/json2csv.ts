/**
 * Converts an array of Objects into a CSV by assuming the array to only contain Objects of the same type
 * @param {Object[]} arr - Array of alike objects. Their keys will be used as the column names of the CSV
 * @return {string} - Returns the CSV as a string
 */
export default function json2csv(arr: Object[]): string {
	if(!arr.length) return "";

	const sample = arr[0];
	const columnNames: string[] = Object.keys(sample).map(key => key.replace(/,/g, "_").trim());
	let result = `${columnNames.join(",")}\n`;

	for(const rowObj of arr) {
		result += `${columnNames
			.map(key => (rowObj as any)[key].toString().replace(/"+/g, "\"\""))
			.map(val => `"${val}"`)
			.join(",")}\n`;
	}

	return result;
}
