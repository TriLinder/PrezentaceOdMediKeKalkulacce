export function generateCarryRowString(firstNumberString: string, secondNumberString: string, numeralSystemBase: number): string {
    const numberOfDigits = Math.max(firstNumberString.length, secondNumberString.length);
    
    const paddedFirstNumber = firstNumberString.padStart(numberOfDigits, "0");
    const paddedSecondNumber = secondNumberString.padStart(numberOfDigits, "0");

    let carryRowString = "";
    let carry = 0;

    for (let digitIndex = numberOfDigits - 1; digitIndex >= 0; digitIndex--) {
        carryRowString = String(carry) + carryRowString;

        const digitSum = carry + Number(paddedFirstNumber[digitIndex]) + Number(paddedSecondNumber[digitIndex]);

        if (digitSum >= numeralSystemBase) {
            carry = Math.floor(digitSum / numeralSystemBase);
        }
        else {
            carry = 0;
        }
    }

    if (carry != 0) {
        carryRowString = String(carry) + carryRowString;
    }

    return carryRowString;
}