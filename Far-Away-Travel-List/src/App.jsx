import { useState } from "react";
import "./App.css";
const initialItems = [
  { id: 1, descriptions: "Passports", quantity: 2, packed: false },
  { id: 2, descriptions: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <Logo />
      <Form  items={items} setItems={setItems}/>
      <PackingList items={items} setItems={setItems}/>
      <Stats />
    </>
  );
}

function Logo() {
  return <h1>🌴Far Away 💼</h1>;
}

function Form({items, setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  function handelAddItem(newItems) {
    setItems((items)=>[...items, newItems]);
    setDescription("");
    setQuantity(1);
    console.log(items)
  }

  function handelSubmit(event) {
    event.preventDefault();
    const newItems= {id: items.length + 1, description, quantity, packed: false};
    if(!description) return;
    handelAddItem(newItems);
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add to list</button>
    </form>
  );
}

function PackingList({items = initialItems}) {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function ListItem({ item }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.descriptions}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼You have X items on your list, and you already packed X (x%)</em>
    </footer>
  );
}
