export type Keyboard = {
    keys: Array<KeyboardEvent["key"]>
}

export type Mouse = {
    locked: boolean
    x: number
    y: number
    buttons: [boolean, boolean, boolean]
}

export type Input = {
    keyboard: Keyboard
    mouse: Mouse
}

function input_on_click(input: Input, canvas: HTMLCanvasElement, pointer_lock: boolean): void {
    if (pointer_lock) (async () => canvas.requestPointerLock())();
}

function input_on_mouse_move({ mouse }: Input, event: MouseEvent): void {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}

function input_on_mouse_down({ mouse }: Input, event: MouseEvent): void {
    mouse.buttons[event.button] = true;
}

function input_on_mouse_up({ mouse }: Input, event: MouseEvent): void {
    mouse.buttons[event.button] = false;
}

function input_on_key_down({ keyboard }: Input, event: KeyboardEvent): void {
    if (!keyboard.keys.includes(event.key)) {
        keyboard.keys.push(event.key);
    }
}

function input_on_key_up({ keyboard }: Input, event: KeyboardEvent): void {
    keyboard.keys.splice(keyboard.keys.indexOf(event.key), 1);
}

export function canvas_resize(canvas: HTMLCanvasElement, width: number, height: number) {
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
}

export function canvas_create(width: number = 300, height: number = 150): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas_resize(canvas, width, height);
    return canvas;
}

export function canvas_input_create(canvas: HTMLCanvasElement, pointer_lock: boolean = false): Input {
    const input: Input = {
        mouse: {
            locked: false,
            x: -1,
            y: -1,
            buttons: [false, false, false],
        },
        keyboard: {
            keys: []
        }
    };

    canvas.oncontextmenu = (event) => event.preventDefault();
    canvas.onclick = () => input_on_click(input, canvas, pointer_lock);
    canvas.onmousedown = (event) => input_on_mouse_down(input, event);
    canvas.onmouseup = (event) => input_on_mouse_up(input, event);
    canvas.onmousemove = (event) => input_on_mouse_move(input, event);
    document.body.onkeydown = (event) => input_on_key_down(input, event);
    document.body.onkeyup = (event) => input_on_key_up(input, event);

    return input;
}

export function input_key(input: Input, key: string): boolean {
    return input.keyboard.keys.includes(key);
}

export function input_mouse(input: Input, button: number): boolean {
    return input.mouse.buttons[button];
}