import { Component } from "./component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import type { Power } from "../types/power";

export class WireComponent extends Component {
    private canvas: HTMLCanvasElement;
    
    private startPosition: Coordinates;
    private endPosition: Coordinates;
    private width: number;

    private inputs: Power[];

    private isOn: boolean;

    constructor(startPosition: Coordinates, endPosition: Coordinates, width: number, inputs: Power[]) {
        super();

        this.startPosition = startPosition;
        this.endPosition = endPosition
        this.width = width
        this.inputs = inputs

        this.size.width = this.endPosition.x - this.startPosition.x;
        this.size.height = this.endPosition.y - this.startPosition.y;

        this.canvas = document.createElement("canvas");
        
        this.draw();
    }

    public update(): void {
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

        ctx.lineWidth = this.width;

        ctx.strokeStyle = this.isOn ? "yellow" : "gray";

        ctx.moveTo(0, 0);
        ctx.lineTo(this.canvas.width, this.canvas.height);
        ctx.stroke();
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }
}