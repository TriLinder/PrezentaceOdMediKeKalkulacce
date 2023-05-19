import { WireSetup } from "./wire-setup";

import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";
import { Power } from "../types/power";

export class ExampleWireSetup extends WireSetup {
    constructor() {
        super();

        const switchComponent = new SwitchComponent(new Coordinates(0, 0), new Size(100, 100), [new Power(true)], false);
        const lampComponent = new LampComponent(new Coordinates(700, 300), new Size(100, 100), [switchComponent.getOutput(0)]);
        const wireComponent = new WireComponent(switchComponent.getSnapPoint("center"), lampComponent.getSnapPoint("bottom"), 25, [switchComponent.getOutput(0)]);

        this.addComponent(switchComponent);
        this.addComponent(lampComponent);
        this.addComponent(wireComponent);
    }
}