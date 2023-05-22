<script>
    import WireSimulatorSlide from "../general/WireSimulatorSlide.svelte";
    import RegroupingAdditionTable from "../../lib/RegroupingAdditionTable/RegroupingAdditionTable.svelte";

    import { TwoBitAdderSetup } from "../../wires/setups/two-bit-adder";
    import { TwoBitAdderWithCarrySetup } from "../../wires/setups/two-bit-adder-with-carry";
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

<WireSimulatorSlide wireSetup={new TwoBitAdderWithCarrySetup()} notes={`
    Oooh, tohle vypadá mhnoem komplikovaněji! Ale ve skutečnosti není. Tady nalevo nám XOR hradlo a AND hraldo zůstalo beze
    změny. Co ale s tímto novým vstupem přenosu? No nejdříve potřebujeme náš vstupní přenosový bit příčíst k součtu bitů
    A a B. Jestli si pamatujete, tak součet získáme pomocí XOR hradla. Toto XOR hradlo sečte bity A; B, a toto XOR hradlo
    k tomu sočtu ještě přičte vstupní přenosový bit. To je vše potřeba pro ovládání této lampy součtu. A jestli si ještě
    pamatujete, tak tento bit přesunu sem pro výstup získáme pomocí AND hradla. Toto AND hradlo [[ukázat na AND hradlo dole]] 
    nám indikuje přesun pro součet A; B. No a toto AND nové hradlo [[ukázat na AND hradlo nahoře]] nám indikuje přesun pro 
    součet součtu vstupů A; B se vstupním přesunovým. Všimněte si že toto nové AND hradlo má stejné vstupy jako toto nové
    XOR hradlo. Je to prakticky jen předchozí obvod postavený dvakrát. Nejdřív sečteme součet A; B, poté přičteme přenusový
    vstupní bit. Každopádně když nám jakékoliv z těchto AND hradlel indikuje výstupní přesunový bit, tak pomocí tohoto OR 
    hradla rozsvítíme tuto lampu. A můžeme si to vyzkoušet: když jsou všechny vstupní bity 0, tak sčítáme 0 + 0 + 0 a
    ovšem dostaneme také 0 jako výsledek. Když je jeden vstup 1, součet je také 1. Když jsou dva vstupní bity zapnuté,
    tak je jako minule součet, to co napíšeme pod čáru při sčítání pod sebou, znovu 0, ale výstupní přenusový bit je 1.
    No a když zapneme všecnhy tři vstupní bity, sčítáme 1 + 1 + 1 = 3, takže jak součet tak i přesunový bit je také 1.

    Chápete všichni jak tento obvod funguje? Toto je poslední důležitá a zárověn nejkomplikovanější část a pokud nechápete,
    tak můžu zase vyzkoušet převysvětlit.

    [[MALÁ PAUZA]]

    Dobře. Výhoda tohoto obvodu je, že ho můžeme znovu proměnit do samostatné součástky a dokonce napojit sama na sebe!
`}/>