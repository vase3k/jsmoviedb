'use strict';

// let number = 5;
// debugger;

// function logNumber() {
//     let number = 4;
//     debugger;
//     console.log(number);
// }

// number = 6;

// logNumber();
// debugger;

function createCounter() {
    let counter = 0;

    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

function sum(a) {
    return function (b) {
        return a + b;
    };
}

console.log(sum(5)(2));
