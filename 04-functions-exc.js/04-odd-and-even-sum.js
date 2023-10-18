function oddAndEvenSum(num) {
    let numAsStr = num.toString();

    let [evenSum, oddSum] = calcEvenAndOddSum(numAsStr);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function calcEvenAndOddSum(str) {
        let evenSum = 0;
        let oddSum = 0;

        for (let char of str) {
            let charAsNum = Number(char);

            if (charAsNum % 2 == 0) {
                evenSum += charAsNum;
            } else {
                oddSum += charAsNum;
            }
        }
        return [evenSum, oddSum];
    }

}
oddAndEvenSum(1000435);

