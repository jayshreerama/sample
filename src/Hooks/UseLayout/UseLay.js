import React, { useLayoutEffect, useState } from 'react'

const useLay = () => {
    const[count, setCount] =useState(5)
    useLayoutEffect(()=>{
        document.title=`${count}`
    },[count])
  return (
    <div>
      <h1>UseLayoutEffect</h1>
      <h2>count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default useLay
