<script>
    import TwoBitSumTable from "../../lib/TwoBitSumTable.svelte";
</script>

<section data-auto-animate>
    <div data-id="table">
        <TwoBitSumTable/>
    </div>

    <aside class="notes">
        Podjmě se podívat jak se sčítají pouze dvě cifry. Od teď cifrám v binární soustavě budu říkat jinak. Budu jim říkat bity.
        Máme zde bity A a B, které sčítáme. Přenos znamená že si musím jeden bit "držet" a "přenést" na další místo
        při sčítání, jak jsme dělali doposud. A součet je co napíšeme pod čáru dolů jako výsledek. Jak ale postavíme stroj,
        který dokáže takovou tabulku vyplnit?
    </aside>
</section>

<section data-auto-animate>
    <div data-id="table">
        <TwoBitSumTable carryColumnColor={"rgba(128, 128, 128, 0.25)"}/>
    </div>

    <aside class="notes">
        Mnoha z vás už to dost možná vidí, ale když se podíváme specificky na sloupec přenosu,
        tak vypadá jako jedno hradlo, které jsme si dříve představili.
    </aside>
</section>

<section data-auto-animate>
    <h2>AND</h2>

    <div data-id="table">
        <TwoBitSumTable carryColumnColor={"rgba(128, 128, 128, 0.25)"}/>
    </div>

    <aside class="notes">
        ..Je totožný s hradlem AND. Přenos je 1 pokud A a B jsou také 1.
    </aside>
</section>

<section data-auto-animate>
    <div data-id="table">
        <TwoBitSumTable sumColumnColor={"rgba(128, 128, 128, 0.25)"}/>
    </div>

    <aside class="notes">
        A když se podíváme pečlivě na sloupec součtu, je totožný s tím posledním hradlem,
        co jsme si představili..
    </aside>
</section>

<section data-auto-animate>
    <h2>XOR</h2>
    
    <div data-id="table">
        <TwoBitSumTable sumColumnColor={"rgba(128, 128, 128, 0.25)"}/>
    </div>

    <aside class="notes">
        ..s hradlem XOR. Součet je 1 pouze pokud je jeden z bitů A nebo B 1, ale ne oba.
    </aside>
</section>