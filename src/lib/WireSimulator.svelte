<script lang="ts">
    import { onMount } from "svelte";
    import type { WireSetup } from "../wires/setups/wire-setup";

    export let wireSetup: WireSetup;
    let mainCanvas: HTMLCanvasElement;

    onMount(function() {
        wireSetup.drawToCanvas(mainCanvas);
    });

</script>

<style>
    canvas {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>

<!-- Running at a constant resolution to avoid any difficulties with scaling -->
<canvas width="3840" height="2160" bind:this={mainCanvas}>
</canvas>