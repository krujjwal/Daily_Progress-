import React, { Component } from 'react'
import Button_r from './Component/LandingPage/Button_r'

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
        <Button_r/>
        
      </div>
    )
  }
}

