// function user(){
//     const name = "Vipin";

//     function displayName(){
//         console.log(name);
//     }
//     return displayName
// }

// const userInfo = user();

// userInfo(); // Vipin


function createCounter(){
    let counter = 0;

    return {
        increment: function(){
            counter++;
            console.log(counter);
        },
        decrement: function(){
            counter--;
            console.log(counter);
        }
    }
}

const number = createCounter();

number.increment(); // 1
number.increment(); // 2
number.increment(); // 3
number.decrement(); // 2
number.decrement(); // 1
number.decrement(); // 0
number.increment(); // 1
