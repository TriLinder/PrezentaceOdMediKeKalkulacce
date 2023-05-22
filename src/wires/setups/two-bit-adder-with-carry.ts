import { WireSetup } from "./wire-setup";

import { Power } from "../types/power";
import { OrGateComponent } from "../components/or-gate";
import { XorGateComponent } from "../components/xor-gate";
import { AndGateComponent } from "../components/and-gate";
import { SwitchComponent } from "../components/switch";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";
import { LabelComponent } from "../components/label-component";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class TwoBitAdderWithCarrySetup extends WireSetup {
    constructor() {
        super();

        //Actual components
        const inputAComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 - 250), new Size(200, 200), [new Power(true)]);
        const inputBComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 + 250 / 2), new Size(200, 200), [new Power(true)]);
        const carryInputComponent = new SwitchComponent(new Coordinates(0, 2160 / 2 + 250 / 2 + 375), new Size(200, 200), [new Power(true)]);

        const firstXorGateComponent = new XorGateComponent(new Coordinates(1000, 2160 / 2 - 400), new Size(400, 200), [inputAComponent.getOutput(0), inputBComponent.getOutput(0)]);
        const firstAndGateComponent = new AndGateComponent(new Coordinates(1000, 2160 / 2 + 600), new Size(400, 200), [inputAComponent.getOutput(0), inputBComponent.getOutput(0)]);

        const secondXorGateComponent = new XorGateComponent(new Coordinates(2000, 2160 / 2 - 500), new Size(400, 200), [firstXorGateComponent.getOutput(0), carryInputComponent.getOutput(0)]);
        const secondAndGateComponent = new AndGateComponent(new Coordinates(1800, 2160 / 2), new Size(400, 200), [firstXorGateComponent.getOutput(0), carryInputComponent.getOutput(0)]);

        const orGateComponent = new OrGateComponent(new Coordinates(2500, 2160 / 2 + 570), new Size(400, 200), [firstAndGateComponent.getOutput(0), secondAndGateComponent.getOutput(0)]);

        const sumOutputComponent = new LampComponent(new Coordinates(3840 - 250, 2160 / 2 - 250), new Size(200, 200), [secondXorGateComponent.getOutput(0)]);
        const carryOutputComponent = new LampComponent(new Coordinates(3840 - 250, 2160 / 2 + 250 / 2), new Size(200, 200), [orGateComponent.getOutput(0)]);

        //Wires
        const inputAToFirstXorGateWire = new WireComponent(inputAComponent.getSnapPoint("center"), firstXorGateComponent.getSnapPoint("input0"), 25, [inputAComponent.getOutput(0)]);
        const inputBToFirstXorGateWire = new WireComponent(inputBComponent.getSnapPoint("center"), firstXorGateComponent.getSnapPoint("input1"), 25, [inputBComponent.getOutput(0)]);

        const inputAToFirstAndGateWire = new WireComponent(inputAComponent.getSnapPoint("center"), firstAndGateComponent.getSnapPoint("input0"), 25, [inputAComponent.getOutput(0)]);
        const inputBToFirstAndGateWire = new WireComponent(inputBComponent.getSnapPoint("center"), firstAndGateComponent.getSnapPoint("input1"), 25, [inputBComponent.getOutput(0)]);

        const firstXorGateToSecondXorGateWire = new WireComponent(firstXorGateComponent.getSnapPoint("output0"), secondXorGateComponent.getSnapPoint("input0"), 25, [firstXorGateComponent.getOutput(0)]);
        const firstAndGateToOrGateWire = new WireComponent(firstAndGateComponent.getSnapPoint("output0"), orGateComponent.getSnapPoint("input1"), 25, [firstAndGateComponent.getOutput(0)]);

        const carryInputToSeondXorGateWire =  new WireComponent(carryInputComponent.getSnapPoint("center"), secondXorGateComponent.getSnapPoint("input1"), 25, [carryInputComponent.getOutput(0)]);
        const carryInputToSeondAndGateWire =  new WireComponent(carryInputComponent.getSnapPoint("center"), secondAndGateComponent.getSnapPoint("input1"), 25, [carryInputComponent.getOutput(0)]);

        const firstXorGateToSecondAndGateWire = new WireComponent(firstXorGateComponent.getSnapPoint("output0"), secondAndGateComponent.getSnapPoint("input0"), 25, [firstXorGateComponent.getOutput(0)]);
        const secondAndGateToOrGateWire = new WireComponent(secondAndGateComponent.getSnapPoint("output0"), orGateComponent.getSnapPoint("input0"), 25, [secondAndGateComponent.getOutput(0)]);

        const secondXorGateToSumOutputWire = new WireComponent(secondXorGateComponent.getSnapPoint("output0"), sumOutputComponent.getSnapPoint("left"), 25, [secondXorGateComponent.getOutput(0)]);
        const orGateToToCarryOutputWire = new WireComponent(orGateComponent.getSnapPoint("output0"), carryOutputComponent.getSnapPoint("bottom"), 25, [orGateComponent.getOutput(0)]);

        //Labels
        const inputALabel = new LabelComponent(new Coordinates(inputAComponent.getSnapPoint("left").x + 25, (inputAComponent.getSnapPoint("center").y) - 220), " A ", 120);
        const inputBLabel = new LabelComponent(new Coordinates(inputBComponent.getSnapPoint("left").x + 25, (inputBComponent.getSnapPoint("center").y) - 220), " B ", 120);
        const carryInputLabel = new LabelComponent(new Coordinates(carryInputComponent.getSnapPoint("left").x + 25, (carryInputComponent.getSnapPoint("center").y) - 220), " ↪ ", 120);

        const sumOutputLabel = new LabelComponent(new Coordinates(sumOutputComponent.getSnapPoint("left").x + 25, (sumOutputComponent.getSnapPoint("center").y) - 220), " + ", 120);
        const carryOutputLabel = new LabelComponent(new Coordinates(carryOutputComponent.getSnapPoint("left").x + 25, (carryOutputComponent.getSnapPoint("center").y) - 220), " ↪ ", 120);

        //Add the wires first, so they're in the background
        this.addComponent(inputAToFirstXorGateWire);
        this.addComponent(inputBToFirstXorGateWire);
        this.addComponent(inputAToFirstAndGateWire);
        this.addComponent(inputBToFirstAndGateWire);
        this.addComponent(firstXorGateToSecondXorGateWire);
        this.addComponent(firstAndGateToOrGateWire);
        this.addComponent(carryInputToSeondXorGateWire);
        this.addComponent(carryInputToSeondAndGateWire);
        this.addComponent(firstXorGateToSecondAndGateWire);
        this.addComponent(secondAndGateToOrGateWire);
        this.addComponent(secondXorGateToSumOutputWire);
        this.addComponent(orGateToToCarryOutputWire);

        //Now add the actual components
        this.addComponent(inputAComponent);
        this.addComponent(inputBComponent);
        this.addComponent(carryInputComponent);
        this.addComponent(firstXorGateComponent);
        this.addComponent(firstAndGateComponent);
        this.addComponent(secondXorGateComponent);
        this.addComponent(secondAndGateComponent);
        this.addComponent(orGateComponent);
        this.addComponent(sumOutputComponent);
        this.addComponent(carryOutputComponent);

        //Add labels last
        this.addComponent(inputALabel);
        this.addComponent(inputBLabel);
        this.addComponent(carryInputLabel);
        this.addComponent(sumOutputLabel);
        this.addComponent(carryOutputLabel);
    }
}