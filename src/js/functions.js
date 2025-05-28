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

const usdCurr = 28,
    eurCurr = 32;
function convert(amount, curr) {
    console.log(curr * amount);
}
convert(500, usdCurr);
convert(500, eurCurr);
