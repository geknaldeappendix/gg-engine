import { Input, canvas_create, canvas_input_create, canvas_resize, context_get_webgl2 } from "./graphics";

export * from "./graphics"

export type Engine = {
    canvas: HTMLCanvasElement
    input: Input
    gl: WebGL2RenderingContext
}

function on_resize(canvas: HTMLCanvasElement, gl: WebGL2RenderingContext) {
    canvas_resize(canvas, document.body.clientWidth, document.body.clientHeight);
    gl.viewport(0, 0, canvas.width, canvas.height);
}

export function gg_engine_create(): Engine {
    const canvas = canvas_create();
    const input = canvas_input_create(canvas);
    const gl = context_get_webgl2(canvas);
    document.body.appendChild(canvas);

    window.onresize = () => on_resize(canvas, gl);
    on_resize(canvas, gl);

    return {
        canvas,
        input,
        gl
    }
}

export function gg_engine_start() {

}