const obj = {
    name: "John",
    age: 25,
    address: {
        city: "New York",
        country: "USA"
    }
};

/*
// const shallowCopy = obj;
const shallowCopy = {...obj};

shallowCopy.name = "Jane";
shallowCopy.address.city = "San Francisco";
obj.address.country = "Canada";

console.log("obj", obj);
console.log("shallowCopy", shallowCopy);
*/

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.name = "Jane";
deepCopy.address.city = "San Francisco";
obj.address.country = "Canada";

console.log("obj", obj);
console.log("deepCopy", deepCopy);