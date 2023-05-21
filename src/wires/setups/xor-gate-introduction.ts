import { WireSetup } from "./wire-setup";

import { Power } from "../types/power";
import { OrGateComponent } from "../components/or-gate";
import { NandGateComponent } from "../components/nand-gate";
import { AndGateComponent } from "../components/and-gate";
import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class XorGateIntroductionSetup extends WireSetup {
    constructor() {
        super();

        //Actual components
        const upperSwitchComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 - 700), new Size(350, 350), [new Power(true)], true);
        const lowerSwitchComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 + 700 / 2), new Size(350, 350), [new Power(true)], true);
        const orGateComponent = new OrGateComponent(new Coordinates(1000, 2160 / 2 - 400 - 200 / 2), new Size(600, 200), [upperSwitchComponent.getOutput(0), lowerSwitchComponent.getOutput(0)]);
        const nandGateComponent = new NandGateComponent(new Coordinates(1000, 2160 / 2 + 400 - 200 / 2), new Size(600, 200), [upperSwitchComponent.getOutput(0), lowerSwitchComponent.getOutput(0)]);
        const andGateComponent = new AndGateComponent(new Coordinates(3840 / 2 + 100, 2160 / 2 - 650 / 2), new Size(1000, 650), [orGateComponent.getOutput(0), nandGateComponent.getOutput(0)]);
        const lampComponent = new LampComponent(new Coordinates(3840 - 500, 2160 / 2 - 450), new Size(500, 500), [andGateComponent.getOutput(0)]);

        //Wires
        const upperSwitchToOrGateWire = new WireComponent(upperSwitchComponent.getSnapPoint("center"), orGateComponent.getSnapPoint("input0"), 25, [upperSwitchComponent.getOutput(0)]);        
        const lowerSwitchToOrGateWire = new WireComponent(lowerSwitchComponent.getSnapPoint("center"), orGateComponent.getSnapPoint("input1"), 25, [lowerSwitchComponent.getOutput(0)]);

        const upperSwitchToNandGateWire = new WireComponent(upperSwitchComponent.getSnapPoint("center"), nandGateComponent.getSnapPoint("input0"), 25, [upperSwitchComponent.getOutput(0)]);
        const lowerSwitchToNandGateWire = new WireComponent(lowerSwitchComponent.getSnapPoint("center"), nandGateComponent.getSnapPoint("input1"), 25, [lowerSwitchComponent.getOutput(0)]);

        const orGateToAndGateWire = new WireComponent(orGateComponent.getSnapPoint("output0"), andGateComponent.getSnapPoint("input0"), 25, [orGateComponent.getOutput(0)]);
        const nandGateToAndGateWire = new WireComponent(nandGateComponent.getSnapPoint("output0"), andGateComponent.getSnapPoint("input1"), 25, [nandGateComponent.getOutput(0)]);

        const andGateToLampWire = new WireComponent(andGateComponent.getSnapPoint("output0"), new Coordinates(3550, 1080), 50, [andGateComponent.getOutput(0)]);

        //Add the wires first, so they're in the background
        this.addComponent(upperSwitchToOrGateWire);
        this.addComponent(lowerSwitchToOrGateWire);
        this.addComponent(upperSwitchToNandGateWire);
        this.addComponent(lowerSwitchToNandGateWire);
        this.addComponent(orGateToAndGateWire);
        this.addComponent(nandGateToAndGateWire);
        this.addComponent(andGateToLampWire);

        //Now add the actual components
        this.addComponent(upperSwitchComponent);
        this.addComponent(lowerSwitchComponent);
        this.addComponent(orGateComponent);
        this.addComponent(nandGateComponent);
        this.addComponent(andGateComponent);
        this.addComponent(lampComponent);
    }
}