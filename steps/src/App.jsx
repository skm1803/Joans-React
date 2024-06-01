import { Children, useState } from 'react'
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

  function handelPrev() {
    if(count<=0) return
    setCount(count - 1)
  }
  function handelNext() {
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
        <Button bgColor='#7950f2' textColor='#fff'onClick={handelPrev} text='Previous'><span>👈</span>Previous</Button>
        <Button bgColor='#7950f2' textColor='#fff'onClick={handelNext}>Next<span>👉</span></Button>
      </div>
    </div>
  ) 
}

function Button({bgColor, textColor, onClick, children}) {
  return (
    <button style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>{children}</button>
  )
}