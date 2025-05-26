'use strict';

const numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', 20);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('какой последний фильм?', 'star wars'),
    b = +prompt('на сколько оцените его', 8.2),
    c = prompt('какой последний фильм?', 'far and away'),
    d = +prompt('на сколько оцените его', 9.0);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
