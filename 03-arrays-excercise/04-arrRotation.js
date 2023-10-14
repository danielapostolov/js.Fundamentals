function arrRotation(arr, rotationCount){

    for(let rotation = 1; rotation <= rotationCount; rotation++){
        let element = arr.shift();

        arr.push(element);



    }
    console.log(arr.join(' '));

}
arrRotation([51, 47, 32, 61, 21], 2);