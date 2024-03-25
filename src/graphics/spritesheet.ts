// TODO: store as vbo instead of texcoords?
export type Spritesheet = {
    texture: WebGLTexture
    source_size: [number, number]
    sprite_size: [number, number]
    texcoords: number[]
}

export function spritesheet_create(
    texture: WebGLTexture,
    source_size: [number, number],
    sprite_size: [number, number],
    { shrink }: { shrink: number } = { shrink: 0 }
): Spritesheet {
    const texcoords = [];

    for (let i = 0; i < ((source_size[0] / sprite_size[0]) * (source_size[1] / sprite_size[1])); i++) {
        const column = source_size[0] / sprite_size[0];
        const x = (i % column) * sprite_size[0], y = Math.floor(i / column) * sprite_size[1];

        texcoords.push(...[
            x / source_size[0] + shrink, y / source_size[1] + shrink,
            (x + sprite_size[0]) / source_size[0] - shrink, y / source_size[1] + shrink,
            (x + sprite_size[0]) / source_size[0] - shrink, (y + sprite_size[1]) / source_size[1] - shrink,
            x / source_size[0] + shrink, (y + sprite_size[1]) / source_size[1] - shrink
        ])
    }

    return {
        texture,
        source_size,
        sprite_size,
        texcoords
    }
}
