function add(...args) {
  let total = args.reduce((sum, num) => sum + num, 0);
  
  function inner(...innerArgs) {
    if (innerArgs.length === 0) {
      return total;
    } else {
      total += innerArgs.reduce((sum, num) => sum + num, 0);
      return inner;
    }
  }
  
  return inner;
}

console.log(add(2, 5)(3, 4, 6)(1, 3, 5, 2)());