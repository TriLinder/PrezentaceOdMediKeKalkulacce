<script>
    export let numeralSystemBase = 10;
    export let currentNumber = 0;

    export let previousDigitComponent;

    export function countUp() {
        currentNumber += 1;

        if (currentNumber >= numeralSystemBase) {
            currentNumber = 0;
            previousDigitComponent.countUp();
        }
    }
</script>

<style>
    .box {
        font-family: Segment;
        font-size: 3em;
        color: rgb(0, 200, 0);
        
        padding: 0;
    }

    .displayOutline {
        color: rgba(64, 64, 64, .5);
        position: absolute;
        z-index: -1;
    }

    span {
        user-select: none;
    }
</style>

<div class="box">
    <span class="displayOutline">8</span>
    <span>{currentNumber}</span>
</div>