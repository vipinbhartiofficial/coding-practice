let arr = [1, 3, 1, 3, 2, 1];

function findMaxTimeRepeatedNumber(arr) {
    let repeatedNumber = {};
    
    for(let i = 0; i < arr.length; i++){
        repeatedNumber[arr[i]] = (repeatedNumber[arr[i]] || 0) + 1;
    }
    
    console.log(repeatedNumber);

    let maxValue  = 0;
    let maxNumber = 0
    for(let key in repeatedNumber){
        if(repeatedNumber[key] > maxValue){
            maxValue = repeatedNumber[key];
            maxNumber = key;
        }
    }

    return { number : maxNumber, count: maxValue};
}

console.log(findMaxTimeRepeatedNumber(arr));