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

    private draw() {
        this.canvas = document.createElement("canvas");

        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        const ctx = this.canvas.getContext("2d")!;

        ctx.fillStyle = "white";

        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //ctx.beginPath();
        //ctx.arc(95,50,40,0,2*Math.PI);
        //ctx.fill();
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }
}