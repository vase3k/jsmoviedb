'use strict';

//to string

// 1)
console.log(String(null));
console.log(typeof String(4));

// 2)
console.log(typeof (5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

console.log(typeof fontSize);

// to number

console.log(typeof Number('4'));

//2)
console.log(typeof +'4');

//3)
console.log(parseInt('15px').toString(2));
console.log(typeof parseInt('15px', 10));

//boolean

0, '', null, undefined, NaN; //false

let switcher = null;

if (switcher) {
    console.log('...working');
}

console.log(Boolean('4'));

console.log(!!' ');
