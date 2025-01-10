const arr = [1, 2, 3, 4, 2, 5, 3];


const countFrequency = {}
let duplicateElement = []

for(let num of arr){
    countFrequency[num] = (countFrequency[num] || 0) + 1; 

    if(countFrequency[num] > 1){
        duplicateElement.push(num)
    }
}

console.log(duplicateElement) // [ '2', '3' ]