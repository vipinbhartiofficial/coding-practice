
const persone = {
  name: 'Vipin',
  age: 25,
  greet: {
    hello: 'Hello',
    hi: 'Hi'
  }
}

const deepCopy = (obj) =>{
  const objCopy = {}
  for(key in obj){
    if(typeof obj[key] === 'object'){
      objCopy[key] = deepCopy(obj[key])
    } else {
      objCopy[key] = obj[key]
    }
  }
  return objCopy
}

const personeCopy = deepCopy(persone)
console.log("personeCopy", personeCopy)