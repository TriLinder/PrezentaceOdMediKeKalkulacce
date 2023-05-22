import { LabelComponent } from "./label-component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import type { Power } from "../types/power";

export class DynamicNumberLabelComponent extends LabelComponent {
    private inputs: Power[];    

    constructor(position: Coordinates, fontSize: number, inputs: Power[]) {
        super(position, "?", fontSize);

        this.inputs = inputs;
    }

    public update(): void {
        let binaryNumberString = "";

        this.inputs.forEach(function(input) {
            binaryNumberString += String(Number(input.isOn));
        });

        const decimalNumber = parseInt(binaryNumberString, 2);

        this.updateLabel(String(decimalNumber).padStart(2, "0"));
    }
}