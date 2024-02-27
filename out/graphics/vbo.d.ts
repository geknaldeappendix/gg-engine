export type Target = WebGLRenderingContext["ARRAY_BUFFER"] | WebGLRenderingContext["ELEMENT_ARRAY_BUFFER"];
export type Usage = WebGLRenderingContext["STATIC_DRAW"] | WebGLRenderingContext["DYNAMIC_DRAW"];
export declare function vbo_create(gl: WebGLRenderingContext, target: Target, data: ArrayBuffer, usage?: Usage): [Target, WebGLBuffer];
