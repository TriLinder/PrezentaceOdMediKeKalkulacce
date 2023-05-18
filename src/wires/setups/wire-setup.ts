import type { Component } from "../components/component";

export class WireSetup {
    public components: Component[] = [];

    public addComponent(component: Component) {
        this.components.push(component);
    }

    public drawToCanvas(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext("2d")!;

        this.components.forEach(function(component) {
            const componentCanvas = component.getCanvas();

            ctx.drawImage(componentCanvas, component.position.x, component.position.y, component.size.width, component.size.height);
        });
    }
}