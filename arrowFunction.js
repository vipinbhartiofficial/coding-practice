const myName = name => `Hello", ${name}`;
console.log(myName("John"));

const power = x => x**3;
console.log("Power", power(2));

const sum = (a, b) => a + b;
console.log("Sum", sum(2, 3))


const objNormal = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

objNormal.fullName();

const objArrow = {
    firstName: "Vipin",
    lastName: "Bharti",
    fullName: () =>{
        console.log(this.firstName + " " + this.lastName);
    }
}

objArrow.fullName();



function normalThis(a,b,c){
    console.log("normalThis", this);
    console.log("normalOrgument", arguments);
}
// normalThis(10,20,30);


const arrowThis = (a,b,c) => {
    console.log("arrowThis", this);
    console.log("arrowOrgument", arguments);
}

// arrowThis(10,20,30);



function Person(name){
    this.name = name;
}
const person = new Person("Ankit");
console.log(person.name);

const Profile = name => {
    this.name = name;
}
const profile = new Profile("Vipin");
console.log(profile.name); 