function Person(name){
  this.name = name;
}

Person.prototype.getName = function(){
  return this.name;
}

const vipin = new Person("Vipin");
const sumit = new Person("Sumit")

console.log(vipin.getName());
console.log(sumit.getName());

console.log(vipin.getName === sumit.getName);