import { useState } from "react";
import "./App.css";

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

function Logo() {
  return <h1>🌴Far Away 💼</h1>;
}

function Form({ handelAddItem }) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmit(event) {
    event.preventDefault();
    const newItems = { id: new Date() + 1, description, quantity, packed: false };
    if (!description) return;
    setDescription("");
    setQuantity(1);
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

function PackingList({ items, handelDelete, handelToggle,reset }) {
const [sort, setSortBy] = useState('input')
let sortedItems;
if(sort === 'description'){
  sortedItems = [...items].sort((a,b)=> a.description.localeCompare(b.description))
}
else if(sort === 'packed'){
  sortedItems = [...items].sort((a,b)=> a.packed - b.packed)
}
else{
  sortedItems = items
}
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <ListItem key={item.id} item={item} handelDelete={handelDelete} handelToggle={handelToggle} />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e)=>setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>sort by packed status</option>
          </select>
    <button onClick={reset}>Clear List</button>
    </div>
    </div>
  );
}


function ListItem({ item, handelDelete, handelToggle }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={() => handelToggle(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handelDelete(item.id)}>❌</button>
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
