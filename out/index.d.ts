export * from "./graphics";
export * from "./input";
export declare const canvas: HTMLCanvasElement;
export declare const gl: WebGL2RenderingContext;
export declare function gg_engine_create(tick: () => void, render: () => void): void;
