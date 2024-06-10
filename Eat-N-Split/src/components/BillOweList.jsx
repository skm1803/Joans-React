import React, { useState } from "react"

export default function BillOweList({ friends, handelClick}) {
    
    
    return (
        <div className="sidebar">
        <ul>
            {friends.map(friend => (
            <li key={friend.id}>
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.name}</h3>
                    {friend.balance>=0? <p className="green">Credited By  {friend.balance}</p>:<p className="red">Loan By {friend.balance}</p>}
                <button className="button" onClick={()=>handelClick(friend.id)}>Select</button>
            </li>
            ))}
        </ul>
        </div>
    )
    }