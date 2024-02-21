import { canvas_create, canvas_fullscreen } from "./graphics/canvas";
import { context_get_webgl2 } from "./graphics/context";
import { program_create } from "./graphics/shader";
import { vao_create } from "./graphics/vao";
import { vbo_create } from "./graphics/vbo";

const canvas = canvas_create();
canvas_fullscreen(canvas);
document.body.appendChild(canvas);
const gl = context_get_webgl2(canvas);

gl.clearColor(0.0, 0.0, 1.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT)

const program = await program_create(gl, "assets/shaders/default.v.glsl", "assets/shaders/default.f.glsl");

const vertices = vbo_create(gl, gl.ARRAY_BUFFER, new Float32Array([
    -0.5, -0.5,  0.5,
    0.5, -0.5,  0.5,
    0.5,  0.5,  0.5,
    -0.5,  0.5,  0.5,
]), gl.STATIC_DRAW)

const indices = vbo_create(gl, gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
    0,  1,  2,
    2,  3,  0,
]), gl.STATIC_DRAW);

const vao = vao_create(gl, program, [vertices, indices], [{
    location: "in_position",
    size: 3,
    stride: 0,
    offset: 0,
    buffer_index: 0,
}]);

gl.bindVertexArray(vao);

gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
