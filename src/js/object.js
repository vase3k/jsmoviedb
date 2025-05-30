'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function () {
        console.log();
    },
};

const { border: value1, bg: value2 } = options.colors;

function Person(name) {
    this.name = name;
}

let ivan = new Person('ivan');

Person.prototype.sayhello = function () {
    console.log(this.name);
};

ivan.sayhello();
