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
export declare function input_create(canvas: HTMLCanvasElement, pointer_lock: boolean): void;
export declare function input_key(key: string): boolean;
export declare function input_mouse(button: number): boolean;
export declare function input_mouse_position(): [number, number];
