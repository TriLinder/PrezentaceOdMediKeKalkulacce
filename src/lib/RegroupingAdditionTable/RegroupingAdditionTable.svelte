<script lang="ts">
    import RegroupingAdditionTableRow from "./RegroupingAdditionTableRow.svelte";
    
    export let firstNumber: number;
    export let secondNumber: number;
    export let numeralSystemBase = 10;

    $: result = firstNumber + secondNumber;

    $: firstNumberString = firstNumber.toString(numeralSystemBase);
    $: secondNumberString = secondNumber.toString(numeralSystemBase);
    $: resultString = result.toString(numeralSystemBase);
    $: carryRowString = generateCarryRowString(firstNumberString, secondNumberString);

    function generateCarryRowString(firstNumberString: string, secondNumberString: string): string {
        const numberOfDigits = Math.max(firstNumberString.length, secondNumberString.length);
        
        const paddedFirstNumber = firstNumberString.padStart(numberOfDigits, "0");
        const paddedSecondNumber = secondNumberString.padStart(numberOfDigits, "0");

        let carryRowString = "";
        let carry = 0;

        for (let digitIndex = numberOfDigits - 1; digitIndex >= 0; digitIndex--) {
            carryRowString = `${carry}` + carryRowString;

            const digitSum = carry + Number(paddedFirstNumber[digitIndex]) + Number(paddedSecondNumber[digitIndex]);

            if (digitSum >= numeralSystemBase) {
                carry = Math.floor(digitSum / numeralSystemBase);
            }
            else {
                carry = 0;
            }
        }

        return carryRowString;
    }
</script>

<table>
    <RegroupingAdditionTableRow rowClass="carryRow" rowString={carryRowString} rowLength={resultString.length}/>
    <RegroupingAdditionTableRow rowClass="inputRow" rowString={firstNumberString} rowLength={resultString.length}/>
    <RegroupingAdditionTableRow rowClass="inputRow" rowString={secondNumberString} rowLength={resultString.length}/>
    <RegroupingAdditionTableRow rowClass="resultRow" rowString={resultString} rowLength={resultString.length}/>
</table>