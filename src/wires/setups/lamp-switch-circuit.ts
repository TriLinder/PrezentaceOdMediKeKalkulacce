import { WireSetup } from "./wire-setup";

import { PowerSourceComponent } from "../components/power-source";
import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class LampSwitchCircuitSetup extends WireSetup {
    constructor() {
        super();

        //Actual components
        const powerSourceComponent = new PowerSourceComponent(new Coordinates(3840 / 2 - 500 / 2, 2160 - 500), new Size(500, 500));
        const switchComponent = new SwitchComponent(new Coordinates((3840 / 2 - 350 / 2) + 1000, 2160 / 2 - 350 / 2), new Size(350, 350), [powerSourceComponent.getOutput(0)], true);
        const lampComponent = new LampComponent(new Coordinates(3840 / 2 - 500 / 2, 0), new Size(500, 500), [switchComponent.getOutput(0)]);

        //Wires
        const powerSourceToSwitchWire1 = new WireComponent(powerSourceComponent.getSnapPoint("right"), new Coordinates(3840 / 2 + 1000, 2160 - 500 / 2), 50, [powerSourceComponent.getOutput(0)]);
        const powerSourceToSwitchWire2 = new WireComponent(switchComponent.getSnapPoint("center"), powerSourceToSwitchWire1.getSnapPoint("endCorner"), 50, [powerSourceComponent.getOutput(0)]);

        const switchToLampWire1 = new WireComponent(new Coordinates(3840 / 2 + 1000, 500), switchComponent.getSnapPoint("center"), 50, [switchComponent.getOutput(0)]);
        const switchToLampWire2 = new WireComponent(new Coordinates(3840 / 2 - 1000, 500), switchToLampWire1.getSnapPoint("start"), 50, [switchComponent.getOutput(0)]);

        const lampToPowerSourceWire1 = new WireComponent(switchToLampWire2.getSnapPoint("start"), new Coordinates(3840 / 2 - 1000, 2160 - 500 / 2), 50, [switchComponent.getOutput(0)]);
        const lampToPowerSourceWire2 = new WireComponent(lampToPowerSourceWire1.getSnapPoint("end"), powerSourceComponent.getSnapPoint("left"), 50, [switchComponent.getOutput(0)]);

        //Add the wires first, so they're in the background
        this.addComponent(powerSourceToSwitchWire1);
        this.addComponent(powerSourceToSwitchWire2);
        this.addComponent(switchToLampWire1);
        this.addComponent(switchToLampWire2);
        this.addComponent(lampToPowerSourceWire1);
        this.addComponent(lampToPowerSourceWire2);

        //Now add the actual components
        this.addComponent(powerSourceComponent);
        this.addComponent(switchComponent);
        this.addComponent(lampComponent);
    }
}