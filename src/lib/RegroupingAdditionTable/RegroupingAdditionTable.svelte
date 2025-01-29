<script lang="ts">
    import { generateCarryRowString } from "./utils";
    import RegroupingAdditionTableRow from "./RegroupingAdditionTableRow.svelte";
    
    export let firstNumber: number;
    export let secondNumber: number;
    export let numeralSystemBase = 10;

    $: result = firstNumber + secondNumber;

    $: firstNumberString = firstNumber.toString(numeralSystemBase);
    $: secondNumberString = secondNumber.toString(numeralSystemBase);
    $: resultString = result.toString(numeralSystemBase);
    $: carryRowString = generateCarryRowString(firstNumberString, secondNumberString, numeralSystemBase);
</script>

<table>
    <RegroupingAdditionTableRow rowClass="carryRow" rowString={carryRowString} rowLength={resultString.length}/>
    <RegroupingAdditionTableRow rowClass="inputRow" rowString={firstNumberString} rowLength={resultString.length}/>
    <RegroupingAdditionTableRow rowClass="inputRow" rowString={secondNumberString} rowLength={resultString.length}/>
    <RegroupingAdditionTableRow rowClass="resultRow" rowString={resultString} rowLength={resultString.length}/>
</table>