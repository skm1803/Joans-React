import React, { useState } from 'react';
import ListItem from './ListItem';

export default function PackingList({ items, handelDelete, handelToggle,reset }) {
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