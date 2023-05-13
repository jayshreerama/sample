import React, { useState } from 'react'
import './Use.css'

const Use = () => {
    const[count, setCount]= useState(0)
    const[color, setColor]= useState('Purpler')
    const[bgcolor, setbgcolor]= useState('green')
    const[name, setName]= useState(null)
    const[cap, setCap]= useState('lowercase')

    function clicked(){
        setCount(count+1)
    }
  return (
    <div>
      <center><h1>UseState</h1></center>
      <h1 style={{color:`${color}`,background:`${bgcolor}`}}>{count}</h1>
      <button onClick={clicked}>Add Cart</button>
      <button onClick={()=>setColor('red')}>color</button>
      <button onClick={()=>setbgcolor('Black')}>Bgcolor</button>
      <br></br>
      <label htmlFor='name'>Name:</label>
      <input type={'text'} onChange={(e)=>setName(e.target.value)}></input>
    <h1 style={{textTransform:`${cap}`}}>My name is {name}</h1>
    
    </div>
  )
}

export default Use
