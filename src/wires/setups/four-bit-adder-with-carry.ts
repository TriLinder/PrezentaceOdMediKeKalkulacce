import { WireSetup } from "./wire-setup";

import { Power } from "../types/power";
import { SwitchComponent } from "../components/switch";
import { TwoBitAdderComponent } from "../components/two-bit-adder";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";
import { LabelComponent } from "../components/label-component";
import { DynamicNumberLabelComponent } from "../components/dynamic-number-label";

import { Coordinates } from "../types/coordinates";
import { Size } from "../types/size";

export class FourBitAdderWithCarrySetup extends WireSetup {
    constructor() {
        super();

        const ioComponentSize = 150;
        const ioComponentGap = 40;
        const ioCategoryGap = 200;

        const adderSize = new Size(400, 500);
        const adderXOffset = 325
        const adderYOffset = -400

        //Inputs
        const firstNumberInputAComponent = new SwitchComponent(new Coordinates(0, 120), new Size(ioComponentSize, ioComponentSize), [new Power(true)]);
        const firstNumberInputBComponent = new SwitchComponent(new Coordinates(0, firstNumberInputAComponent.getSnapPoint("bottom").y + ioComponentGap), new Size(ioComponentSize, ioComponentSize), [new Power(true)]);
        const firstNumberInputCComponent = new SwitchComponent(new Coordinates(0, firstNumberInputBComponent.getSnapPoint("bottom").y + ioComponentGap), new Size(ioComponentSize, ioComponentSize), [new Power(true)]);
        const firstNumberInputDComponent = new SwitchComponent(new Coordinates(0, firstNumberInputCComponent.getSnapPoint("bottom").y + ioComponentGap), new Size(ioComponentSize, ioComponentSize), [new Power(true)]);
        
        const secondNumberInputAComponent = new SwitchComponent(new Coordinates(0, firstNumberInputDComponent.getSnapPoint("bottom").y + ioCategoryGap), new Size(ioComponentSize, ioComponentSize), [new Power(true)]);
        const secondNumberInputBComponent = new SwitchComponent(new Coordinates(0, secondNumberInputAComponent.getSnapPoint("bottom").y + ioComponentGap), new Size(ioComponentSize, ioComponentSize), [new Power(true)]);
        const secondNumberInputCComponent = new SwitchComponent(new Coordinates(0, secondNumberInputBComponent.getSnapPoint("bottom").y + ioComponentGap), new Size(ioComponentSize, ioComponentSize), [new Power(true)]);
        const secondNumberInputDComponent = new SwitchComponent(new Coordinates(0, secondNumberInputCComponent.getSnapPoint("bottom").y + ioComponentGap), new Size(ioComponentSize, ioComponentSize), [new Power(true)]);

        const carryInputComponent = new SwitchComponent(new Coordinates(0, secondNumberInputDComponent.getSnapPoint("bottom").y + ioCategoryGap), new Size(ioComponentSize, ioComponentSize), [new Power(true)]);

        //Adders
        const firstAdderComponent = new TwoBitAdderComponent(new Coordinates(800, 1200), adderSize, [firstNumberInputDComponent.getOutput(0), secondNumberInputDComponent.getOutput(0), carryInputComponent.getOutput(0)]);
        const secondAdderComponent = new TwoBitAdderComponent(new Coordinates(firstAdderComponent.getSnapPoint("output0").x + adderXOffset, firstAdderComponent.getSnapPoint("output0").y + adderYOffset), adderSize, [firstNumberInputCComponent.getOutput(0), secondNumberInputCComponent.getOutput(0), firstAdderComponent.getOutput(1)]);
        const thirdAdderComponent = new TwoBitAdderComponent(new Coordinates(secondAdderComponent.getSnapPoint("output0").x + adderXOffset, secondAdderComponent.getSnapPoint("output0").y + adderYOffset), adderSize, [firstNumberInputBComponent.getOutput(0), secondNumberInputBComponent.getOutput(0), secondAdderComponent.getOutput(1)]);
        const fourthAdderComponent = new TwoBitAdderComponent(new Coordinates(thirdAdderComponent.getSnapPoint("output0").x + adderXOffset, thirdAdderComponent.getSnapPoint("output0").y + adderYOffset), adderSize, [firstNumberInputAComponent.getOutput(0), secondNumberInputAComponent.getOutput(0), thirdAdderComponent.getOutput(1)]);

        //Outputs
        const sumOutputAComponent = new LampComponent(new Coordinates(3840 - ioComponentSize, 500), new Size(ioComponentSize, ioComponentSize), [fourthAdderComponent.getOutput(0)]);
        const sumOutputBComponent = new LampComponent(new Coordinates(3840 - ioComponentSize, sumOutputAComponent.getSnapPoint("bottom").y + ioComponentGap), new Size(ioComponentSize, ioComponentSize), [thirdAdderComponent.getOutput(0)]);
        const sumOutputCComponent = new LampComponent(new Coordinates(3840 - ioComponentSize, sumOutputBComponent.getSnapPoint("bottom").y + ioComponentGap), new Size(ioComponentSize, ioComponentSize), [secondAdderComponent.getOutput(0)]);
        const sumOutputDComponent = new LampComponent(new Coordinates(3840 - ioComponentSize, sumOutputCComponent.getSnapPoint("bottom").y + ioComponentGap), new Size(ioComponentSize, ioComponentSize), [firstAdderComponent.getOutput(0)]);

        const carryOutputComponent = new LampComponent(new Coordinates(3840 - ioComponentSize, sumOutputDComponent.getSnapPoint("bottom").y + ioCategoryGap), new Size(ioComponentSize, ioComponentSize), [thirdAdderComponent.getOutput(1)]);

        //Labels
        const firstNumberLabel = new DynamicNumberLabelComponent(new Coordinates(firstNumberInputAComponent.getSnapPoint("left").x, (firstNumberInputAComponent.getSnapPoint("center").y) - 190), 120, [firstNumberInputAComponent.getOutput(0), firstNumberInputBComponent.getOutput(0), firstNumberInputCComponent.getOutput(0), firstNumberInputDComponent.getOutput(0)]);
        const secondNumberLabel = new DynamicNumberLabelComponent(new Coordinates(secondNumberInputAComponent.getSnapPoint("left").x, (secondNumberInputAComponent.getSnapPoint("center").y) - 190), 120, [secondNumberInputAComponent.getOutput(0), secondNumberInputBComponent.getOutput(0), secondNumberInputCComponent.getOutput(0), secondNumberInputDComponent.getOutput(0)]);
        const carryInputLabel = new LabelComponent(new Coordinates(carryInputComponent.getSnapPoint("left").x, (carryInputComponent.getSnapPoint("center").y) - 190), " ↪ ", 120);

        const sumNumberLabel = new DynamicNumberLabelComponent(new Coordinates(sumOutputAComponent.getSnapPoint("left").x, (sumOutputAComponent.getSnapPoint("center").y) - 190), 120, [fourthAdderComponent.getOutput(0), thirdAdderComponent.getOutput(0), secondAdderComponent.getOutput(0), firstAdderComponent.getOutput(0)]);
        const carryOutputLabel = new LabelComponent(new Coordinates(carryOutputComponent.getSnapPoint("left").x, (carryOutputComponent.getSnapPoint("center").y) - 190), " ↪ ", 120);

        this.addComponent(firstNumberInputAComponent);
        this.addComponent(firstNumberInputBComponent);
        this.addComponent(firstNumberInputCComponent);
        this.addComponent(firstNumberInputDComponent);
        this.addComponent(secondNumberInputAComponent);
        this.addComponent(secondNumberInputBComponent);
        this.addComponent(secondNumberInputCComponent);
        this.addComponent(secondNumberInputDComponent);
        this.addComponent(carryInputComponent);
        this.addComponent(sumOutputAComponent);
        this.addComponent(sumOutputBComponent);
        this.addComponent(sumOutputCComponent);
        this.addComponent(sumOutputDComponent);
        this.addComponent(carryOutputComponent);
        this.addComponent(firstAdderComponent);
        this.addComponent(secondAdderComponent);
        this.addComponent(thirdAdderComponent);
        this.addComponent(fourthAdderComponent);

        this.addComponent(firstNumberLabel);
        this.addComponent(secondNumberLabel);
        this.addComponent(carryInputLabel);
        this.addComponent(sumNumberLabel);
        this.addComponent(carryOutputLabel);
    }
}