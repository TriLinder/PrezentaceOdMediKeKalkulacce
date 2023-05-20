import { Component } from "./component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import { Power } from "../types/power";

export class NotGateComponent extends Component {
    private inputs: Power[];
    
    private visible: boolean;
    private image: HTMLImageElement;

    constructor(position: Coordinates, size: Size, inputs: Power[], visible = true) {
        super();

        this.position = position;
        this.size = size;

        this.inputs = inputs;
        this.visible = visible;

        this.image = new Image();

        this.outputs = [new Power()];
    }

    public update(): void {
        const input = this.inputs[0];
        const output = this.outputs[0];

        output.isOn = !input.isOn;
    }

    public getBitmap(): HTMLImageElement {
        return this.image;
    }
}