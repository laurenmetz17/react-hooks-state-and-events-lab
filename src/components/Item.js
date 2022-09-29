import React from "react";
import {useState} from 'react';

function Item({ name, category }) {
  const [inCart,setCart] = useState(false);
  
  function addItem() {
    setCart((inCart) => inCart = !inCart);
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
