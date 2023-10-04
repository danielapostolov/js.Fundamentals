function commonElements(arr1, arr2) {


    for (let index = 0; index < arr1.length; index++) {
        let firstElement = arr1[index];



        let index2 = 0;
        let secondElement = arr2[index2];
        while (index2 < arr2.length) {



            if (firstElement === secondElement) {
                console.log(firstElement);
            }
            index2++;
            secondElement = arr2[index2];
        }
    }

}
commonElements
    (['Hey', 'hello', 2, 4, 'Peter', 'e'],

    ['Petar', 10, 'hey', 4, 'hello', '2']);