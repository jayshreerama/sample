import React from 'react'

const Javascript = () => {
    function clicked() {
        document.body.style.backgroundColor='red'
    }
    function up(){
        document.body.style.backgroundColor='green'
    }
    function down(){
        document.body.style.backgroundColor='orange'
    }
    function Mo(){
        document.body.style.backgroundColor='purple'
    }
    function Moo(){
        document.body.style.backgroundColor='pink'
    }
    const name="Dinesh Patil"
    const age=22
    
  return (
    <div>
      <center><h1>Hello Javascript</h1></center>
      <button onClick={clicked}>click to change the background color</button>
      <input type={"text"} onKeyUp={up} onKeyDown={down}></input>
      <br></br>
      <button onMouseOver={Mo} onMouseOut={Moo}>click</button>
      <br></br>
      <h1>My name is {name} and my age is {age}</h1>
      <h2>{`My name is ${name} and my age is ${age}`}</h2>
    </div>

  )
}

export default Javascript
