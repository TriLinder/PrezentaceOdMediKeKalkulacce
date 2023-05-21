<script>
    import CounterDigit from "./CounterDigit.svelte";

    export let numeralSystemBase = 10;
    export let numberOfDigits = 4;
    export let countInterval = 0;
    export let shouldPlaySound = false;

    let digitComponents = [];
    let counterDiv;

    let audio = new Audio();
    audio.src = "/assets/counter/beep.ogg";

    export function countUp() {
        if (getComputedStyle(counterDiv).pointerEvents == "auto") {
            if (shouldPlaySound) {
                audio.currentTime = 0;
                audio.play();
            }
            
            digitComponents[digitComponents.length - 1].countUp();
        }
    }

    window.addEventListener("keydown", function(key) {
        if (key.key == "q") {
            countUp();
        }
    });

    if (countInterval >= 1) {
        setInterval(countUp, countInterval);
    }
</script>

<style>
    .digits {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        
        margin: 0;
        padding: 0;
    }
</style>

<div class="counter" bind:this={counterDiv}>
    <div class="digits">
        {#each Array(numberOfDigits) as _, i}
            <CounterDigit numeralSystemBase={numeralSystemBase} previousDigitComponent={digitComponents[i - 1]} bind:this={digitComponents[i]}/>
        {/each}
    </div>
</div>