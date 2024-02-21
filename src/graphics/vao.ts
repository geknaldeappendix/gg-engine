import { Target } from "./vbo";

export type Attribute = {
    location: string
    size: number
    stride: number
    offset: number
    buffer_index: number
}

export function vao_create(
    gl: WebGL2RenderingContext,
    program: WebGLProgram,
    vbos: [Target, WebGLBuffer][],
    attributes: Attribute[]
): WebGLVertexArrayObject {
    const vao = gl.createVertexArray();
    if (!vao) throw new Error("Could not create vertex array object");
    gl.bindVertexArray(vao);
    gl.useProgram(program);

    attributes.forEach(({ buffer_index, location, size, stride, offset }) => {
        gl.bindBuffer(vbos[buffer_index][0], vbos[buffer_index][1]);
        const index = gl.getAttribLocation(program, location);
        gl.vertexAttribPointer(index, size, gl.FLOAT, false, stride, offset);
        gl.enableVertexAttribArray(index);
    });

    vbos.filter(vbo => vbo[0] === gl.ELEMENT_ARRAY_BUFFER)
        .forEach(vbo => {
            gl.bindBuffer(vbo[0], vbo[1]);
        });

    gl.bindVertexArray(null);
    return vao;
}
