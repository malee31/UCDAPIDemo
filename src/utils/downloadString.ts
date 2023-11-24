export default function downloadToFile(dataURL: string, fileName: string = "download.txt") {
	const downloadLink = document.createElement("a");
	downloadLink.href = dataURL;
	downloadLink.download = fileName;
	downloadLink.click();
}