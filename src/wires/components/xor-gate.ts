import { BoxComponent } from "./box-component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import { Power } from "../types/power";

export class XorGateComponent extends BoxComponent {
    constructor(position: Coordinates, size: Size, inputs: Power[]) {
        super();

        this.position = position;
        this.size = size;

        this.inputs = inputs;
        this.outputs = [new Power()];

        this.draw("XOR", "#f7a93b");
    }

    public update(): void {
        const output = this.outputs[0];

        output.isOn = this.inputs[0].isOn != this.inputs[1].isOn;
    }

    public getBitmap(): HTMLCanvasElement{
        return this.canvas;
    }
}