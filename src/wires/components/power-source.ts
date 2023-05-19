import { Component } from "./component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import { Power } from "../types/power";

export class PowerSourceComponent extends Component {
    private image: HTMLImageElement;
    
    constructor(position: Coordinates, size: Size) {
        super();
        
        this.position = position;
        this.size = size;

        this.outputs = [new Power(true)];
        this.prepareImage();
    }

    private prepareImage() {
        this.image = new Image();
        this.image.src = "/assets/wire-simulator/power-source/static.png";
    }

    public getBitmap(): HTMLImageElement {
        return this.image;
    }
}