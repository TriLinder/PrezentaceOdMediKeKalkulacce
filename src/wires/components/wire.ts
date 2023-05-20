import { Component } from "./component";

import { Coordinates } from "../types/coordinates";
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
        this.endPosition = endPosition;
        this.width = width;
        this.inputs = inputs;

        this.position = new Coordinates(
            Math.min(this.startPosition.x, this.endPosition.x),
            Math.min(this.startPosition.y, this.endPosition.y)
        );

        this.size.width = Math.abs(this.endPosition.x - this.startPosition.x) + this.width;
        this.size.height = Math.abs(this.endPosition.y - this.startPosition.y) + this.width;

        this.canvas = document.createElement("canvas");
        
        this.draw();
    }

    public update(): void {
        const input = this.inputs[0];

        if (input.isOn !== this.isOn) {
            this.isOn = input.isOn;
            this.draw();
        }
    }

    private draw(): void {
        const offsetX = this.startPosition.x < this.endPosition.x ? 0 : this.size.width - this.width;
        const offsetY = this.startPosition.y < this.endPosition.y ? this.size.height - this.width : 0;
        const dx = Math.abs(this.endPosition.x - this.startPosition.x);
        const dy = Math.abs(this.endPosition.y - this.startPosition.y);

        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        const ctx = this.canvas.getContext("2d")!;

        ctx.lineWidth = this.width;
        ctx.strokeStyle = this.isOn ? "yellow" : "gray";

        if (this.startPosition.x <= this.endPosition.x && this.startPosition.y <= this.endPosition.y) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(dx, dy);
        }
        else {
            ctx.beginPath();
            ctx.moveTo(offsetX, offsetY + dy);
            ctx.lineTo(offsetX + dx, offsetY);
        }

        ctx.stroke();
    }

    public getBitmap(): HTMLCanvasElement {
        return this.canvas;
    }

    public getSnapPoint(name: string): Coordinates {
        switch (name) {
            case "start":
                return new Coordinates(this.startPosition.x, this.startPosition.y);
            case "end":
                return new Coordinates(this.endPosition.x, this.endPosition.y);
            case "endCorner":
                return new Coordinates(this.endPosition.x, this.endPosition.y + this.width / 2);
        }
    }
}
