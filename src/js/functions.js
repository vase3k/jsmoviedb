'use strict';
//пример замыкания
// function counter() {
//     let number = 0;
//     return () => number++;
// }

// const counter1 = counter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// function ret() {
//     let num = 50;
//     //
//     return num;
// }

// const anotherNum = ret();

// console.log(anotherNum);

//function expression
const foo = function () {};
//function declaration
function foo2() {}
// arrow function
() => {};

const discount = 0.9;
function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(200, 20);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log('done');
}

function doNothing() {}
console.log(doNothing() === undefined);

function sayHello(name) {
    return `privet ${name}`;
}

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

function getMathResult(num, count) {
    let acc = num;
    if (typeof count != 'number' || count <= 0) {
        return num;
    }
    for (let i = 2; i <= count; i++) {
        acc += `---${num * i}`;
    }
    return acc;
}
console.log(getMathResult(5, 10));
