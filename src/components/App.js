import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from 'react';

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [dark, setDark] = useState(false);
  const appClass = dark ? "App dark" : "App light"

  function handleDark() {
    setDark((dark) => dark = !dark);
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
