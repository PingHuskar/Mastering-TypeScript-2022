interface Item {
    id: number,
    product: string,
    quantity: number
}
interface ShoppingListProps {
    items: Item[]
}

export default function ShoppingList({items}: ShoppingListProps): JSX.Element {
    
    return (
        <div className="">
            <h1>Shoppping List</h1>
            <ul>
                {items.map((item,id) => {
                    return <li key={item.id}>{item.product} - {item.quantity}</li>
                })}
            </ul>
        </div>
    )
}