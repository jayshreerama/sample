import React, { useCallback, useState } from 'react'

const UseCallBack = () => {
  const[count, setCount]=useState(0)
  const increment = useCallback(
    ()=>{
      setCount(count+1)
    },
    [count]
  )
  return (
    <div>
      <h1>UseCallBack</h1>
      <h3>Count:{count}</h3>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default UseCallBack
