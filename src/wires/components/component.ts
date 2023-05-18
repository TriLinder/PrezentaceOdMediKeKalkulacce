import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class Component {
    public position: Coordinates;
    public size: Size;

    public getCanvas(): HTMLCanvasElement {
        return new HTMLCanvasElement();
    }

    public getOutput(): boolean {
        return false;
    }
}