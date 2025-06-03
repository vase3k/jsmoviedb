'use strict';

let x = 5;
console.log(x++);

console.log([] + false - null + true);

let y = 1;
x = y = 2;
console.log(x);

console.log([] + 1 + 2);

console.log('1'[0]);

console.log(2 && 1 && null && 0 && undefined);

let a = 1,
    b = 2;
console.log(!!(a && b), a && b);

console.log(null || (2 && 3) || 4);

a = [1, 2, 3];
b = [1, 2, 3];
console.log(a == b);

console.log(+'Infinity');

console.log('ё'.codePointAt(), 'я'.codePointAt());

console.log(0 || '' || 2 || undefined || true || false);
