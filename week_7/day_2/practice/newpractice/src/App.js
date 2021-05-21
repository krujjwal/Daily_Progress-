import React, { Component } from 'react'
import Test from './test'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"anuj"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Test/>
      </div>
    )
  }
}
