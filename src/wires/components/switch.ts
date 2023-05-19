import { Component } from "./component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import { Power } from "../types/power";

export class SwitchComponent extends Component {
    public switched: boolean;
    private canvas: HTMLCanvasElement;

    private inputs: Power[];
    private outputs: Power[];

    constructor(position: Coordinates, size: Size, inputs: Power[], switched: boolean) {
        super();

        this.position = position;
        this.size = size;
        this.switched = switched;

        this.inputs = inputs;
        this.outputs = [new Power()];

        this.draw();
    }

    public click() {
        this.switched = !this.switched;

        this.draw();
    }

    private draw() {
        this.canvas = document.createElement("canvas");

        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        const ctx = this.canvas.getContext("2d")!;

        ctx.fillStyle = this.switched ? "yellow" : "gray";

        ctx.beginPath();
        ctx.arc(this.canvas.width / 2, this.canvas.height / 2, (this.canvas.width / 2) - 1, 0, 2 * Math.PI);
        ctx.fill();
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public getOutput(index: number): Power {
        const output = this.outputs[index];        
        const input = this.inputs[index];

        output.isOn = input.isOn && this.switched;
        
        return output;
    }
}