import { Component } from "./component";

import type { Power } from "../types/power";
import { Coordinates } from "../types/coordinates";

export class BoxComponent extends Component {
    public canvas: HTMLCanvasElement;

    public inputs: Power[]
    
    public draw(name: string, color: string) {
        this.canvas = document.createElement("canvas");
        const ctx = this.canvas.getContext("2d")!;
    
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
    
        // Draw the rectangle
        ctx.fillStyle = color;
        ctx.fillRect(this.canvas.width / 10, 0, this.canvas.width - (this.canvas.width / 5), this.canvas.height);
    
        const shortestSide = Math.min(this.canvas.width, this.canvas.height);
    
        const fontSize = 30 * shortestSide / 100
    
        // Draw inputs
        ctx.fillStyle = "gray";

        for (let i = 0; i < this.inputs.length; i++) {
            const snapPoint = this.getSnapPoint(`input${i}`);
            const x = snapPoint.x - this.position.x;
            const y = snapPoint.y - this.position.y;

            ctx.beginPath();
            ctx.arc(x, y, shortestSide * 0.15, 0, 2 * Math.PI);
            ctx.fill();
        }
    
        // Draw outputs
        ctx.fillStyle = "gray";

        for (let i = 0; i < this.outputs.length; i++) {
            const snapPoint = this.getSnapPoint(`output${i}`);
            const x = snapPoint.x - this.position.x;
            const y = snapPoint.y - this.position.y;

            ctx.beginPath();
            ctx.arc(x, y, shortestSide * 0.15, 0, 2 * Math.PI);
            ctx.fill();
        }
    
        // Draw the text
        ctx.fillStyle = "white";
        ctx.font = `${fontSize}px sans-serif`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        
        ctx.fillText(name, this.canvas.width / 2, this.canvas.height / 2);
    }

    public getSnapPoint(name: string): Coordinates {
        if (name.startsWith("input")) {
            const inputIndex = Number(name.split("input")[1]);

            const inputSpacing = this.canvas.height / (this.inputs.length + 1)

            const x = this.position.x + (this.canvas.width * 0.15);
            const y = this.position.y + ((inputIndex + 1) * inputSpacing );

            return new Coordinates(x, y);
        }
        else if (name.startsWith("output")) {
            const outputIndex = Number(name.split("output")[1]);

            const outputSpacing = this.canvas.height / (this.outputs.length + 1)

            const x = this.position.x + (this.canvas.width - (this.canvas.width * 0.15));
            const y = this.position.y + ((outputIndex + 1) * outputSpacing);

            return new Coordinates(x, y);
        }
    }
}