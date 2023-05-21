<script>
    import WireSimulatorSlide from "../general/WireSimulatorSlide.svelte";

    import { TwoBitAdderSetup } from "../../wires/setups/two-bit-adder";
</script>

<WireSimulatorSlide wireSetup={new TwoBitAdderSetup()}/>