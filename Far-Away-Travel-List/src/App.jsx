import { useState } from "react";
import "./App.css";
const initialItems = [
  { id: 1, descriptions: "Passports", quantity: 2, packed: false },
  { id: 2, descriptions: "Socks", quantity: 12, packed: true },
];

export default function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </>
  );
}

function Logo() {
  return <h1>🌴Far Away 💼</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const newItems = {
    id: Date.now(),
    descriptions: description,
    quantity: quantity,
    packed: false,
  };
  function handelSubmit(event) {
    event.preventDefault();
    if(!description) return;
    
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

function PackingList() {
  return (
    <ul className="list">
      {initialItems.map((item) => (
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
