'use strict';

const personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    let numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', 20);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', 20);
    }

    personalMovieDB.count = numberOfFilms;
}

function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        let a = prompt('какой последний фильм?'),
            b = +prompt('на сколько оцените его');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            i--;
            console.log('else');
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('to few movies');
    } else if (personalMovieDB.count < 30) {
        console.log('you are classic');
    } else {
        console.log('you are kinoman');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`your favorite genre number ${i}`);
    }
}

//start();
//rememberMyFilms();
//detectPersonalLevel();
//writeYourGenres();
//showMyDB(personalMovieDB.privat);
