// function square(num: number) {
    //     return num ** 2
    // }
const square = (num: number) => num ** 2
    
square(3)
// square('asdf')
// square(true)

const greet = (person: string) => {
    // person*person
    return `Hi there, ${person}!`
}
// greet(true)
// greet(123)
greet("IHERETOO")

const doSomething = (person: string, age: number, isFunny: boolean) => {
    return person
}

doSomething(`WheatSaleman`,55, false)

const greet2 = (person: string = `stranger`) => {
    return `Hi there, ${person}!`
}

console.log(greet2())

const rando = (num: number) => {
    if (Math.random() < 0.5) {
        return num.toString()
    }
    return num
}

const colors = [`red`, `orange`, `yellow`]
colors.map(color => {
    return color.toUpperCase()
})
console.log(colors)

function printTwice(msg: string): void {
    console.log(msg)
    console.log(msg)
    // return ''
}

function makeError(msg: string): never {
    // return undefined
    throw new Error(msg)
}

function gameLoop(): never {
    while (true) {
        console.log(`GAME LOOP RUNNING`)
    }
    // return true
}