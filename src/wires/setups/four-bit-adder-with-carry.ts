import { WireSetup } from "./wire-setup";

import { Power } from "../types/power";
import { SwitchComponent } from "../components/switch";
import { TwoBitAdderComponent } from "../components/two-bit-adder";
import { LampComponent } from "../components/lamp";
import { WireComponent } from "../components/wire";
import { LabelComponent } from "../components/label";
import { DynamicNumberLabelComponent } from "../components/dynamic-number-label";

import { firstNumberWireColor, secondNumberWireColor, carryWireColor, outputWireColor } from "./wire-color-palette";

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

        const secondNumberToAdderCableCornerOffsetX = -300;
        const secondNumberToAdderCableCornerOffsetY = -300;

        const adderToSumOutputCableCornerOffsetX = 300;
        const adderToSumOutputCableCornerOffsetY = 300;

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

        const carryOutputComponent = new LampComponent(new Coordinates(3840 - ioComponentSize, sumOutputDComponent.getSnapPoint("bottom").y + ioCategoryGap), new Size(ioComponentSize, ioComponentSize), [fourthAdderComponent.getOutput(1)]);

        //Wires
        const carryInputToFirstAdderWire = new WireComponent(carryInputComponent.getSnapPoint("center"), firstAdderComponent.getSnapPoint("input2"), 25, [carryInputComponent.getOutput(0)], carryWireColor);
        const firstAddderToSecondAdderWire = new WireComponent(firstAdderComponent.getSnapPoint("output1"), secondAdderComponent.getSnapPoint("input2"), 25, [firstAdderComponent.getOutput(1)], carryWireColor);
        const secondAddderToThirdAdderWire = new WireComponent(secondAdderComponent.getSnapPoint("output1"), thirdAdderComponent.getSnapPoint("input2"), 25, [secondAdderComponent.getOutput(1)], carryWireColor);
        const thirdAddderToFourthAdderWire = new WireComponent(thirdAdderComponent.getSnapPoint("output1"), fourthAdderComponent.getSnapPoint("input2"), 25, [thirdAdderComponent.getOutput(1)], carryWireColor);
        const fourthAdderToCarryOutputWire = new WireComponent(fourthAdderComponent.getSnapPoint("output1"), carryOutputComponent.getSnapPoint("left"), 25, [fourthAdderComponent.getOutput(1)], carryWireColor);

        const firstNumberInputDToFirstAdderWire = new WireComponent(firstNumberInputDComponent.getSnapPoint("center"), firstAdderComponent.getSnapPoint("input0"), 25, [firstNumberInputDComponent.getOutput(0)], firstNumberWireColor);
        const firstNumberInputCToSecondAdderWire = new WireComponent(firstNumberInputCComponent.getSnapPoint("center"), secondAdderComponent.getSnapPoint("input0"), 25, [firstNumberInputCComponent.getOutput(0)], firstNumberWireColor);
        const firstNumberInputBToThirdAdderWire = new WireComponent(firstNumberInputBComponent.getSnapPoint("center"), thirdAdderComponent.getSnapPoint("input0"), 25, [firstNumberInputBComponent.getOutput(0)], firstNumberWireColor);
        const firstNumberInputAToFourthAdderWire = new WireComponent(firstNumberInputAComponent.getSnapPoint("center"), fourthAdderComponent.getSnapPoint("input0"), 25, [firstNumberInputAComponent.getOutput(0)], firstNumberWireColor);
        
        const secondNumberInputDToFirstAdderWire1 = new WireComponent(secondNumberInputDComponent.getSnapPoint("center"), new Coordinates(firstAdderComponent.getSnapPoint("input1").x + 0.5 * secondNumberToAdderCableCornerOffsetX, firstAdderComponent.getSnapPoint("input1").y + 0.5 * secondNumberToAdderCableCornerOffsetY), 25, [secondNumberInputDComponent.getOutput(0)], secondNumberWireColor);
        const secondNumberInputDToFirstAdderWire2 = new WireComponent(secondNumberInputDToFirstAdderWire1.getSnapPoint("end"), firstAdderComponent.getSnapPoint("input1"), 25, [secondNumberInputDComponent.getOutput(0)], secondNumberWireColor);
        
        const secondNumberInputCToSecondAdderWire1 = new WireComponent(secondNumberInputCComponent.getSnapPoint("center"), new Coordinates(secondAdderComponent.getSnapPoint("input1").x + secondNumberToAdderCableCornerOffsetX, secondAdderComponent.getSnapPoint("input1").y + secondNumberToAdderCableCornerOffsetY), 25, [secondNumberInputCComponent.getOutput(0)], secondNumberWireColor);
        const secondNumberInputCToSecondAdderWire2 = new WireComponent(secondNumberInputCToSecondAdderWire1.getSnapPoint("end"), secondAdderComponent.getSnapPoint("input1"), 25, [secondNumberInputCComponent.getOutput(0)], secondNumberWireColor);

        const secondNumberInputBToThirdAdderWire1 = new WireComponent(secondNumberInputBComponent.getSnapPoint("center"), new Coordinates(thirdAdderComponent.getSnapPoint("input1").x + 1.5 * secondNumberToAdderCableCornerOffsetX, thirdAdderComponent.getSnapPoint("input1").y + 2.25 * secondNumberToAdderCableCornerOffsetY), 25, [secondNumberInputBComponent.getOutput(0)], secondNumberWireColor);
        const secondNumberInputBToThirdAdderWire2 = new WireComponent(secondNumberInputBToThirdAdderWire1.getSnapPoint("end"), thirdAdderComponent.getSnapPoint("input1"), 25, [secondNumberInputBComponent.getOutput(0)], secondNumberWireColor);

        const secondNumberInputAToFourthAdderWire1 = new WireComponent(secondNumberInputAComponent.getSnapPoint("center"), new Coordinates(fourthAdderComponent.getSnapPoint("input1").x + 2.5 * secondNumberToAdderCableCornerOffsetX, fourthAdderComponent.getSnapPoint("input1").y + 2.5 * secondNumberToAdderCableCornerOffsetY), 25, [secondNumberInputAComponent.getOutput(0)], secondNumberWireColor);
        const secondNumberInputAToFourthAdderWire2 = new WireComponent(secondNumberInputAToFourthAdderWire1.getSnapPoint("end"), fourthAdderComponent.getSnapPoint("input1"), 25, [secondNumberInputAComponent.getOutput(0)], secondNumberWireColor);

        const firstAdderToSumOutputDWire1 = new WireComponent(firstAdderComponent.getSnapPoint("output0"), new Coordinates(firstAdderComponent.getSnapPoint("output0").x + 2.5 * adderToSumOutputCableCornerOffsetX, firstAdderComponent.getSnapPoint("output0").y + 2.5 * adderToSumOutputCableCornerOffsetY), 25, [firstAdderComponent.getOutput(0)], outputWireColor);
        const firstAdderToSumOutputDWire2 = new WireComponent(firstAdderToSumOutputDWire1.getSnapPoint("end"), sumOutputDComponent.getSnapPoint("left"), 25, [firstAdderComponent.getOutput(0)], outputWireColor);

        const secondAdderToSumOutputCWire1 = new WireComponent(secondAdderComponent.getSnapPoint("output0"), new Coordinates(secondAdderComponent.getSnapPoint("output0").x + 2 * adderToSumOutputCableCornerOffsetX, secondAdderComponent.getSnapPoint("output0").y + 2 * adderToSumOutputCableCornerOffsetY), 25, [secondAdderComponent.getOutput(0)], outputWireColor);
        const secondAdderToSumOutputCWire2 = new WireComponent(secondAdderToSumOutputCWire1.getSnapPoint("end"), sumOutputCComponent.getSnapPoint("left"), 25, [secondAdderComponent.getOutput(0)], outputWireColor);

        const thirdAdderToSumOutputBWire1 = new WireComponent(thirdAdderComponent.getSnapPoint("output0"), new Coordinates(thirdAdderComponent.getSnapPoint("output0").x + 1.5 * adderToSumOutputCableCornerOffsetX, thirdAdderComponent.getSnapPoint("output0").y + 1.5 * adderToSumOutputCableCornerOffsetY), 25, [thirdAdderComponent.getOutput(0)], outputWireColor);
        const thirdAdderToSumOutputBWire2 = new WireComponent(thirdAdderToSumOutputBWire1.getSnapPoint("end"), sumOutputBComponent.getSnapPoint("left"), 25, [thirdAdderComponent.getOutput(0)], outputWireColor);

        const fourthAdderToSumOutputAWire1 = new WireComponent(fourthAdderComponent.getSnapPoint("output0"), new Coordinates(fourthAdderComponent.getSnapPoint("output0").x + 0.5 * adderToSumOutputCableCornerOffsetX, fourthAdderComponent.getSnapPoint("output0").y + 0.5 * adderToSumOutputCableCornerOffsetY), 25, [fourthAdderComponent.getOutput(0)], outputWireColor);
        const fourthAdderToSumOutputAWire2 = new WireComponent(fourthAdderToSumOutputAWire1.getSnapPoint("end"), sumOutputAComponent.getSnapPoint("left"), 25, [fourthAdderComponent.getOutput(0)], outputWireColor);

        //Labels
        const firstNumberLabel = new DynamicNumberLabelComponent(new Coordinates(firstNumberInputAComponent.getSnapPoint("left").x, (firstNumberInputAComponent.getSnapPoint("center").y) - 190), 120, [firstNumberInputAComponent.getOutput(0), firstNumberInputBComponent.getOutput(0), firstNumberInputCComponent.getOutput(0), firstNumberInputDComponent.getOutput(0)]);
        const secondNumberLabel = new DynamicNumberLabelComponent(new Coordinates(secondNumberInputAComponent.getSnapPoint("left").x, (secondNumberInputAComponent.getSnapPoint("center").y) - 190), 120, [secondNumberInputAComponent.getOutput(0), secondNumberInputBComponent.getOutput(0), secondNumberInputCComponent.getOutput(0), secondNumberInputDComponent.getOutput(0)]);
        const carryInputLabel = new LabelComponent(new Coordinates(carryInputComponent.getSnapPoint("left").x, (carryInputComponent.getSnapPoint("center").y) - 190), " ↪ ", 120);

        const sumNumberLabel = new DynamicNumberLabelComponent(new Coordinates(sumOutputAComponent.getSnapPoint("left").x, (sumOutputAComponent.getSnapPoint("center").y) - 190), 120, [fourthAdderComponent.getOutput(0), thirdAdderComponent.getOutput(0), secondAdderComponent.getOutput(0), firstAdderComponent.getOutput(0)]);
        const carryOutputLabel = new LabelComponent(new Coordinates(carryOutputComponent.getSnapPoint("left").x, (carryOutputComponent.getSnapPoint("center").y) - 190), " ↪ ", 120);

        //Add the wires first, so they're in the background
        this.addComponent(carryInputToFirstAdderWire);
        this.addComponent(firstAddderToSecondAdderWire);
        this.addComponent(secondAddderToThirdAdderWire);
        this.addComponent(thirdAddderToFourthAdderWire);
        this.addComponent(fourthAdderToCarryOutputWire);
        this.addComponent(firstNumberInputDToFirstAdderWire);
        this.addComponent(firstNumberInputCToSecondAdderWire);
        this.addComponent(firstNumberInputBToThirdAdderWire);
        this.addComponent(firstNumberInputAToFourthAdderWire);
        this.addComponent(secondNumberInputDToFirstAdderWire1);
        this.addComponent(secondNumberInputDToFirstAdderWire2);
        this.addComponent(secondNumberInputCToSecondAdderWire1);
        this.addComponent(secondNumberInputCToSecondAdderWire2);
        this.addComponent(secondNumberInputBToThirdAdderWire1);
        this.addComponent(secondNumberInputBToThirdAdderWire2);
        this.addComponent(secondNumberInputAToFourthAdderWire1);
        this.addComponent(secondNumberInputAToFourthAdderWire2);
        this.addComponent(firstAdderToSumOutputDWire1);
        this.addComponent(firstAdderToSumOutputDWire2);
        this.addComponent(secondAdderToSumOutputCWire1);
        this.addComponent(secondAdderToSumOutputCWire2);
        this.addComponent(thirdAdderToSumOutputBWire1);
        this.addComponent(thirdAdderToSumOutputBWire2);
        this.addComponent(fourthAdderToSumOutputAWire1);
        this.addComponent(fourthAdderToSumOutputAWire2);

        //Now add the actual components
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

        //Add labels last
        this.addComponent(firstNumberLabel);
        this.addComponent(secondNumberLabel);
        this.addComponent(carryInputLabel);
        this.addComponent(sumNumberLabel);
        this.addComponent(carryOutputLabel);
    }
}