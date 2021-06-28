import React, { Component } from 'react'
import Navbar from './Component/LandingPage/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Component/LandingPage/Home'
import Qview from './Component/LandingPage/Qview'
// import CardComp from './Component/LandingPage/CardComp'
// import { Card } from '@material-ui/core'

export default class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Navbar/>
          
          {/* <CardComp/> */}
          <switch>
            <Route path="/" exact component={Home}/>
            <Route path="/restaurant" component={Qview} />
          </switch>
        </div>
      </BrowserRouter>
    )
  }
}
