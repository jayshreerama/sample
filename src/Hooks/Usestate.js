import React, { useState } from 'react'

const Usestate = () => {
    const[count, setCount]=useState(0)
    function clicked(){
        setCount(count+1)
    }
    function click(){
        setCount(count-1)
    }
  return (
    <div>
      <center><h1>Usestate</h1></center>
      <h1>{count}</h1>
      <button onClick={clicked}>Increment</button>
      <button onClick={click}>Decrement</button>
    </div>
  )
}

export default Usestate
