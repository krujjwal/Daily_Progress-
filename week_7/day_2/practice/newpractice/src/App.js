import React, { Component } from 'react'
import Navbar from './Component/LandingPage/Navbar'


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
        <Navbar/>
        
      </div>
    )
  }
}
