import { WireSetup } from "./wire-setup";

import { PowerSourceComponent } from "../components/power-source";
import { NotGateComponent } from "../components/not-gate";
import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class NotGateIntroductionSetup extends WireSetup {
    constructor() {
        super();

        //Actual components
        const powerSourceComponent = new PowerSourceComponent(new Coordinates(3840 / 2 - 500 / 2, 2160 - 500), new Size(500, 500));
        const switchComponent = new SwitchComponent(new Coordinates(3840 / 2 - 350 / 2, 2160 / 2 - 350 / 2), new Size(350, 350), [powerSourceComponent.getOutput(0)], true);
        const notGateComponent = new NotGateComponent(new Coordinates(0, 0), new Size(0, 0), [switchComponent.getOutput(0)], false);
        const lampComponent = new LampComponent(new Coordinates(3840 / 2 - 500 / 2, 0), new Size(500, 500), [notGateComponent.getOutput(0)]);

        //Wires
        const powerSourceToRightMidWire1 = new WireComponent(powerSourceComponent.getSnapPoint("right"), new Coordinates(3840 / 2 + 1000, 2160 - 500 / 2), 50, [powerSourceComponent.getOutput(0)]);
        const powerSourceToRightMidWire2 = new WireComponent(new Coordinates(3840 / 2 + 1000, 2160 / 2), powerSourceToRightMidWire1.getSnapPoint("endCorner"), 50, [powerSourceComponent.getOutput(0)]);

        const rightMidToLampWire1 = new WireComponent(new Coordinates(3840 / 2 + 1000, 500), powerSourceToRightMidWire2.getSnapPoint("start"), 50, [notGateComponent.getOutput(0)]);
        const rightMidToLampWire2 = new WireComponent(new Coordinates(3840 / 2 - 1000, 500), rightMidToLampWire1.getSnapPoint("start"), 50, [notGateComponent.getOutput(0)]);

        const lampToLeftMidWire1 = new WireComponent(rightMidToLampWire2.getSnapPoint("start"), new Coordinates(3840 / 2 - 1000, 2160 / 2), 50, [notGateComponent.getOutput(0)]);

        const leftMidToPowerSourceWire1 = new WireComponent(lampToLeftMidWire1.getSnapPoint("end"), new Coordinates(3840 / 2 - 1000, 2160 - 500 / 2), 50, [powerSourceComponent.getOutput(0)]);
        const leftMidToPowerSourceWire2 = new WireComponent(leftMidToPowerSourceWire1.getSnapPoint("end"), powerSourceComponent.getSnapPoint("left"), 50, [powerSourceComponent.getOutput(0)]);

        const leftMidToRightMidWire1 = new WireComponent(lampToLeftMidWire1.getSnapPoint("end"), powerSourceToRightMidWire2.getSnapPoint("start"), 50, [switchComponent.getOutput(0)]);

        //Add the wires first, so they're in the background
        this.addComponent(leftMidToRightMidWire1);
        this.addComponent(powerSourceToRightMidWire1);
        this.addComponent(powerSourceToRightMidWire2);
        this.addComponent(rightMidToLampWire1);
        this.addComponent(rightMidToLampWire2);
        this.addComponent(lampToLeftMidWire1);
        this.addComponent(leftMidToPowerSourceWire1);
        this.addComponent(leftMidToPowerSourceWire2);

        //Now add the actual components
        this.addComponent(powerSourceComponent);
        this.addComponent(switchComponent);
        this.addComponent(notGateComponent);
        this.addComponent(lampComponent);
    }
}