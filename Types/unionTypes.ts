let age: number|string = 21
age = 23
age = `24`
// age = false

type Point = {
    x: number,
    y: number,
}

type Loc = {
    lat: number,
    lng: number,
}

let coordinates : Point | Loc = { x: 1, y: 34 }
coordinates = { lat: 32.152, lng: 84.684 }

function printAge(age: number | string): void {
    console.log(`You're ${age} years old.`)
}

// Type Narrowing
function calculateTax(price: number | string, tax: number) {
    // price.replace("$", "")
    // return price * tax
    if (typeof price == "string") {
        price = parseFloat(price.replace("$", ""))
    }
    return price * tax
}

const num: number|string[] = 2
const numArr: number|string[] = ['asdf']

const nums: (number|string)[] = [132, 'skjdfhksd']
const numss: number[]|string[] = [132, 1265487]
const numsss: number[]|string[] = ['asdfsdf','sdfgisdjfol']

const coords: (Point | Loc)[] = []
coords.push({ lat: 132.456, lng: 654879 })
coords.push({ x: 132.456, y: 654879 })

let zero: 0 = 0
// zero = 2
let hi: "hi" = "hi"

let mood: "Happy" | "Sad" = "Happy"
mood = "Sad"

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"

let today: DayOfWeek = "Monday"
// let today2: DayOfWeek = "wed"