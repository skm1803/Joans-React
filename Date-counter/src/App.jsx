import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DateCounter />
    </>
  )
}

export default App

function DateCounter() {
  const [date, setDate] = useState(new Date())
 const [range, setRange] = useState(0)
 const [count, setCount] = useState(0)
function handelReset(){
  setDate(new Date())
  setCount(0)
  setRange(0)
} 
  return (
    <div>
      <input type="range" min={0} max={10} value={range} onChange={(e) => setRange(Number(e.target.value))}/> 
      <div>Steps:{range}</div>
      <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
      <h1>{date.toDateString()}</h1>
      <button onClick={() => setDate(new Date(date.getTime() +( range+count) * 86400000))}>Add Days</button>
    {count!=0 || range!=0?<button onClick={handelReset}>Reset</button>:null}
    </div>
  )
}