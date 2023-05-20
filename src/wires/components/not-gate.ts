import { BoxComponent } from "./box-component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import { Power } from "../types/power";

export class NotGateComponent extends BoxComponent {
    constructor(position: Coordinates, size: Size, inputs: Power[]) {
        super();

        this.position = position;
        this.size = size;

        this.inputs = inputs;
        this.outputs = [new Power()];

        this.draw("NOT", "#f73d40");
    }

    public update(): void {
        const input = this.inputs[0];
        const output = this.outputs[0];

        output.isOn = !input.isOn;
    }

    public getBitmap(): HTMLCanvasElement{
        return this.canvas;
    }
}