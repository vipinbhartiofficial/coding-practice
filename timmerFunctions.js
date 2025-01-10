console.log('Program has started');

setTimeout(() => {
    console.log('SetTimeout function executed');
}, 0);

console.log('After setTimeout');

setImmediate(() => {
    console.log('SetImmediate function executed');
});

console.log('After setImmediate');

process.nextTick(() => {
    console.log('Process.nextTick function executed');
});

console.log('After process.nextTick');

let counter = 0;
const intervalId = setInterval(() => {
  console.log("setInterval:", counter);
  counter++;
  if (counter > 3) {
    clearInterval(intervalId); // Stops the interval after 4 executions
  }
}, 100);

console.log('After setInterval');

let promise = new Promise((Resolved, Rejected) => {
    const num = Math.floor(Math.random()* (10 - 6) + 5);
    if(num%2 === 0) {
        Resolved("Promise has Resolved");
    }
    else {
        Rejected("Promise has Rejected");
    }
})

promise
    .then(messages => {
        console.log(messages);
    })
    .catch(error => {
        console.log(error)
    })
    
console.log('Program has ended');