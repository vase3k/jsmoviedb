'use strict';

let str = 'something';
let strObj = new String(str);

console.dir([1, 2, 3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: () => console.log('hello'),
};

const john = Object.create(solder);

john.sayHello();
