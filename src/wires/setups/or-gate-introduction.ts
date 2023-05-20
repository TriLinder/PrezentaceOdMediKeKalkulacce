import { WireSetup } from "./wire-setup";

import { Power } from "../types/power";
import { NotGateComponent } from "../components/not-gate";
import { NandGateComponent } from "../components/nand-gate";
import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class OrGateIntroductionSetup extends WireSetup {
    constructor() {
        super();

        //Actual components
        const upperSwitchComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 - 700), new Size(350, 350), [new Power(true)], true);
        const lowerSwitchComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 + 700 / 2), new Size(350, 350), [new Power(true)], true);
        const upperNotGateComponent = new NotGateComponent(new Coordinates(1000, 2160 / 2 - 400 - 200 / 2), new Size(600, 200), [upperSwitchComponent.getOutput(0)]);
        const lowerNotGateComponent = new NotGateComponent(new Coordinates(1000, 2160 / 2 + 400 - 200 / 2), new Size(600, 200), [lowerSwitchComponent.getOutput(0)]);
        const nandGateComponent = new NandGateComponent(new Coordinates(3840 / 2 + 100, 2160 / 2 - 650 / 2), new Size(1000, 650), [upperNotGateComponent.getOutput(0), lowerNotGateComponent.getOutput(0)]);
        const lampComponent = new LampComponent(new Coordinates(3840 - 500, 2160 / 2 - 450), new Size(500, 500), [nandGateComponent.getOutput(0)]);

        //Wires
        const upperSwitchToUpperNandGateWire = new WireComponent(upperSwitchComponent.getSnapPoint("center"), upperNotGateComponent.getSnapPoint("input0"), 25, [upperSwitchComponent.getOutput(0)]);
        const lowerSwitchToLowerNandGateWire = new WireComponent(lowerSwitchComponent.getSnapPoint("center"), lowerNotGateComponent.getSnapPoint("input0"), 25, [lowerSwitchComponent.getOutput(0)]);

        const upperNotGateToNandGateWire = new WireComponent(upperNotGateComponent.getSnapPoint("output0"), nandGateComponent.getSnapPoint("input0"), 25, [upperNotGateComponent.getOutput(0)]);
        const lowerNotGateToNandGateWire = new WireComponent(lowerNotGateComponent.getSnapPoint("output0"), nandGateComponent.getSnapPoint("input1"), 25, [lowerNotGateComponent.getOutput(0)]);
        
        const nandGateToLampWire = new WireComponent(nandGateComponent.getSnapPoint("output0"), new Coordinates(3550, 1080), 50, [nandGateComponent.getOutput(0)]);

        //Add the wires first, so they're in the background
        this.addComponent(upperSwitchToUpperNandGateWire);
        this.addComponent(lowerSwitchToLowerNandGateWire);
        this.addComponent(upperNotGateToNandGateWire);
        this.addComponent(lowerNotGateToNandGateWire);
        this.addComponent(nandGateToLampWire);

        //Now add the actual components
        this.addComponent(upperSwitchComponent);
        this.addComponent(lowerSwitchComponent);
        this.addComponent(upperNotGateComponent);
        this.addComponent(lowerNotGateComponent);
        this.addComponent(nandGateComponent);
        this.addComponent(lampComponent);
    }
}