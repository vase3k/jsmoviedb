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

function calculateVolumeAndArea(cube) {
    return typeof parseInt(cube) != 'number' || cube <= 0 || Number.isInteger(cube) != true
        ? 'При вычислении произошла ошибка'
        : `Объем куба: ${Math.pow(cube, 3)}, площадь всей поверхности: ${Math.pow(cube, 2) * 6}`;
}

// function getCoupeNumber(seat) {
//     if (typeof seat !== 'number' || Number.isInteger(seat) == false || seat < 0) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     } else if (seat == 0 || seat > 36) {
//         return 'Таких мест в вагоне не существует';
//     } else {
//         return Math.ceil(seat / 4);
//     }
// }

function getCoupeNumber(seat) {
    return typeof seat !== 'number' || Number.isInteger(seat) === false || seat < 0
        ? 'Ошибка. Проверьте правильность введенного номера места'
        : seat === 0 || seat > 36
        ? 'Таких мест в вагоне не существует'
        : Math.ceil(seat / 4);
}

function getTimeFromMinutes(min) {
    if (typeof min !== 'number' || !Number.isInteger(min) || min < 0) {
        return 'Ошибка, проверьте данные';
    } else {
        const hours = Math.floor(min / 60),
            minutes = min % 60;
        const res = `Это ${hours} час${
            hours > 4 || hours == 0 ? 'ов' : hours > 1 ? 'а' : ''
        } и ${minutes} минут${minutes === 0 || minutes > 4 ? '' : minutes > 1 ? 'ы' : 'а'}`;
        return res;
    }
}

function getTimeFromMinutes(min) {
    const hours = Math.floor(min / 60),
        minutes = min % 60;
    return typeof min !== 'number' || !Number.isInteger(min) || min < 0
        ? 'Ошибка, проверьте данные'
        : `Это ${hours} час${
              hours > 4 || hours == 0 ? 'ов' : hours > 1 ? 'а' : ''
          } и ${minutes} минут${minutes === 0 || minutes > 4 ? '' : minutes > 1 ? 'ы' : 'а'}`;
}

function findMaxNumber() {
    if (arguments.length < 4) {
        return 0;
    }
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return 0;
        }
    }
    return Math.max(...arguments);
}

function fib(num) {
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }
    if (num === 1) {
        return '0';
    }
    let a = 0,
        b = 1,
        acc = '';
    acc += a + ' ' + b;
    for (let i = 2; i < num; i++) {
        let c = a + b;
        a = b;
        b = c;
        acc += ' ' + c;
    }
    return acc;
}
