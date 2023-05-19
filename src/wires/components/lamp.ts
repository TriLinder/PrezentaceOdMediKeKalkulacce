import { Component } from "./component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import type { Power } from "../types/power";

export class LampComponent extends Component {
    private canvas: HTMLCanvasElement;   
    private inputs: Power[];

    private isOn: boolean;

    constructor(position: Coordinates, size: Size, inputs: Power[]) {
        super();

        this.position = position;
        this.size = size;

        this.inputs = inputs;
        this.isOn = false;

        this.draw();
    }

    public update() {
        const input = this.inputs[0];
        
        if (input.isOn != this.isOn) {
            this.isOn = input.isOn;
            this.draw();
        }
    }

    private draw() {
        this.canvas = document.createElement("canvas");

        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        const ctx = this.canvas.getContext("2d")!;

        ctx.fillStyle = this.isOn ? "yellow" : "gray";

        ctx.fillRect(0, 0, this.size.width, this.size.height);
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }
}