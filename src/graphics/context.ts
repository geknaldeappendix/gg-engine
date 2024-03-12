export function context_get_webgl2(canvas: HTMLCanvasElement): WebGL2RenderingContext {
    const gl = canvas.getContext("webgl2");
    if (!gl) throw new Error("Could not create webgl2 context");
    return gl;
}
