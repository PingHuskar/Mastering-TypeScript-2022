function ShoppingListForm(): JSX.Element {
    function handleSubmit (e: React.FormEvent) {
        e.preventDefault()
        console.log(`submitted`)
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" name="" id="" />
        <button type="submit">Add Item</button>
    </form>
}

export default ShoppingListForm