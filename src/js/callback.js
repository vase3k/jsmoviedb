'use strict';

function first(callback) {
    //do something
    setTimeout(function () {
        console.log(1);
        callback();
    }, 500);
}

function second() {
    console.log(2);
}

function learnJS(lang, callback) {
    console.log(lang);
    callback();
}

learnJS('callback start', second);
