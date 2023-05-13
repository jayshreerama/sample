import React, {useEffect,useRef,useState} from 'react'

const UseEffect = () => {
  const[name, setName]=useState("")
  const count = useRef(0)
  useEffect(()=>{
    return ()=>{
      count.current = count.current+1
    }
  })
  return (
    <div>
      <h1>UseRef</h1>
      <span>Name:</span>
      <input type='text' onChange={(e)=>setName(e.target.value)}></input>
      <h1>My Name is{name}</h1>
      <h1>Count:{count.current}</h1>
    </div>
  )
}

export default UseEffect
