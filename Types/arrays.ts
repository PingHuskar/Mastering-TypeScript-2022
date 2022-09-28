const activeUsers: string[] = []

activeUsers.push("Tony")
// activeUsers.push(12)

const ageList: number[] = [45,56,13]
ageList[0] = 99
// ageList[1] = 'oneToTwelve'

const bools: boolean[] = [] // const bools: Array<boolean> = []
type Point = {
    x: number,
    y: number,
}

const coords: Point[] = []
coords.push({x: 23, y:8})
// coords.push({x: "23", y:8})
// coords.push({y:9})

const board: string[][] = [
    ["X","O","X"],
    ["X","O","X"],
    ["X","O","X"],
]

const demo: number[][][] = [[[1]]]