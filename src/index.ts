import { canvas_create, canvas_resize, context_get_webgl2 } from "./graphics";
import { input_create } from "./input";

export * from "./graphics"
export * from "./input"

function on_resize(canvas: HTMLCanvasElement, gl: WebGL2RenderingContext) {
    canvas_resize(canvas, document.body.clientWidth, document.body.clientHeight);
    gl.viewport(0, 0, canvas.width, canvas.height);
}

export const canvas = canvas_create();
input_create(canvas, false)
export const gl = context_get_webgl2(canvas);

window.onresize = () => on_resize(canvas, gl);
on_resize(canvas, gl);

document.body.appendChild(canvas);

export function gg_engine_create(tick: () => void, render: () => void) {
    let prev_tick: number = 0;
    let prev_second: number = 0;
    let fps = 0;

    function internal_tick(now: number) {
        window.requestAnimationFrame(internal_tick);
        tick();
        internal_render(now);
        prev_tick = now;
    }

    function internal_render(now: number) {
        fps++;
        if (now - prev_second > 1000) {
            console.log(fps);
            fps = 0;
            prev_second = now;
        }
        gl.clearColor(0.0, 0.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        render();
    }

    window.requestAnimationFrame(internal_tick);
}