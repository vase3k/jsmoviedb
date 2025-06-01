'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5,
        },
        {
            width: 15,
            length: 7,
        },
        {
            width: 20,
            length: 5,
        },
        {
            width: 8,
            length: 10,
        },
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
};

function isBudgetEnough({ shops, height, moneyPer1m3, budget }) {
    return shops.reduce(
        (acc, { width, length }) => acc + width * length * height * moneyPer1m3,
        0
    ) <= budget
        ? 'Бюджета достаточно'
        : 'Бюджета недостаточно';
}

const students = [
    'Peter',
    'Andrew',
    'Ann',
    'Mark',
    'Josh',
    'Sandra',
    'Cris',
    'Bernard',
    'Takesi',
    'Sam',
];

function sortStudentsByGroups(arr) {
    let res = [];
    arr.sort().reduce((acc, e, i) => {
        acc.push(e);
        if ((i + 1) % 3 === 0) {
            res.push(acc);
            return [];
        }
        i === arr.length - 1 && res.push(`Оставшиеся студенты: ${acc.join(', ')}`);
        return acc;
    }, []);
    res[res.length - 1].length === 3 && res.push('Оставшиеся студенты: -');
    return res;
}

console.log(sortStudentsByGroups(students));
