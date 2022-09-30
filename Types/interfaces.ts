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