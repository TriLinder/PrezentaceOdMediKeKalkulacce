<script lang="ts">
    import WireSimulator from "../lib/WireSimulator.svelte";

    import { ExampleWireSetup } from "../wires/setups/example";

    const wireSetup = new ExampleWireSetup();
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
</section>