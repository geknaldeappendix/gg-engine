import { canvas_create, canvas_fullscreen } from "./graphics/canvas";
import { context_get_webgl } from "./graphics/context";

const canvas = canvas_create();
canvas_fullscreen(canvas);
document.body.appendChild(canvas);
const gl = context_get_webgl(canvas);

gl.clearColor(0.0, 0.0, 1.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT)
