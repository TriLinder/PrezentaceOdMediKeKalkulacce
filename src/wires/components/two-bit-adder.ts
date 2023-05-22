import { BoxComponent } from "./box-component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import { Power } from "../types/power";

export class TwoBitAdderComponent extends BoxComponent {
    constructor(position: Coordinates, size: Size, inputs: Power[]) {
        super();

        this.position = position;
        this.size = size;

        this.inputs = inputs;
        this.outputs = [new Power(), new Power()];

        this.draw("⊞", "#5c6fed");
    }

    public update(): void {
        const sumOutput = this.outputs[0];
        const carryOutput = this.outputs[1];
        
        let numberOfTrueInputs = 0;

        this.inputs.forEach(function(input) {
            if (input.isOn) {
                numberOfTrueInputs += 1
            }
        });

        switch (numberOfTrueInputs) {
            case 0:
                sumOutput.off();
                carryOutput.off();
                break;
            case 1:
                sumOutput.on();
                carryOutput.off();
                break;
            case 2:
                sumOutput.off();
                carryOutput.on();
                break;
            case 3:
                sumOutput.on();
                carryOutput.on();
                break;
        }
    }

    public getBitmap(): HTMLCanvasElement{
        return this.canvas;
    }
}