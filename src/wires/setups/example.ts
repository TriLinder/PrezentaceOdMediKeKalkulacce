import { WireSetup } from "./wire-setup";

import {SwitchComponent} from "../components/switch";
import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";
import { Power } from "../types/power";

export class ExampleWireSetup extends WireSetup {
    constructor() {
        super();

        this.addComponent(new SwitchComponent(new Coordinates(0, 0), new Size(100, 100), [new Power(true)], false));
    }
}