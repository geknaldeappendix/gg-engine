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

function input_on_click(canvas: HTMLCanvasElement, pointer_lock: boolean): void {
    if (pointer_lock) (async () => canvas.requestPointerLock())();
}

function input_on_mouse_move(event: MouseEvent): void {
    input.mouse.x = event.clientX;
    input.mouse.y = event.clientY;
}

function input_on_mouse_down(event: MouseEvent): void {
    input.mouse.buttons[event.button] = true;
}

function input_on_mouse_up(event: MouseEvent): void {
    input.mouse.buttons[event.button] = false;
}

function input_on_key_down(event: KeyboardEvent): void {
    if (!input.keyboard.keys.includes(event.key)) {
        input.keyboard.keys.push(event.key);
    }
}

function input_on_key_up(event: KeyboardEvent): void {
    input.keyboard.keys.splice(input.keyboard.keys.indexOf(event.key), 1);
}

export function input_create(canvas: HTMLCanvasElement, pointer_lock: boolean) {
    canvas.oncontextmenu = (event) => event.preventDefault();
    canvas.onclick = () => input_on_click(canvas, pointer_lock);
    canvas.onmousedown = (event) => input_on_mouse_down(event);
    canvas.onmouseup = (event) => input_on_mouse_up(event);
    canvas.onmousemove = (event) => input_on_mouse_move(event);
    document.body.onkeydown = (event) => input_on_key_down(event);
    document.body.onkeyup = (event) => input_on_key_up(event);
}

export function input_key(key: string): boolean {
    return input.keyboard.keys.includes(key);
}

export function input_mouse(button: number): boolean {
    return input.mouse.buttons[button];
}

export function input_mouse_position(): [number, number] {
    return [input.mouse.x, input.mouse.y];
}