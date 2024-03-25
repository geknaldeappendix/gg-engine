import { Input } from "./graphics";
export * from "./graphics";
export type Engine = {
    canvas: HTMLCanvasElement;
    input: Input;
    gl: WebGL2RenderingContext;
};
export declare function gg_engine_create(): Engine;
export declare function gg_engine_start(): void;
