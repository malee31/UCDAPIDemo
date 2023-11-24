export default function chartToDataURL(canvasElem: HTMLCanvasElement) {
	// Clone canvas to preserve dimensions
	const canvasClone: HTMLCanvasElement = canvasElem.cloneNode(true) as HTMLCanvasElement;

	// Add white background to chart
	const cloneCtx: CanvasRenderingContext2D = canvasClone.getContext("2d")!;
	cloneCtx.fillStyle = "#FFFFFF";
	cloneCtx.fillRect(0, 0, canvasClone.width, canvasClone.height);

	// Overlay chart onto the white background
	cloneCtx.drawImage(canvasElem, 0, 0);

	// Convert resulting canvas into png
	return canvasClone.toDataURL("image/png");
}