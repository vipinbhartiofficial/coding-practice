const arr = [1, 4, [6, 7, 10]];
const [a, b, [c, d, e]] = arr;
console.log(a, b, c, d, e);

const obj = {
    name: "John",
    age: 25,
    address : {
        city: "New York",
        country: "USA"
    }
};

const {name, age, address: {city, country}} = obj;
console.log(name, age, city, country);

const person = {name: "John", age: 25, city: "New York", country: "USA"};
function printPerson({name, age}) {
    console.log(name, age);
}

printPerson(person);

const {name: personName, age: personAge, ...rest} = person;
console.log(personName, personAge, rest);