function printName(person: { first: string, last: string}): void {
    console.log(`${person.first} ${person.last}`)
}

printName({first: `Thomas`, last: `Jenkins`})
// printName({first: `Jurinsea`})
// printName({last: `Cockroach`})

type Point = {x: number, y:number}

let coordinate: Point = { x: 34, y:2 }

function randomCoordinate(): Point {
    return {x: Math.random(), y: Math.random()}
}
console.log(randomCoordinate())
console.log(randomCoordinate())
console.log(randomCoordinate())

// printName({first: `Thomas`, last: `Jenkins`,age: 123})
const singer = {first: `Rim`, last: `Za`,age: 224}
printName(singer)

function doublePoint(point: Point): Point
{
    return {x: point.x*2, y:point.y*2}
}

type Song = {
    title: string, 
    artist: string, 
    numStreams: number,
    credits: {
        producer: string, 
        writer: string
    }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`)
}

const mySong: Song = {
    title: `Unchained Melody`,
    artist: `Righteous Brothers`,
    numStreams: 12873321,
    credits: {
        producer: `Phil Spector`,
        writer: `Alex North`
    }
}

const earnings = calculatePayout(mySong)
console.log(earnings)
printSong(mySong)

type PointOptional = {x: number, y: number, z?: number}

type User = {
    readonly id: number,
    username: string
}

const user: User = {
    id: 12837,
    username: 'catgirl'
}
console.log(user)
// user.id = 122
user.username = `asdf`

type Circle = {
    radius: number
}

type Colorful = {
    color: string
}

type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
    radius: 4,
    color: 'yellow'
}

console.log(happyFace)

type Cat = {
    numLives: number
}
type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number
}

const TutToo: CatDog = {
    numLives: 1,
    breed: `Junmaima`,
    age: 69
}