// class Player {
//     public readonly first: string
//     public readonly last: string
//     private score: number = 0
//     constructor(first: string, last: string) {
//         this.first = first
//         this.last = last
//         this.secretMethod()
//     }
//     private secretMethod(): void {
//         console.log("Secret Method")
//     }
// }
class Player {
    constructor(public first: string, public last: string, protected _score: number) {}
    private secretMethod(): void {
        console.log("Secret Method")
    }
    get fullName() {
        return `${this.first} ${this.last}`
    }
    get score(): number {
        return this._score
    }
    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error (`Score cannot be negative`)
        }
        this._score = newScore
    }
}

class SuperPlayer extends Player {
    public isCheater: boolean = true
    maxScore() {
        this._score = 999
    }
}

var pu = new Player("Pu", "YuDubai",100)
pu.fullName
pu.score = 88

interface Colorful {
    color: string
}

interface Printable {
    print(): void
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Jacket implements Colorful {
    constructor(public brand: string, public color: string) {}
    print() {
        console.log(`${this.color} ${this.brand} jacket`)
    }
}

const bike1 = new Bike("red")

const jacket1 = new Jacket("Prada", "black")

abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number
    greet() {
        console.log(`HELLO`)
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last)
    }
    getPay(): number {
        return this.salary
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last)
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked
    }
}

const Bow = new FullTimeEmployee('Bow', 'White', 10101)
console.log(Bow.getPay())
const Wattana = new PartTimeEmployee('Wattana', 'keenguyen', 49, 1010)
console.log(Wattana.getPay())