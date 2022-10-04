const nums: Array<number> = []
const colors: Array<number> = []

const inputEl = document.querySelector<HTMLInputElement>(`#username`)!
console.log(inputEl)
inputEl.value = `HACKED`

const btn = document.querySelector<HTMLButtonElement>(`.btn`)!

function numberIdentity(item: number): number {
    return item
}
function stringIdentity(item: string): string {
    return item
}
function booleanIdentity(item: boolean): boolean {
    return item
}

interface Cat {
    name: string
    breed: string
}

// function identity(item: any): any {
//     return item
// }
function identity<T>(item: T): T {
    return item
}

identity<number>(7)
// identity<string>(7)
identity<string>("Hello")
identity<Cat>({name:"asdf",breed:"asdffndksfj"})

function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx]
}

console.log(getRandomElement<string>(['a','b','c']))
console.log(getRandomElement<number>([46546,61654,6846,765761,4878]))

console.log(getRandomElement(['a','asdf','8w9e48r']))
console.log(getRandomElement([46546,61654,6846,765761,4878]))

function merge<T extends object,U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}
const comboObj = merge({name:'colt'},{pets: ['blue','elton']})

// console.log(merge({name:"Pok"}, 9))
console.log(merge({name:"Pok"}, {num: 9}))

interface Lengthy {
    length: number
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2
}

console.log(printDoubleLength('asdf'))
// console.log(printDoubleLength(7987))

function makeEmptyArray<T = number>(): T[] {
    return []
}

const numss = makeEmptyArray()
const boolss = makeEmptyArray<boolean>()

interface Song {
    title: string
    artist: string
}
interface Video {
    title: string
    creator: string
    resolution: string
}

class Playlist<T> {
    public queue: T[] = []
    add(el: T){
        this.queue.push(el)
    }
}

const songs = new Playlist<Song>()
const videos = new Playlist<Video>()
videos.add()