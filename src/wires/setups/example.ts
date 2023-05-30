import { WireSetup } from "./wire-setup";

import { SwitchComponent } from "../components/switch";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";
import { Power } from "../types/power";

export class ExampleSetup extends WireSetup {
    constructor() {
        super();

        const switchComponent = new SwitchComponent(new Coordinates(3840 / 2 - 500 / 2, 2160 / 2 - 500 / 2), new Size(500, 500), [new Power(true)], true);

        this.addComponent(switchComponent);
    }
}