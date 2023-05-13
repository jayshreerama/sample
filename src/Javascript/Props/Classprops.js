import React, { Component } from 'react'

export default class Classprops extends Component {
  render() {
    return (
      <div>
        <h1>i'm {this.props.name} and i'm CEO of {this.props.company}</h1>
      </div>
    )
  }
}
