<script>
    import WireSimulatorSlide from "../general/WireSimulatorSlide.svelte";
    import AndGateTruthTableSlide from "./AndGateTruthTableSlide.svelte";

    import { LampSwitchCircuitSetup } from "../../wires/setups/lamp-switch-circuit";
    import { LampSwitchSwitchCircuitSetup } from "../../wires/setups/lamp-switch-switch-circuit";
</script>

<WireSimulatorSlide wireSetup={new LampSwitchCircuitSetup()} notes={`Zde máme jednoduchý obvod, skládající se z lithium-ionové baterky, 
                                                                    lampy, přepínače a drátů. Jak se dá očekávat, když stiskenme přepínač, 
                                                                    obvod se uzavře a lampa se rozsvítí.`}/>

<WireSimulatorSlide wireSetup={new LampSwitchSwitchCircuitSetup()} notes={`Podjmě tedy přejít na trochu komplikovanější obvod.
                                                                            Zde musíme zapnout oba přepínače, aby se lampa rozsvítila. 
                                                                            I když tento obvod možná nevypadá příliš zajímavě, tak dokáže
                                                                            zkontrolovat zda dvě podmínky platí (jestli je přepínač A i přepínač B přepnutý) 
                                                                            a podle toho rozsvítit tuto lampu.`}/>

<AndGateTruthTableSlide/>