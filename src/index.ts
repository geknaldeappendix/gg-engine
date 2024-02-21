import { canvas_create, canvas_fullscreen } from "./graphics/canvas";
import { context_get_webgl2 } from "./graphics/context";
import { program_create } from "./graphics/shader";

const canvas = canvas_create();
canvas_fullscreen(canvas);
document.body.appendChild(canvas);
const gl = context_get_webgl2(canvas);

gl.clearColor(0.0, 0.0, 1.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT)

const program = program_create(gl, "assets/shaders/default.v.glsl", "assets/shaders/default.f.glsl");
