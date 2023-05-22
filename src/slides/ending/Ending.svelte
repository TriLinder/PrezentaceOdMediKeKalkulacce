<script>
    import H2Slide from "../general/H2Slide.svelte";
    import WireSimulatorSlide from "../general/WireSimulatorSlide.svelte";

    import EndingComputerHistory from "./EndingComputerHistory.svelte";
    import EndingFinal from "./EndingFinal.svelte";

    import { LampSwitchCircuitSetup } from "../../wires/setups/lamp-switch-circuit";
</script>

<EndingComputerHistory/>

<WireSimulatorSlide wireSetup={new LampSwitchCircuitSetup()} notes={`
    A sem jsme se dostali ze žárovky, zdroje a přepínače.
`}/>

<EndingFinal/>