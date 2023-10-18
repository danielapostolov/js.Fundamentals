function loadingBar(num) {
    let percentsCount = num/10;
    let percents = ('%').repeat(percentsCount);
    let points = '.'.repeat(10 - percentsCount);

    if (num != 100){
        console.log(`${num}% [${percents}${points}]`);
        console.log('Still loading...');
    }else{
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }


}
loadingBar(30)