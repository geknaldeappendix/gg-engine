export type Spritesheet = {
    texture: WebGLTexture;
    source_size: [number, number];
    sprite_size: [number, number];
    texcoords: number[];
};
export declare function spritesheet_create(texture: WebGLTexture, source_size: [number, number], sprite_size: [number, number], { shrink }?: {
    shrink: number;
}): Spritesheet;
