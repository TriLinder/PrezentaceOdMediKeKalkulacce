import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";
import type { Power } from "../types/power";

export class Component {
    public position: Coordinates;
    public size: Size;

    public outputs: Power[];

    constructor() {
        this.position = new Coordinates(0, 0);
        this.size = new Size(0, 0);
    }

    public isIntersectingPoint(point: Coordinates): boolean {
        const intersectingX = point.x >= this.position.x && point.x <= this.position.x + this.size.width
        const intersectingY = point.y >= this.position.y && point.y <= this.position.y + this.size.height

        return intersectingX && intersectingY;
    }

    public click(): void {
    
    }

    public update() {
    
    }

    public getBitmap(): HTMLCanvasElement | HTMLImageElement {
        return new Image();
    }

    public getOutput(index: number): Power {
        const output = this.outputs[index];
        
        return output;
    }

    public getSnapPoint(name: string): Coordinates {
        switch (name) {
            case "center":
                return new Coordinates(this.position.x + (this.size.width / 2), this.position.y + (this.size.height / 2));
            case "bottom":
                return new Coordinates(this.position.x + (this.size.width / 2), this.position.y + this.size.height);
            case "left":
                return new Coordinates(this.position.x, this.position.y + (this.size.height / 2));
            case "right":
                return new Coordinates(this.position.x + this.size.width, this.position.y + (this.size.height / 2));
        }
    }
}