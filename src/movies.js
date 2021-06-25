const movies = require('./data')


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movs) {
  const dirs = movs.map((movie) => {
    return movie.director
  })
  return dirs
}

// const getAllDirectors = movies.map((movie) => {
//   return movie.director
//   }
// )

console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
  const dramas = moviesArr.filter((movie) => {
    return movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')
  })
  return dramas.length
}
console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
    if (moviesArr == ''){
      return 0
    }
    const totalScore = moviesArr.reduce((acc, movie) => {
      if (movie.score == '' || !movie.score){
        return acc += 0
      }
      else {
        return acc + movie.score
      }
    },0)
    return Number((totalScore/moviesArr.length).toFixed(2))
    
}

console.log(scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMovies = moviesArr.filter((movie) => {
    return movie.genre.includes('Drama')
  })
  if (dramaMovies == '') {
    return 0
  }
  const totalScores = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score
  },0)
  return Number((totalScores/dramaMovies.length).toFixed(2))
}

console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  const newArray = moviesArr.map((movies) => {
    return movies
  })
  const arrayByYear = newArray.sort((a,b) => {
    if (a.year !== b.year) {
      return a.year - b.year
    }
  })
  return arrayByYear
}

orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  const newArray = moviesArr.map((movie) => {
    return movie.title
  })
  newArray.sort()
  console.log(newArray)
  const array20 = newArray.slice(0,20)
  return array20
}

console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}