'use strict';

// const drawPiramide = (length, acc = '') => {
//     for (let i = 1; i <= length; i++) {
//         for (let j = 0; j < i; j++) {
//             acc += '*';
//         }
//         acc += '\n';
//     }
//     return acc;
// };

// first: for (let i = 0; i <= 3; i++) {
//     console.log(`first level:${i}`);
//     for (let j = 0; j <= 3; j++) {
//         console.log(`second level:${j}`);
//         for (let k = 0; k <= 3; k++) {
//             if (k === 2) break first;
//             console.log(`third level:${k}`);
//         }
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     let i = 5;
//     while (i <= 10) {
//         if (i < 5) {
//             i++;
//             continue;
//         }
//         arrayOfNumbers[i - 5] = i;
//         i++;
//     }

//     // Не трогаем
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }
// fifthTask();

// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 1; j <= lines - i; j++) {
//         result += ' ';
//     }
//     for (let k = 0; k <= i * 2; k++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);
