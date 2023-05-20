import { WireSetup } from "./wire-setup";

import { PowerSourceComponent } from "../components/power-source";
import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class AndGateIntroductionSetup extends WireSetup {
    constructor() {
        super();

        //Actual components
        const powerSourceComponent = new PowerSourceComponent(new Coordinates(3840 / 2 - 500 / 2, 2160 - 500), new Size(500, 500));
        const rightSwitchComponent = new SwitchComponent(new Coordinates((3840 / 2 - 350 / 2) + 1000, 2160 / 2 - 350 / 2), new Size(350, 350), [powerSourceComponent.getOutput(0)], true);
        const leftSwitchComponent = new SwitchComponent(new Coordinates((3840 / 2 - 350 / 2) - 1000, 2160 / 2 - 350 / 2), new Size(350, 350), [rightSwitchComponent.getOutput(0)], true);
        const lampComponent = new LampComponent(new Coordinates(3840 / 2 - 500 / 2, 0), new Size(500, 500), [leftSwitchComponent.getOutput(0)]);

        //Wires
        const powerSourceToRightSwitchWire1 = new WireComponent(powerSourceComponent.getSnapPoint("right"), new Coordinates(3840 / 2 + 1000, 2160 - 500 / 2), 50, [powerSourceComponent.getOutput(0)]);
        const powerSourceToRightSwitchWire2 = new WireComponent(rightSwitchComponent.getSnapPoint("center"), powerSourceToRightSwitchWire1.getSnapPoint("endCorner"), 50, [powerSourceComponent.getOutput(0)]);

        const switchToLampWire1 = new WireComponent(new Coordinates(3840 / 2 + 1000, 500), rightSwitchComponent.getSnapPoint("center"), 50, [rightSwitchComponent.getOutput(0)]);
        const switchToLampWire2 = new WireComponent(new Coordinates(3840 / 2 - 1000, 500), switchToLampWire1.getSnapPoint("start"), 50, [rightSwitchComponent.getOutput(0)]);

        const lampToLeftSwitchWire1 = new WireComponent(switchToLampWire2.getSnapPoint("start"), leftSwitchComponent.getSnapPoint("center"), 50, [rightSwitchComponent.getOutput(0)]);
        
        const leftSwitchToPowerSourceWire1 = new WireComponent(leftSwitchComponent.getSnapPoint("center"), new Coordinates(3840 / 2 - 1000, 2160 - 500 / 2), 50, [leftSwitchComponent.getOutput(0)]);
        const leftSwitchToPowerSourceWire2 = new WireComponent(leftSwitchToPowerSourceWire1.getSnapPoint("end"), powerSourceComponent.getSnapPoint("left"), 50, [leftSwitchComponent.getOutput(0)]);
        
        //Add the wires first, so they're in the background
        this.addComponent(powerSourceToRightSwitchWire1);
        this.addComponent(powerSourceToRightSwitchWire2);
        this.addComponent(switchToLampWire1);
        this.addComponent(switchToLampWire2);
        this.addComponent(lampToLeftSwitchWire1);
        this.addComponent(leftSwitchToPowerSourceWire1);
        this.addComponent(leftSwitchToPowerSourceWire2);

        //Now add the actual components
        this.addComponent(powerSourceComponent);
        this.addComponent(rightSwitchComponent);
        this.addComponent(leftSwitchComponent);
        this.addComponent(lampComponent);
    }
}