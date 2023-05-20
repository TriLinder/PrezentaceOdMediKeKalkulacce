<script lang="ts">
    import { onMount } from "svelte";
    import type { WireSetup } from "../wires/setups/wire-setup";

    export let wireSetup: WireSetup;
    let mainCanvas: HTMLCanvasElement;

    onMount(function() {
        setInterval(function() {
            // Update only when the canvas can be interacted with
            if (getComputedStyle(mainCanvas).pointerEvents == "auto") {
                wireSetup.update();
                wireSetup.drawToCanvas(mainCanvas);
            }
        }, 1000 / 30);

        // On click
        mainCanvas.addEventListener("mousedown", function(event) {
            const rect = mainCanvas.getBoundingClientRect();
            
            const viewportX = event.clientX - rect.left;
            const viewportY = event.clientY - rect.top;

            wireSetup.handleViewportClick(viewportX, viewportY, mainCanvas);
        })
    });

</script>

<style>
    canvas {
        width: 125%;
        height: auto;
        object-fit: contain;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
    }
</style>

<!-- Running at a constant resolution to avoid any difficulties with scaling -->
<canvas width="3840" height="2160" bind:this={mainCanvas}>
</canvas>