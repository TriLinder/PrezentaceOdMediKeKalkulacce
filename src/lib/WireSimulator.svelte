<script lang="ts">
    import { onMount } from "svelte";

    let mainCanvas: HTMLCanvasElement;

    onMount(function() {
        const ctx = mainCanvas.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
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