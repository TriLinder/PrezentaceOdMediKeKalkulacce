<script>
    import WireSimulatorSlide from "../general/WireSimulatorSlide.svelte";
    import RegroupingAdditionTable from "../../lib/RegroupingAdditionTable/RegroupingAdditionTable.svelte";

    import { TwoBitAdderSetup } from "../../wires/setups/two-bit-adder";
</script>

<WireSimulatorSlide wireSetup={new TwoBitAdderSetup()} notes={`
    Obvod pro totu tabulku tedy vypadá takto. Zde nalevo máme vstupy A, B. A napravo máme ukázaný součet, označený znamínkem plus, a 
    přenos, označený šipečkou. Když sčítáme 0 + 0, tak je výsledek ovšem také 0 a žádná lampa nesvítí. Když bude jeden z bitů 1,
    součet bude také 1. A když budou oba bity 1, napíšeme pod čáru jako výsledek 0 podle této lampy a přeneseme 1 bit na další místo
    podle této lampy. Stále jen počítáme pod sebou.
    
    [[MALÁ PAUZA]]
`}/>

<section>
    <RegroupingAdditionTable firstNumber={7} secondNumber={27} numeralSystemBase={2}/>

    <aside class="notes">
        Náš obvod má ale docela nepříjemnou limitaci. Umí totiž sečíst pouze dvě čísla, ale když se podíváme jak se sčítá pod sebou,
        tak občas kvůli přesonu čísel musíme sečíst i tři! 
        
        [[UKAZOVAT PRAVOU STRANU PŘÍKLADU]]

        Ocuď se nám jednička přesunula do tohoto sloupce a proto zde musíme sečíst tři bity 1 + 1 + 1.
        Musíme tedy aktualizovat náš obvod, ať toto dokáže.
    </aside>
</section>