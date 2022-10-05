import React, { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';

function App() {
  const [items,setItems] = useState<Item[]>([])
  // const items = [
  //   { id:1, product: "Lemon", quantity: 3},
  //   { id:2, product: "Chicken Breast", quantity: 4},
  // ]
  return (
    <div className="App">
      <ShoppingList items={items} />
      <ShoppingListForm />
    </div>
  );
}

export default App;
