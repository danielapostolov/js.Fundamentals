function addAndSubtract(num1, num2, num3) {
    let result1 = add(num1, num2);
    let result2 = subtract(result1, num3);
    console.log(result2);

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }
}
addAndSubtract(1, 2, 3)