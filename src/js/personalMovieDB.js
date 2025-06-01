'use strict';

const personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        let numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', 20);

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', 20);
        }

        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: () => {
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
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('to few movies');
        } else if (personalMovieDB.count < 30) {
            console.log('you are classic');
        } else {
            console.log('you are kinoman');
        }
    },
    showMyDB: function () {
        if (!this.private) {
            console.log(this);
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`your favorite genre number ${i}`);
            // if (genre != null && genre != '') {
            //     personalMovieDB.genres[i - 1] = genre;
            // } else {
            //     i--;
            // }
            let genre = prompt(`введите ваши любимые жанры через запятую`);
            if (genre != null && genre != '') {
                personalMovieDB.genres = genre.toLowerCase().split(', ').sort();
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((e, i) => console.log(`Любимый жанр #${i + 1} - это ${e}`));
    },
    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    },
};

document.addEventListener('DOMContentLoaded', () => {
    //personalMovieDB.start();
    //personalMovieDB.rememberMyFilms();
    //personalMovieDB.detectPersonalLevel();
    //personalMovieDB.toggleVisibleMyDB();
    //personalMovieDB.showMyDB();
    //personalMovieDB.writeYourGenres();
});
