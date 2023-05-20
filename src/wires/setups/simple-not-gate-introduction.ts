import { WireSetup } from "./wire-setup";

import { PowerSourceComponent } from "../components/power-source";
import { NotGateComponent } from "../components/not-gate";
import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class SimpleNotGateIntroductionSetup extends WireSetup {
    constructor() {
        super();

        const powerSourceComponent = new PowerSourceComponent(new Coordinates(0, 700), new Size(500, 500));
        const notGateComponent = new NotGateComponent(new Coordinates(1700, 700), new Size(700, 1000), [powerSourceComponent.getOutput(0)]);
        const wireComponent = new WireComponent(powerSourceComponent.getSnapPoint("right"), notGateComponent.getSnapPoint("input0"), 50, [powerSourceComponent.getOutput(0)]);

        this.addComponent(wireComponent);
        this.addComponent(powerSourceComponent);
        this.addComponent(notGateComponent);
    }
}