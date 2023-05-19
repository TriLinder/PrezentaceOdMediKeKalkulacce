import type { Component } from "../components/component";
import { Coordinates } from "../types/coordinates";

export class WireSetup {
    public components: Component[] = [];

    public addComponent(component: Component) {
        this.components.push(component);
    }

    public handleViewportClick(viewportX: number, viewportY: number, canvas: HTMLCanvasElement) {
        const canvasRect = canvas.getBoundingClientRect();

        const scaledX = Math.round(viewportX * (canvas.width / canvasRect.width));
        const scaledY = Math.round(viewportY * (canvas.height / canvasRect.height));

        const point = new Coordinates(scaledX, scaledY);

        this.components.forEach(function(component) {
            if (component.isIntersectingPoint(point)) {
                component.click();
            }
        });
    }

    public update() {
        this.components.forEach(function(component) {
            component.update();
        });
    }

    public drawToCanvas(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext("2d")!;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.components.forEach(function(component) {
            const componentCanvas = component.getCanvas();

            ctx.drawImage(componentCanvas, component.position.x, component.position.y, component.size.width, component.size.height);
        });
    }
}