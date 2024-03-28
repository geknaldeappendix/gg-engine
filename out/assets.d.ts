type AssetPayload<T> = [string, T];
export type ProgramPayload = [string, string];
export type ImagePayload = string;
export type TexturePayload = string;
export type AssetsPayload = {
    programs?: AssetPayload<ProgramPayload>[];
    images?: AssetPayload<ImagePayload>[];
    textures?: AssetPayload<TexturePayload>[];
};
export declare function assets_program(index: string): WebGLProgram;
export declare function assets_image(index: string): HTMLImageElement;
export declare function assets_texture(index: string): WebGLTexture;
export declare function assets_load(assets_payload: AssetsPayload, gl: WebGL2RenderingContext): Promise<void>;
export {};
