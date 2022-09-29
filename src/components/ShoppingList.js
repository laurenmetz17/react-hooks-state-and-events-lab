import React from "react";
import Item from "./Item";
import {useState} from 'react';

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All");
  
  function handleSelect(event) {
    setCategory((selectedCategory) => selectedCategory = event.target.value);
  }

  const itemsDisplayed = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory); 

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsDisplayed.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
