import { AssetsPayload } from "./assets";
export * from "./graphics";
export * from "./input";
export * from "./assets";
export declare const canvas: HTMLCanvasElement;
export declare const gl: WebGL2RenderingContext;
export declare function gg_engine_preload(assets_payload: AssetsPayload): Promise<void>;
export declare function gg_engine_start(tick: () => void, render: () => void): void;
