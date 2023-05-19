import { Component } from "./component";

import { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import { Power } from "../types/power";

export class SwitchComponent extends Component {
    public switched: boolean;
    private canvas: HTMLCanvasElement;

    private inputs: Power[];

    constructor(position: Coordinates, size: Size, inputs: Power[], switched: boolean) {
        super();

        this.position = position;
        this.size = size;
        this.switched = switched;

        this.inputs = inputs;
        this.outputs = [new Power()];

        this.canvas = document.createElement("canvas");

        this.draw();
    }

    public click() {
        this.switched = !this.switched;

        this.draw();
    }

    public update() {
        const output = this.outputs[0];        
        const input = this.inputs[0];

        output.isOn = input.isOn && this.switched;
    }

    private draw() {
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        const ctx = this.canvas.getContext("2d")!;

        ctx.fillStyle = this.switched ? "yellow" : "gray";

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.beginPath();
        ctx.arc(this.canvas.width / 2, this.canvas.height / 2, (this.canvas.width / 2) - 1, 0, 2 * Math.PI);
        ctx.fill();
    }

    public getBitmap(): HTMLCanvasElement {
        return this.canvas;
    }

    public getSnapPoint(index: number): Coordinates {
        switch (index) {
            case 0:
                return new Coordinates(this.position.x + (this.size.width / 2), this.position.y + (this.size.height / 2));

            default:
                return this.position;
        }
    }
}