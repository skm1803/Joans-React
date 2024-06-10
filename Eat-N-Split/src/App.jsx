import { useState } from 'react'
import './App.css'
import BillOweList from './components/BillOweList';
import AddFriend from './components/AddFriend';
import SplitBill from './components/SplitBill';


function App() {
  const [Frname, setName] = useState("");
  const [image, setImage] = useState("");
  const [friends, setFriends] = useState([
    {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
    },
    {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
    },
    {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
    },
])
function handelAddItem(newFriend) {
  setFriends([...friends, newFriend]);
}

function handelClick(id) {
  const newFriends = friends.filter((friend) => friend.id !== id);
}
  return (
    <div className='app'>
    <BillOweList friends={friends} newFriend={newFriend}/>
    <SplitBill/>
    <AddFriend Frname={Frname} setName={setName} setImage={setImage} image={image} handelAddItem={handelAddItem}/>
    </div>
  )
}

export default App
