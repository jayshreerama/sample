import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const[count, setCount]=useState(0)
  const Population = ()=>{
    return count*15
  }
  const memo = useMemo(()=>Population(count))
  return (
    <div>
      <h1>UseMemo</h1>
      <h2>Count:{count}</h2>
      <h2>Adding Population:{memo}</h2>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default UseMemo
