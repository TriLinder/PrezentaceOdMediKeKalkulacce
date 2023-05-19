import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import { Power } from "../types/power";

export class Component {
    public position: Coordinates;
    public size: Size;

    public isIntersectingPoint(point: Coordinates): boolean {
        const intersectingX = point.x >= this.position.x && point.x <= this.position.x + this.size.width
        const intersectingY = point.y >= this.position.y && point.y <= this.position.y + this.size.height

        return intersectingX && intersectingY;
    }

    public click(): void {
    
    }

    public getCanvas(): HTMLCanvasElement {
        return new HTMLCanvasElement();
    }

    public getOutput(index: number): Power {
        return new Power(false);
    }
}