import { WireSetup } from "./wire-setup";

import { Power } from "../types/power";
import { OrGateComponent } from "../components/or-gate";
import { XorGateComponent } from "../components/xor-gate";
import { AndGateComponent } from "../components/and-gate";
import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";
import { LabelComponent } from "../components/label";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class TwoBitAdderSetup extends WireSetup {
    constructor() {
        super();

        //Actual components
        const inputAComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 - 250), new Size(200, 200), [new Power(true)]);
        const inputBComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 + 250 / 2), new Size(200, 200), [new Power(true)]);

        const xorGateComponent = new XorGateComponent(new Coordinates(1000, 2160 / 2 - 400), new Size(400, 200), [inputAComponent.getOutput(0), inputBComponent.getOutput(0)]);
        const andGateComponent = new AndGateComponent(new Coordinates(1000, 2160 / 2 + 200), new Size(400, 200), [inputAComponent.getOutput(0), inputBComponent.getOutput(0)]);

        const sumOutputComponent = new LampComponent(new Coordinates(3840 - 250, 2160 / 2 - 250), new Size(200, 200), [xorGateComponent.getOutput(0)]);
        const carryOutputComponent = new LampComponent(new Coordinates(3840 - 250, 2160 / 2 + 250 / 2), new Size(200, 200), [andGateComponent.getOutput(0)]);

        //Wires
        const inputAToXorGateWire = new WireComponent(inputAComponent.getSnapPoint("center"), xorGateComponent.getSnapPoint("input0"), 25, [inputAComponent.getOutput(0)]);
        const inputBToXorGateWire = new WireComponent(inputBComponent.getSnapPoint("center"), xorGateComponent.getSnapPoint("input1"), 25, [inputBComponent.getOutput(0)]);

        const inputAToAndGateWire = new WireComponent(inputAComponent.getSnapPoint("center"), andGateComponent.getSnapPoint("input0"), 25, [inputAComponent.getOutput(0)]);
        const inputBToAndGateWire = new WireComponent(inputBComponent.getSnapPoint("center"), andGateComponent.getSnapPoint("input1"), 25, [inputBComponent.getOutput(0)]);

        const xorGateToSumOutputWire = new WireComponent(xorGateComponent.getSnapPoint("output0"), sumOutputComponent.getSnapPoint("left"), 25, [xorGateComponent.getOutput(0)]);
        const andGateToCarryOutputWire = new WireComponent(andGateComponent.getSnapPoint("output0"), carryOutputComponent.getSnapPoint("left"), 25, [andGateComponent.getOutput(0)]);

        //Labels
        const inputALabel = new LabelComponent(new Coordinates(inputAComponent.getSnapPoint("left").x + 25, (inputAComponent.getSnapPoint("center").y) - 220), " A ", 120);
        const inputBLabel = new LabelComponent(new Coordinates(inputBComponent.getSnapPoint("left").x + 25, (inputBComponent.getSnapPoint("center").y) - 220), " B ", 120);

        const sumOutputLabel = new LabelComponent(new Coordinates(sumOutputComponent.getSnapPoint("left").x + 25, (sumOutputComponent.getSnapPoint("center").y) - 220), " + ", 120);
        const carryOutputLabel = new LabelComponent(new Coordinates(carryOutputComponent.getSnapPoint("left").x + 25, (carryOutputComponent.getSnapPoint("center").y) - 220), " ↪ ", 120);

        //Add the wires first, so they're in the background
        this.addComponent(inputAToXorGateWire);
        this.addComponent(inputBToXorGateWire);
        this.addComponent(inputAToAndGateWire);
        this.addComponent(inputBToAndGateWire);
        this.addComponent(xorGateToSumOutputWire);
        this.addComponent(andGateToCarryOutputWire);

        //Now add the actual components
        this.addComponent(inputAComponent);
        this.addComponent(inputBComponent);
        this.addComponent(xorGateComponent);
        this.addComponent(andGateComponent);
        this.addComponent(sumOutputComponent);
        this.addComponent(carryOutputComponent);

        //Add labels last
        this.addComponent(inputALabel);
        this.addComponent(inputBLabel);
        this.addComponent(sumOutputLabel);
        this.addComponent(carryOutputLabel);
    }
}