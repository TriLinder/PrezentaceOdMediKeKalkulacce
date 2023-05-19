import { Component } from "./component";

import { Coordinates } from "../types/coordinates";
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

        this.canvas = document.createElement("canvas");
        
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
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        const ctx = this.canvas.getContext("2d")!;

        ctx.fillStyle = this.isOn ? "yellow" : "gray";

        ctx.fillRect(0, 0, this.size.width, this.size.height);
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