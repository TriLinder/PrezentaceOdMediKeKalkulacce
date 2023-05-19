export class Power {
    public isOn: boolean;

    constructor(isOn = false) {
        this.isOn = isOn;
    }

    public on() {
        this.isOn = true;
    }

    public off() {
        this.isOn = false;
    }
}