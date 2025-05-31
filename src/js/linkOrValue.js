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
