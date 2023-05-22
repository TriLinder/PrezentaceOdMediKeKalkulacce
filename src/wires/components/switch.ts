import { Component } from "./component";

import type { Coordinates } from "../types/coordinates";
import type { Size } from "../types/size";
import { Power } from "../types/power";

export class SwitchComponent extends Component {
    public switched: boolean;
    private canvas: HTMLCanvasElement;
    
    private sound: HTMLAudioElement;
    private playSound: boolean;

    private inputs: Power[];

    constructor(position: Coordinates, size: Size, inputs: Power[], playSound = false, switched = false) {
        super();

        this.position = position;
        this.size = size;

        this.playSound = playSound;
        this.switched = switched;

        this.inputs = inputs;
        this.outputs = [new Power()];

        this.canvas = document.createElement("canvas");

        this.prepareSound();
        this.draw();
    }

    private prepareSound() {
        this.sound = new Audio();
        this.sound.src = "/assets/wire-simulator/switch/sound.ogg"
    }

    public click() {
        this.switched = !this.switched;
        
        if (this.playSound) {
            this.sound.currentTime = 0;
            this.sound.play()
        }

        this.draw();
    }

    public update() {
        const output = this.outputs[0];        
        const input = this.inputs[0];

        output.isOn = input.isOn && this.switched;
    }

    private draw() {
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;

        const ctx = this.canvas.getContext("2d")!;

        ctx.fillStyle = this.switched ? "#f9f917" : "#bebebe";

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.beginPath();
        ctx.arc(this.canvas.width / 2, this.canvas.height / 2, (this.canvas.width / 2) - 1, 0, 2 * Math.PI);
        ctx.fill();
    }

    public getBitmap(): HTMLCanvasElement {
        return this.canvas;
    }
}