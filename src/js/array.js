'use strict';

const arr = [1, 2, 3, 4, 5, 6];

arr.pop();
arr.push(12);
arr.shift();
arr.unshift(12);

// arr.forEach((e, i, v) => {
//     console.log(v[i]);
// });

// for (const value of arr) {
//     if (value < 3)
//     console.log(value);
// }

const arrMap = arr.reduce((acc, value) => [...acc, value], []);

const str = 'banana, tikva, harcho';
const products = str
    .split(',')
    .map((e) => e.trim())
    .sort();
console.log(products);

const number = [22, 34, 5, 4, 34, 656, 343];

function compareNum(a, b) {
    arguments.prototype.array;
    arguments.sort();
    a - b;
}

compareNum(12, 44);
