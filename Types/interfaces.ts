interface Point {
    x: number,
    y: number
}

const pt: Point = { x: 123, y: 456 }

interface Person {
    readonly id: number
    first: string
    last: string
    nickname?: string
    sayHi: () => string
}

const thomas: Person = { first: "Thomas", last: "Hardy", nickname: "Tom", id: 123, sayHi: () => {return "Hello!"}}
thomas.first = 'Lora'
// thomas.id = 5
console.log(thomas)
console.log(thomas.sayHi())

interface Product {
    name: string
    price: number
    applyDiscount(discount: number): number
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1-amount)
        this.price = newPrice
        return this.price
    }
}

console.log(shoes.applyDiscount(0.4))

interface Dog {
    name: string
    age: number
}

interface Dog {
    breed: string
    bark(): string
}

const Tuttu: Dog = {
    name: "Tuttu",
    age: 88,
    breed: "ParangPrachaRat",
    bark() {
        return "Ku Mai Ook"
    },
}

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "coup"
}

const Sonthiya: ServiceDog = {
    name: "Sonthiya",
    age: 77,
    breed: "Pasom",
    bark() {
        return "Loong Too Kon Dee!"
    },
    job: "drug sniffer"
}

interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

const tony: Engineer = {
    name: "Taksin",
    id: 448,
    email: "tonytonywoodsome@dubai.com",
    level: "senior",
    languages: ["ENG","TH"]
}
console.log(tony)