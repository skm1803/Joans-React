import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handelAddItem(newItems) {
    setItems((items) => [...items, newItems]);

    console.log(items)
  }

  function handelDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function reset(){ 
    const confirm = window.confirm('Are you sure you want to clear the list?')
    if(!confirm) return
    setItems([])
  }

  return (
    <>
      <Logo />
      <Form handelAddItem={handelAddItem} />
      <PackingList items={items} handelDelete={handelDelete} handelToggle={handelToggle} reset={reset} />
      <Stats />
    </>
  );
}


