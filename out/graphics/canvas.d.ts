export type Keyboard = {
    keys: Array<KeyboardEvent["key"]>;
};
export type Mouse = {
    locked: boolean;
    x: number;
    y: number;
    buttons: [boolean, boolean, boolean];
};
export type Input = {
    keyboard: Keyboard;
    mouse: Mouse;
};
export declare function canvas_resize(canvas: HTMLCanvasElement, width: number, height: number): void;
export declare function canvas_create(width?: number, height?: number): HTMLCanvasElement;
export declare function canvas_input_create(canvas: HTMLCanvasElement, pointer_lock?: boolean): Input;
export declare function input_key(input: Input, key: string): boolean;
export declare function input_mouse(input: Input, button: number): boolean;
