function magicSum(arr, sum) {
    for (i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];
            if (num1 + num2 == sum) {
                console.log(num1 + ' ' + num2);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)