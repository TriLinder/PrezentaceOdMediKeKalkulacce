<script>
    import WireSimulatorSlide from "../general/WireSimulatorSlide.svelte";
    import TruthTableSlide from "../general/TruthTableSlide.svelte";
    import H2Slide from "../general/H2Slide.svelte";

    import { LampSwitchCircuitSetup } from "../../wires/setups/lamp-switch-circuit";
    import { AndGateIntroductionSetup } from "../../wires/setups/and-gate-introduction";
    import { NotGateIntroductionSetup } from "../../wires/setups/not-gate-introduction";
    import { BlockNotGateIntroductionSetup } from "../../wires/setups/block-not-gate-introduction";
    import { NandGateIntroductionSetup } from "../../wires/setups/nand-gate-introduction";
    import { OrGateIntroductionSetup } from "../../wires/setups/or-gate-introduction";
</script>

<WireSimulatorSlide wireSetup={new LampSwitchCircuitSetup()} notes={`Zde máme jednoduchý obvod, skládající se z lithium-ionové baterky, 
                                                                    lampy, přepínače a drátů. Jak se dá očekávat, když stiskenme přepínač, 
                                                                    obvod se uzavře a lampa se rozsvítí.`}/>

<WireSimulatorSlide wireSetup={new AndGateIntroductionSetup()} notes={`Podjmě tedy přejít na trochu komplikovanější obvod.
                                                                            Zde musíme zapnout oba přepínače, aby se lampa rozsvítila. 
                                                                            I když tento obvod možná nevypadá příliš zajímavě, tak dokáže
                                                                            zkontrolovat zda dvě podmínky platí (jestli je přepínač A i přepínač B přepnutý) 
                                                                            a podle toho rozsvítit tuto lampu.`}/>

<TruthTableSlide gateName="AND" truthFunction={function(A, B) {return A && B}} notes={`Když zapíšeme vypnutý stav jako číslici 0 a 
                                                                                        zapnutý stav jako číslici 1, dostaneme tuto tabulku,
                                                                                        kde spínače jsou sloupce A a B a výstup je stav lampy.
                                                                                        Protože výstup je zapnutý pouze pokud jsou
                                                                                        vstupy A a B 1, tak je pojmenovaný podle
                                                                                        anglického slovíčka "AND", neboli přeloženě "A".`}/>

<WireSimulatorSlide wireSetup={new NotGateIntroductionSetup()} notes={`Pojdmě se tedy podívat na další takovýto obvod.
                                                                        Tady lampa svítí, dokud nepřepnu přepínač.
                                                                        V ten moment mají elektrony lehčí
                                                                        průchod tudy a tak lampa zhasne.`}/>

<TruthTableSlide gateName="NOT" type={"single"} truthFunction={function(A) {return !A}} notes={`A takto vypadá tabulka pro tento obvod.
                                                                                                Když vstup je 0 tak výstup je 1 a napoak.
                                                                                                Proto se nazývá "NOT", anglicky "NE".`}/>

<H2Slide content={"HRADLA"} notes={`Teď když známe funkce AND a NOT obvodů, můžeme z
                                    nich udělat zjednodušené samostatné součástky,
                                    nazývané hradla, které můžeme použít v našich obvodech..`}/>

<WireSimulatorSlide wireSetup={new BlockNotGateIntroductionSetup()} notes={`.. jako je tento. Jako předtím, toto NOT hradlo invertuje
                                                                            vstup, takže když přepínač zapnu, lampa zhasne a naopak.`}/>

<H2Slide content="ZKOMBINOVAT?" notes={`Zatím tedy známe dvě hradla: AND a NOT. Ale co je zkombinovat?`}/>

<WireSimulatorSlide wireSetup={new NandGateIntroductionSetup()} notes={`Postavily jsme takto tedy NOT hradlo za AND hradlo.
                                                                        Teď lampa svítí, dokud nejsou oba spínače zapnuty,
                                                                        a v ten moment znovu zhasne. Jakmile je jeden
                                                                        spínač zapnutý, tak zase svítí.`}/>

<TruthTableSlide gateName="NAND" truthFunction={function(A, B) {return !(A && B)}} notes={`Takto vypadá tabulka pro toto nové hradlo.
                                                                                            Výstup je 1, pokud je alespoň jeden ze
                                                                                            vstupů 0. Toto hradlo je doslova pojmenováno
                                                                                            NOT-AND, neboli zkráceně NAND. Podjmě dále kombinovat.`}/>

<WireSimulatorSlide wireSetup={new OrGateIntroductionSetup()} notes={`Když postavíme nové NAND hradlo za dvoje NOT hradla, lampa nebude svítit
                                                                        do doby, než se jakýkoliv spínač sepne. Zdůrazňuji rozdíl od AND
                                                                        hradla v tom, že stačí aby jediný spínač byl sepnut. Lampa ale svítí
                                                                        i když jsou sepnuty oba.`}/>

<TruthTableSlide gateName="OR" truthFunction={function(A, B) {return A || B}} notes={`Když sestavíme pro toto nové hradlo tabulku,
                                                                                        bude vypadat takto. Výstup je tedy 0 pouze pokud
                                                                                        jsou oba vstupy také 0. Jelikož stačí aby byl jenom jeden vstup
                                                                                        A NEBO B 1, bylo toto hradlo pojmenováno "OR",
                                                                                        což přeloženo z angličtiny znamená "NEBO".`}/>