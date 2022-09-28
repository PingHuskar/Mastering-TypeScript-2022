let movieTitle: string = `Amadeus`
movieTitle = `Arrival`
// movieTitle = 9
movieTitle.toUpperCase()

let numCatLives: number = 9
numCatLives += 1
// numCatLives = 'zero'

let gameOver: boolean = false
gameOver = !gameOver
// gameOver = `true`

let nothing: null = null
let foo: undefined = undefined

let tvShow = `Olive Kitteridge`
// tvShow = false

let isFunny = false
isFunny = true
// isFunny = `asdf`

let thing: any = 'hello'
thing = 1
thing = false
thing()
thing.toUpperCase()

const movies = [`Arrival`, `The Thing`, `Aliens`, `Amadeus`]

let foundMovie: string

for (let movie of movies) {
    if (movie === `Amadeus`) {
        foundMovie = `Amadeus`
    }
}
// foundMovie()
// foundMovie = 1
// foundMovie.asdf()