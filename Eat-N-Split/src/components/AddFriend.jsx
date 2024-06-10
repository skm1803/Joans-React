import React, { useState } from "react";
import Button from "./Button";
export default function AddFriend({ Frname, setName, image, setImage, handelAddItem}) {

function handelSubmit(e) {
  e.preventDefault();
  if (!Frname || !image) return;
  const newFriend = {
    id: Date.now(),
    name: Frname,
    image,
    balance: 0,
  };
    handelAddItem(newFriend);
}
    return (
        <form className="form-add-friend" onSubmit={handelSubmit} >
          <label>👫 Friend name</label>
          <input
            type="text"
            value={Frname}
            onChange={(e) => setName(e.target.value)}
          />
    
          <label>🌄 Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
    
          <Button>Add</Button>
        </form>
      );
    
}