import { Target } from "./vbo";
export type Attribute = {
    location: string;
    size: number;
    stride: number;
    offset: number;
    buffer_index: number;
};
export declare function vao_create(gl: WebGL2RenderingContext, program: WebGLProgram, vbos: [Target, WebGLBuffer][], attributes: Attribute[]): WebGLVertexArrayObject;
