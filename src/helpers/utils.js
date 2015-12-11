import * as Constants from '../constants/canvas';

export function createCanvas(width, height) {

	if (!Constants.CANVAS_SUPPORTED) throw ("Canvas is not supported");

	const canvas = document.createElement("canvas");

	canvas.setAttribute("class", "tb-canvas");

	setCanvasSize(canvas, width, height);

	return canvas;

}

export function setCanvasSize(canvas, width, height) {

	if (Constants.CANVAS_SUPPORTED && !!Constants.OPTIMIZE_FOR_HIDPI) {

		const ctx = canvas.getContext("2d");

		const backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
							ctx.mozBackingStorePixelRatio ||
							ctx.msBackingStorePixelRatio ||
							ctx.oBackingStorePixelRatio ||
							ctx.backingStorePixelRatio || 1;


		const devicePixelBackingStoreRatio = Constants.DEVICE_PIXEL_RATIO / Constants.STORE_RATIO;

		canvas.width = width * devicePixelBackingStoreRatio;
		canvas.height = height * devicePixelBackingStoreRatio;

		if (Constants.DEVICE_PIXEL_RATIO !== Constants.STORE_RATIO) {

			canvas.style.width = width + 'px';
			canvas.style.height = height + 'px';

			ctx.scale(devicePixelBackingStoreRatio, devicePixelBackingStoreRatio);

		}

	} else {

		canvas.width = width;
		canvas.height = height;
	}

}
