import { Plugin } from "chart.js";

const tooltipPlugin: Plugin = {
	id: "trace-tooltip",
	afterDraw: chart => {
		if(!chart.tooltip) {
			return;
		}
		const x = chart.tooltip.caretX;
		const yAxis = chart.scales["y"];
		const ctx = chart.ctx;
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x, yAxis.top);
		ctx.lineTo(x, yAxis.bottom);
		ctx.lineWidth = 2;
		ctx.strokeStyle = "rgba(100, 100, 200, 0.6)";
		ctx.stroke();
		ctx.restore();
	}
};

export default tooltipPlugin;