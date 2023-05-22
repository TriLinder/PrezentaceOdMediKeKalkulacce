import { Component } from "./component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import type { Power } from "../types/power";

export class LabelComponent extends Component {
    private canvas: HTMLCanvasElement;
    
    private label: string;
    private fontSize: number;

    constructor(position: Coordinates, label: string, fontSize: number) {
        super();

        this.position = position;

        this.label = label;
        this.fontSize = fontSize;

        this.draw();
    }

    public updateLabel(label: string) {
        if (label != this.label) {
            this.label = label;
            this.draw();
        }
    }

    public updateFontSize(fontSize: number) {
        if (fontSize != this.fontSize) {
            this.fontSize = fontSize;
            this.draw();
        }
    }

    private draw() {
        this.canvas = document.createElement("canvas");
        const ctx = this.canvas.getContext("2d")!;

        //Set font
        ctx.font = `${this.fontSize}px sans-serif`;
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";

        //Calculate text dimensions and set canvas and our size based on them
        const textDimensions = ctx.measureText(this.label);

        this.size.width = textDimensions.width;
        this.size.height = this.fontSize

        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        //Set font and its properties again, as this is reset when the canvas is resized
        ctx.font = `${this.fontSize}px sans-serif`;
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";

        //Draw the text
        ctx.fillText(this.label, 0, 0);
    }

    public getBitmap(): HTMLCanvasElement {
        return this.canvas;
    }
}