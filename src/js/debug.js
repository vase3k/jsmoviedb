'use strict';

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$',
        },
        {
            name: 'Pizza Diavola',
            price: '9$',
        },
        {
            name: 'Beefsteak',
            price: '17$',
        },
        {
            name: 'Napoleon',
            price: '7$',
        },
    ],
    waitors: [
        { name: 'Alice', age: 22 },
        { name: 'John', age: 24 },
    ],
    averageLunchPrice: '20$',
    openNow: true,
};

function isOpen(prop) {
    let answer = '';
    !prop ? (answer = 'Закрыто') : (answer = 'Открыто');

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(
    isAverageLunchPriceTrue(
        restorantData.menu[1],
        restorantData.menu[3],
        restorantData.averageLunchPrice
    )
);

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{ name: 'Mike', age: 32 }];
    return copy;
}

transferWaitors(restorantData);
console.log(transferWaitors(restorantData));
