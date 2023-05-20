<script lang="ts">
    import WireSimulator from "../../lib/WireSimulator.svelte";
    import type { WireSetup } from "src/wires/setups/wire-setup";

    export let wireSetup: WireSetup;
    export let notes = "";
</script>

<style>
    section {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

<section>
    <WireSimulator wireSetup={wireSetup} />

    <aside class="notes">
        {notes}
    </aside>
</section>