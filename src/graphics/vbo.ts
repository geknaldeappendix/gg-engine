export type Target = WebGLRenderingContext["ARRAY_BUFFER"] | WebGLRenderingContext["ELEMENT_ARRAY_BUFFER"];
export type Usage = WebGLRenderingContext["STATIC_DRAW"] | WebGLRenderingContext["DYNAMIC_DRAW"]

export function vbo_create(
    gl: WebGLRenderingContext,
    target: Target,
    data: ArrayBuffer,
    usage: Usage = WebGLRenderingContext["STATIC_DRAW"]
): [Target, WebGLBuffer] {
    const vbo = gl.createBuffer();
    if (!vbo) throw new Error("Could not create buffer");
    gl.bindBuffer(target, vbo);
    gl.bufferData(target, data, usage);
    return [target, vbo];
}

