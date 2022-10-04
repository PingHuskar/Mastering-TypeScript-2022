function triple(value: number|string) {
    if (typeof value === "string") {
        return value.repeat(3)
    }
    return value * 3
}

const el = document.getElementById(`idk`)
if (el) {
    el
} else {
    el
}

const printLetter = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char)
        }
    } else {
        console.log(`YOU DIDN'T PASS IN A WORD`)
    }
}

function someDemo(x: string | number, y: string | boolean) {
    if (x == y) {
        x.toUpperCase()
    }
}
// someDemo(3,"3")

interface Movie {
    title: string,
    duration: number
}
interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie|TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration
    }
    return media.duration
}

console.log(getRuntime({title: 'La Za Land',duration: 159}))
console.log(getRuntime({title: 'Fire 9',numEpisodes: 10,episodeDuration:13}))

function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString())
    } else {
        console.log(new Date(date).toUTCString())
    }
}
printFullDate(new Date)

class User {
    constructor(public username: string) {}
}
class Company {
    constructor(public name: string) {}
}

function printName(entity: User|Company) {
    if (entity instanceof User) {
        entity
    } else {
        entity
    }
}

interface Cat {
    name: string
    numLives: number
}
interface Dog {
    name: string
    breed: string
}

function isCat(animal: Cat|Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat|Dog): string {
    if (isCat(animal)) {
        return "Meow"
    } else {
        return "Bananas, we need more bananas"
    }
}
interface Rooster {
    name: string,
    weight: number,
    age: number,
    kind: "rooster"
}
interface Cow {
    name: string,
    weight: number,
    age: number,
    kind: "cow"
}
interface Pig {
    name: string,
    weight: number,
    age: number,
    kind: "pig"
}
interface Sheep {
    name: string,
    weight: number,
    age: number,
    kind: "sheep"
}

type FarmAnimal = Pig | Rooster | Cow | Sheep
function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case ("rooster"):
            return "8E88"
        case ("cow"):
            return "Mooo"
        case ("pig"):
            return "Oink!"
        case ("sheep"):
            return "San Son Teen!"
        default:
            // const shouldNeverGetHere: never = animal
            // return shouldNeverGetHere
            const _exhaustiveCheck: never = animal
            return _exhaustiveCheck
    }
}

const git: Rooster = {
    name: "Guy Rov",
    weight: 34,
    age: 55,
    kind: "rooster"
}

console.log(getFarmAnimalSound(git))