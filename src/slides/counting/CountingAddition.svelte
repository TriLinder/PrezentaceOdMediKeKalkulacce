<script>
    import { _ } from "svelte-i18n";

    import RegroupingAdditionTable from "../../lib/RegroupingAdditionTable/RegroupingAdditionTable.svelte";

    function ensureNumber(input) {
        if (!Number.isInteger(input)) {
            return 0;
        }

        return input;
    }

    let firstInput = 0;
    let secondInput = 0;

    $: firstNumber = ensureNumber(firstInput);
    $: secondNumber = ensureNumber(secondInput);
</script>

<style>
    input {
        color: black;
        text-align: right;
        width: 15%;
    }
</style>

<section>
    <h2>{$_("numberInputTitle")}</h2>

    <input type="number" placeholder="#1" bind:value={firstInput}> + <input type="number" placeholder="#2" bind:value={secondInput}>

    <aside class="notes">
        Takže, kdo z Vás mi chce dát dvě celá čísla tak řekněmě zhruba od 15 do 40? Nic příliš malýho,
        ale taky ne nic příliš velkýho.
    </aside>
</section>

<section>
    <RegroupingAdditionTable firstNumber={firstNumber} secondNumber={secondNumber} numeralSystemBase={10}/>

    <aside class="notes">
        Když chceme sečíst dvě, hlavně větší, čísla jednoduše, tak je sečteme takto pod sebou. Jak se sčítá
        pod bychom měli všichni znát, ale i tak si to rychle projdeme. [[POPSAT PROCES SČÍTÁNÍ]] 
    </aside>
</section>

<section>
    <RegroupingAdditionTable firstNumber={firstNumber} secondNumber={secondNumber} numeralSystemBase={2}/>

    <aside class="notes">
        Stejný proces bude fungovat i ve dvojkové soustavě, ale znovu si musíme pamatovat, že máme pouze dvě číslice.
        [[POPSAT PROCES SČÍTÁNÍ]]
        Toto jsou stejné čísla jako u předchozího příkladu, jen ve dvojkové soustavě.
        Chápete všichni jak toto sčítání funguje? Bude to ovšem nadále důležité a můžu to teď klidně převysvětlit.
    </aside>
</section>