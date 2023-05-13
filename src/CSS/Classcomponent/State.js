import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        this.state = {msg:"Welcome😊",
                        count:0,
                        color:"red",
                        bgcolor:"green"}
    
    }
    clicked(){
        this.setState({msg:"Thank you❤"})
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    decrement(){
        this.setState({count:this.state.count-1})
    }
    color(){
        this.setState({color:"blue"})
    }
    bgcolor(){
        this.setState({bgcolor:"yellow"})
    }
  render() {
    return (
      <div>
        <h1 style={{color:this.state.color, background:this.state.bgcolor}}>{this.state.count}</h1>
        <h1>{this.state.msg}</h1>
        <button onClick={()=>this.clicked()}>click</button>
        <button onClick={()=>this.increment()}>increment</button>
        <button onClick={()=>this.decrement()}>decrement</button>
        <button onClick={()=>this.color()}>color</button>
        <button onClick={()=>this.bgcolor()}>bgcolor</button>
      </div>
    )
  }
}
