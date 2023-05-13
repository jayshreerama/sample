import React, { useEffect, useState } from 'react'
import './Fetching.css'


    const Fetching = ()=>{
        const[data, setData]=useState(null)
        useEffect(()=>{
            fetch("https://api.github.com/users")
            .then(res=>res.json())
            .then(data=>setData(data))
        })
    
  return (
    <div>
      {data && data.map((item)=>(
        <table key={item.id} width={'30%'}border={'1'}>
        <tr>
            <td>{item.id}</td>
            <td>{item.login}</td>
            <td><img src='{item.avatar_url}' alt='' height={'250px'} width={'300px'}></img></td>
        </tr>
        </table>
      ))}
    </div>
  )
}

export default Fetching
