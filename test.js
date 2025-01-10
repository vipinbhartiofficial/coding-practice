const arr = [1, [2, [3, [4]]]]

function flatten(arr) {
  const res = []
  for(let val of arr){
    if(val instanceof Array){
      res.push(...flatten(val))
    } else{
      res.push(val)
    }
  }
  return res
}

console.log(flatten(arr))