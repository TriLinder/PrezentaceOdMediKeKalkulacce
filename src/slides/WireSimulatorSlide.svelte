<script lang="ts">
    import WireSimulator from "../lib/WireSimulator.svelte";

    import { LampSwitchCircuitSetup } from "../wires/setups/lamp-switch-circuit";
    import { LampSwitchSwitchCircuitSetup } from "../wires/setups/lamp-switch-switch-circuit";

    const wireSetup = new LampSwitchSwitchCircuitSetup();
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