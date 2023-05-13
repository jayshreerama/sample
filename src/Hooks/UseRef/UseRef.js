import React, { useState } from 'react'

const UseRef = () => {
    const[Name, setName] = useState('')
    

    
  return (
    <div>
      <h1>UseRef</h1>
      <input type='text' value={Name} onChange={(e)=>setName(e.target.value)}></input>
      <h1>MY name is {Name}</h1>
    </div>
  )
}

export default UseRef
