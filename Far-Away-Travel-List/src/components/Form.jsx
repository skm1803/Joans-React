import React, { useState } from "react";

export default function Form({ handelAddItem }) {
    
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