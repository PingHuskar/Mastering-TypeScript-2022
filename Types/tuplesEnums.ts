// Tuples
let stuff: (string | number)[] = [1,'asd','adsads','adsdas',2]

const color: [number,number,number] = [255,0,255]

type HTTPResponse = [number, string]

const goodRes: HTTPResponse = [200, "OK"]

goodRes.push(123)
goodRes.pop()
goodRes.pop()
goodRes.pop()

const responses: HTTPResponse[] = [[404,"Not Found"],[200,"OK"]]

// Enums
enum OrderStatus {
    pending = 45,
    shipped,
    delivered = 23,
    returned = 12
}
const Status = OrderStatus.delivered

function isDelivered(status: OrderStatus) {
    return status == OrderStatus.delivered
}

isDelivered(OrderStatus.returned)

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

console.log(ArrowKeys.UP)