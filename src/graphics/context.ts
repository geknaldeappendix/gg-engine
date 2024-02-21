export function context_get_webgl(canvas: HTMLCanvasElement): WebGLRenderingContext {
    const gl = canvas.getContext("webgl2");
    if (!gl) throw new Error();
    return gl;
}
