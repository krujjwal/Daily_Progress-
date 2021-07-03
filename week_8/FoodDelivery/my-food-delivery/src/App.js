import React, { Component } from 'react'
import Navbar from './Component/LandingPage/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Component/LandingPage/Home'
import Qview from './Component/LandingPage/Qview'
import QviewR2 from './Component/LandingPage/QviewR2'
import QviewR3 from './Component/LandingPage/QviewR3'
import QviewR4 from './Component/LandingPage/QviewR4'
import QviewR5 from './Component/LandingPage/QviewR5'
import QviewR6 from './Component/LandingPage/QviewR6'
import QviewR7 from './Component/LandingPage/QviewR7'
import QviewR8 from './Component/LandingPage/QviewR8'
import QviewR9 from './Component/LandingPage/QviewR9'
import QviewR10 from './Component/LandingPage/QviewR10'
import QviewR11 from './Component/LandingPage/QviewR11'
import QviewR12 from './Component/LandingPage/QviewR12'

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
            <Route path="/restaurant2" component={QviewR2} />
            <Route path="/restaurant3" component={QviewR3} />
            <Route path="/restaurant4" component={QviewR4} />
            <Route path="/restaurant4" component={QviewR4} />
            <Route path="/restaurant5" component={QviewR5} />
            <Route path="/restaurant6" component={QviewR6} />
            <Route path="/restaurant7" component={QviewR7} />
            <Route path="/restaurant8" component={QviewR8} />
            <Route path="/restaurant9" component={QviewR9} />
            <Route path="/restaurant10" component={QviewR10} />
            <Route path="/restaurant11" component={QviewR11} />
            <Route path="/restaurant12" component={QviewR12} />
          </switch>
        </div>
      </BrowserRouter>
    )
  }
}
