import { Component } from "./component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";

export class SwitchComponent extends Component {
    public state: boolean;
    private canvas: HTMLCanvasElement;

    constructor(position: Coordinates, size: Size, state: boolean) {
        super();

        this.position = position;
        this.size = size;
        this.state = state;

        this.draw();
    }

    public click() {
        this.state = !this.state;
        this.draw();
    }

    private draw() {
        this.canvas = document.createElement("canvas");

        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        const ctx = this.canvas.getContext("2d")!;

        ctx.fillStyle = this.state ? "yellow" : "gray";

        ctx.beginPath();
        ctx.arc(this.canvas.width / 2, this.canvas.height / 2, (this.canvas.width / 2) - 1, 0, 2 * Math.PI);
        ctx.fill();
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public getOutput(): boolean {
        return this.state;
    }
}