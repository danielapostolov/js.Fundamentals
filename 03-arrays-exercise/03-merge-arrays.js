function mergeArrays(arr1, arr2) {
    let arr3 = [];

    for (i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        let el2 = arr2[i];

        if (i % 2 == 0) {
            sum = Number(el1) + Number(el2);
            arr3.push(Number(sum))
        } else {
            let concatenation = el1 + el2;
            arr3.push(concatenation)
        }

    }

    console.log(arr3.join(' - '));



}


mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])