function palindromeIntegers(arr) {
    for (let curNum of arr) {
        let isPalindrome = checkIsPalindrome(curNum);
        console.log(isPalindrome);
    }

    function checkIsPalindrome(num) {
        let numAsStr = String(num);
        let reversedNumStr = '';

        for (let i = numAsStr.length - 1; i >= 0; i--) {
            let curChar = numAsStr[i];
            reversedNumStr += curChar;
        }

        let isPalindrome = numAsStr == reversedNumStr;
        return isPalindrome;
    }
}

// for (let num of arr) {
//     let numAsStr = String(num);
//     let reversedNumStr = numAsStr.split('').reverse().join('');
//     console.log(numAsStr == reversedNumStr);
// } 

// Other solution 

palindromeIntegers([123, 323, 421, 121])



