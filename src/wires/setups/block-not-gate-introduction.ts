import { WireSetup } from "./wire-setup";

import { PowerSourceComponent } from "../components/power-source";
import { NotGateComponent } from "../components/not-gate";
import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class BlockNotGateIntroductionSetup extends WireSetup {
    constructor() {
        super();

        //Actual components
        const powerSourceComponent = new PowerSourceComponent(new Coordinates(0, 2160 / 2 - 500 / 2), new Size(500, 500));
        const switchComponent = new SwitchComponent(new Coordinates((3840 / 2 - 350 / 2) - 800, 2160 / 2 - 350 / 2), new Size(350, 350), [powerSourceComponent.getOutput(0)], true);;
        const notGateComponent = new NotGateComponent(new Coordinates(3840 / 2 - 700 / 2, 2160 / 2 - 1000 / 2), new Size(700, 1000), [switchComponent.getOutput(0)]);
        const lampComponent = new LampComponent(new Coordinates((3840 / 2 - 500 / 2) + 1300, 2160 / 2 - 450), new Size(500, 500), [notGateComponent.getOutput(0)]);

        //Wires
        const powerSourceToSwitchWire = new WireComponent(powerSourceComponent.getSnapPoint("right"), switchComponent.getSnapPoint("center"), 50, [powerSourceComponent.getOutput(0)]);
        const switchToNotGateWire = new WireComponent(switchComponent.getSnapPoint("center"), notGateComponent.getSnapPoint("input0"), 50, [switchComponent.getOutput(0)]);
        const notGateToLampWire = new WireComponent(notGateComponent.getSnapPoint("output0"), new Coordinates(3220, 1080), 50, [notGateComponent.getOutput(0)]);

        this.addComponent(powerSourceToSwitchWire);
        this.addComponent(switchToNotGateWire);
        this.addComponent(notGateToLampWire);

        this.addComponent(powerSourceComponent);
        this.addComponent(switchComponent);
        this.addComponent(notGateComponent);
        this.addComponent(lampComponent);
    }
}