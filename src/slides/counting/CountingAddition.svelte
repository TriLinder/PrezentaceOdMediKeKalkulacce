<script>
    import { _ } from "svelte-i18n";
    import { generateCarryRowString } from "../../lib/RegroupingAdditionTable/utils";

    import RegroupingAdditionTable from "../../lib/RegroupingAdditionTable/RegroupingAdditionTable.svelte";

    function ensureNumber(input) {
        if (!Number.isInteger(input) || Number(input) < 0) {
            return 0;
        }

        return input;
    }

    let firstInput = 0;
    let secondInput = 0;

    $: firstNumber = ensureNumber(firstInput);
    $: secondNumber = ensureNumber(secondInput);
    $: carryRowsAdequate = (    // Make sure the carry row string isn't all zeros in both base 10 and base 2, so we can
                                // demonstrate the addition better
                                Number(generateCarryRowString(Number(firstNumber).toString(10), Number(secondNumber).toString(10), 10)) != 0 &&
                                Number(generateCarryRowString(Number(firstNumber).toString(2), Number(secondNumber).toString(2), 2)) != 0
                            )
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

    <input type="number" placeholder="#1" bind:value={firstInput}> + <input type="number" placeholder="#2" bind:value={secondInput}> = {firstNumber + secondNumber}
    <br> <br>

    <h2>
        {#if carryRowsAdequate}
            🙂👍
        {:else}
            {#if firstNumber == 0 && secondNumber == 0}
                😑
            {:else}
                🙁
            {/if}
        {/if}
    </h2>

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