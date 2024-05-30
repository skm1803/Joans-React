import React from "react";
export default function ListItem({ item, handelDelete, handelToggle }) {
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