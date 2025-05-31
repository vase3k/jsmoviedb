'use strict';

let a = 5,
    b = a;

b = b + 5;

const obj = {
    a: 5,
    b: 2,
    c: {
        d: 6,
        e: 7,
    },
};

function makeCopy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        if (typeof mainObj[key] === 'object') {
            objCopy[key] = { ...mainObj[key] };
        }
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

// console.log(obj);
// const clone = Object.assign({}, obj);
// obj.c.f = 5;
// console.log(clone);

const oldArray = [1, 3, 4, [2, 3, 4, 5], 6, 'dfd'];
const newArray = deepArray(oldArray);
function deepArray(arr) {
    return Array.from(JSON.parse(JSON.stringify(arr)));
}

oldArray[3][4] = 55;

// console.log(oldArray);
// console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['worldpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'odnoklassniki'];

const personalPlanPeter = {
    name: 'Peter',
    age: '29',
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month',
    },
    showAgeAndLangs: (personalPlanPeter) => {
        const { age, skills } = personalPlanPeter,
            { languages } = skills;
        let langString = languages.map((item) => item.toUpperCase()).join(' ');
        return `Мне ${age} и я владею языками: ${langString}`;
    },
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience({ skills }) {
    return skills.exp;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;
    let acc = '';
    for (let key in programmingLangs) {
        acc += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return acc;
}

showProgrammingLangs(personalPlanPeter);

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    }
    return `Семья состоит из: ${arr.join(' ')}`;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.map((e) => e.toLowerCase()).forEach((e) => console.log(e));
}
//standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return 'Ошибка!';
    }
    return str.split('').reverse().join('');
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    let res = baseCurrencies.concat(additionalCurrencies);
    let res2 = [];
    res.forEach((e) => {
        if (arr.includes(e)) {
            res2.push(e);
        }
    });
    res2 = res2.filter((e) => e !== missingCurr);
    let str = 'Доступные валюты:\n';
    res2.forEach((e) => (str += `${e}\n`));
    return str;
}

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    let res2 = [],
        str = 'Доступные валюты:\n';
    baseCurrencies.concat(additionalCurrencies).forEach((e) => arr.includes(e) && res2.push(e));
    res2.filter((e) => e !== missingCurr).forEach((e) => (str += `${e}\n`));
    return str;
}

console.log(availableCurr(['UAH', 'RUB', 'CNY', 'USD'], 'CNY'));
