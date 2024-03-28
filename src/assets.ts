import { image_create, program_create, texture_create } from "./graphics"

type IndexableObject<T> = { [index: string]: T }

type Assets = {
    programs: IndexableObject<WebGLProgram>
    images: IndexableObject<HTMLImageElement>
    textures: IndexableObject<WebGLTexture>
}

type AssetsKey = keyof Assets;
type AssetsValues = keyof typeof assets;

type AssetPayload<T> = [string, T];

export type ProgramPayload = [string, string];
export type ImagePayload = string;
export type TexturePayload = string;

export type AssetsPayload = {
    programs?: AssetPayload<ProgramPayload>[]
    images?: AssetPayload<ImagePayload>[]
    textures?: AssetPayload<TexturePayload>[]
}

const assets: Assets = {
    programs: { },
    images: { },
    textures: { },
}

export function assets_program(index: string) {
    return assets.programs[index];
}

export function assets_image(index: string) {
    return assets.images[index];
}

export function assets_texture(index: string) {
    return assets.textures[index];
}

type AssetLoaders = { [Key in AssetsKey]: (data: ProgramPayload & ImagePayload, gl: WebGL2RenderingContext) => Promise<typeof assets[Key][AssetsValues]> }

const loaders: AssetLoaders = {
    programs: async (data: ProgramPayload, gl: WebGL2RenderingContext) => program_create(gl, ...data),
    images: async (data: ImagePayload) => image_create(data),
    textures: async (data: TexturePayload, gl: WebGL2RenderingContext) => texture_create(gl, assets_image(data))
}

export async function assets_load(assets_payload: AssetsPayload, gl: WebGL2RenderingContext) {
    for (const key in assets_payload) {
        for (const payload of assets_payload[key as AssetsKey]!) {
            const [index, data] = payload;

            assets[key as AssetsKey][index] = await loaders[key as AssetsKey](data as any, gl);
        }
    }
}
