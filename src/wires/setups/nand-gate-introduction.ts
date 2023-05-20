import { WireSetup } from "./wire-setup";

import { Power } from "../types/power";
import { AndGateComponent } from "../components/and-gate";
import { NotGateComponent } from "../components/not-gate";
import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class NandGateIntroductionSetup extends WireSetup {
    constructor() {
        super();

        //Actual components
        const upperSwitchComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 - 700), new Size(350, 350), [new Power(true)], true);
        const lowerSwitchComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 + 700 / 2), new Size(350, 350), [new Power(true)], true);
        const andGateComponent = new AndGateComponent(new Coordinates(3840 / 2 - 750, 2160 / 2 - 1000 / 2), new Size(700, 1000), [upperSwitchComponent.getOutput(0), lowerSwitchComponent.getOutput(0)]);
        const notGateComponent = new NotGateComponent(new Coordinates(3840 / 2 + 250, 2160 / 2 - 1000 / 2), new Size(700, 1000), [andGateComponent.getOutput(0)]);
        const lampComponent = new LampComponent(new Coordinates(3840 - 750, 2160 / 2 - 450), new Size(500, 500), [notGateComponent.getOutput(0)]);

        //Wires
        const upperSwitchToAndGateWire = new WireComponent(upperSwitchComponent.getSnapPoint("center"), andGateComponent.getSnapPoint("input0"), 50, [upperSwitchComponent.getOutput(0)]);
        const lowerSwitchToAndGateWire = new WireComponent(lowerSwitchComponent.getSnapPoint("center"), andGateComponent.getSnapPoint("input1"), 50, [lowerSwitchComponent.getOutput(0)]);

        const andGateToNotGateWire = new WireComponent(andGateComponent.getSnapPoint("output0"), notGateComponent.getSnapPoint("input0"), 50, [andGateComponent.getOutput(0)]);

        const notGateToLampWire = new WireComponent(notGateComponent.getSnapPoint("output0"), new Coordinates(3300, 1080), 50, [notGateComponent.getOutput(0)]);

        this.addComponent(upperSwitchToAndGateWire);
        this.addComponent(lowerSwitchToAndGateWire);
        this.addComponent(andGateToNotGateWire);
        this.addComponent(notGateToLampWire);

        this.addComponent(upperSwitchComponent);
        this.addComponent(lowerSwitchComponent);
        this.addComponent(andGateComponent);
        this.addComponent(notGateComponent);
        this.addComponent(lampComponent);
    }
}