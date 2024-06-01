import { useState } from 'react'
import './App.css'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Steps />
  )
}

function Steps() {
  const[count, setCount] = useState(0)

  function handePrev() {
    if(count<=0) return
    setCount(count - 1)
  }
  function handeNext() {
    if(count>=2) return
    setCount(count + 1)
  }
  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={count>=0?'active':{}}>1</div>
        <div className={count>=1?'active':{}}>2</div>
        <div className={count>=2?'active':{}}>3</div>
      </div>
      <div className='message'>
        Steps {count+1}:{messages[count]}
      </div>
      <div className='buttons'>
        <button className={count>=1?'active':{}}onClick={handePrev}>Previous</button>
        <button className={count<=1?'active':{}} onClick={handeNext}>Next</button> 
      </div>

    </div>
  )
}
