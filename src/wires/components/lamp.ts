import { Component } from "./component";

import { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import type { Power } from "../types/power";

export class LampComponent extends Component {
    private inputs: Power[];

    private images: HTMLImageElement[];

    constructor(position: Coordinates, size: Size, inputs: Power[]) {
        super();

        this.position = position;
        this.size = size;

        this.inputs = inputs;
        this.prepareImages();
    }


    private prepareImages() {
        const offImage = new Image();
        offImage.src = "/assets/wire-simulator/lamp/off.png"
        
        const onImage = new Image();
        onImage.src = "/assets/wire-simulator/lamp/on.png";

        this.images = [offImage, onImage];
    }

    public getBitmap(): HTMLImageElement {
        return this.images[Number(this.inputs[0].isOn)];
    }

    public getSnapPoint(index: number): Coordinates {
        switch (index) {
            case 0:
                return new Coordinates(this.position.x + (this.size.width / 2), this.position.y + this.size.height);

            default:
                return this.position;
        }
    }
}