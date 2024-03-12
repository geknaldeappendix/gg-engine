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
