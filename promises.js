const { response } = require("express");

const Promises = new Promise((Resolved, Rejected) => {
    const sum = 1 + 1;
    if (sum === 2) {
        Resolved('Success');
    } else {
        Rejected('Failed');
    }
})


// Promises
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


const promiseA = new Promise((Resolved, Rejected) => {
    setTimeout(() => {
      Resolved('Promise A Resolved');
    }, 1000);
})

const promiseB = new Promise((Resolved, Rejected) => {
  setTimeout(() => {
    const num = Math.floor(Math.random()* (10 - 6) + 5);
    if(num%2 === 0) {
      Resolved('Promise B Resolved');
    }
    else {
      Rejected('Promise B Rejected');
    }
  }, 0);
})

const promiseC = new Promise((Resolved, Rejected) => {
  setTimeout(() => {
    Resolved('Promise C Resolved');
  }, 100);
})

const promiseAllResponse = Promise.all([promiseA, promiseB, promiseC])
promiseAllResponse
  .then(response => console.log("promiseAllResponse", response))
  .catch(error => console.log("promiseAllResponse", error))
  
const promiseAllSattledResponse = Promise.allSettled([promiseA, promiseB, promiseC])
promiseAllSattledResponse
    .then(response => console.log("promiseAllSattledResponse", response))
    .catch(error => console.log("promiseAllSattledResponse", error))
  
const promiseAnyResponse = Promise.any([promiseA, promiseB, promiseC])
promiseAnyResponse
  .then(response => console.log("promiseAnyResponse", response))
  .catch(error => console.log("promiseAnyResponse", error))
    
const promiseRaceResponse = Promise.race([promiseA, promiseB, promiseC])
promiseRaceResponse
  .then(response => console.log("promiseRaceResponse", response))
  .catch(error => console.log("promiseRaceResponse", error))
    