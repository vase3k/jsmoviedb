'use strict';

// const numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', 20);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt('какой последний фильм?', 'star wars'),
//     b = +prompt('на сколько оцените его', 8.2),
//     c = prompt('какой последний фильм?', 'far and away'),
//     d = +prompt('на сколько оцените его', 9.0);

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

const hamburger = 3,
    fries = 3,
    cola = 0,
    nuggets = 2;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
    console.log('yes we eat');
} else {
    console.log('we dont eat');
}

console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

console.log((5 === 5 && 3 > 1) || 5);
