import React, { Component } from 'react'
import Navbar from './Component/LandingPage/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Component/LandingPage/Home'

export default class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <div>
        <Navbar/>
        <switch>
          <Route path="/" exact component={Home}/>
        </switch>
      </div>
      </BrowserRouter>
    )
  }
}
