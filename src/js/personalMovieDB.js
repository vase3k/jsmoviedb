const numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', 20);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// for (let i = 0; i <= 1; i++) {
//     let a = prompt('какой последний фильм?'),
//         b = +prompt('на сколько оцените его');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         i--;
//         console.log('else');
//     }
// }

let k = 0;
// while (k <= 1) {
//     let a = prompt('какой последний фильм?'),
//         b = +prompt('на сколько оцените его');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         k--;
//         console.log('else');
//     }
//     k++;
// }

do {
    let a = prompt('какой последний фильм?'),
        b = +prompt('на сколько оцените его');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        k--;
        console.log('else');
    }
    k++;
} while (k <= 1);

const movieCount = personalMovieDB.count;

if (movieCount < 10) {
    console.log('to few movies');
} else if (movieCount < 30) {
    console.log('you are classic');
} else {
    console.log('you are kinoman');
}

console.log(personalMovieDB);
