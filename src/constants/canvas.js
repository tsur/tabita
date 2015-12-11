export const OPTIMIZE_FOR_HIDPI = true;
export const DEVICE_PIXEL_RATIO = window.devicePixelRatio || 1;
export const STORE_RATIO = 1;
export const DEVICE_PIXEL_STORE_RATIO= OPTIMIZE_FOR_HIDPI ? DEVICE_PIXEL_RATIO / STORE_RATIO : 1;
export const CANVAS_SUPPORTED = !!document.createElement("canvas").getContext;
