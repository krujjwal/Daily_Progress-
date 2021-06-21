import React, { Component } from 'react'
import RouteOnlineShop from './Component/RouteOnlineShop'
import Women from './Component/Women'
import Men from './Component/Men'
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css'
import {Link} from 'react-router-dom'
import Navbar from './Component/Navbar'



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <switch>
        {/* <link to=""></link> */}
	<h1>Mac Test</h1>        
        <Link to="Women">Women</Link>
        <Link to="Men">Men</Link>
          <Route path="/" exact component={RouteOnlineShop}/>
          <Route path="/women" component={Women} />
          <Route path="/men" component={Men} />
        </switch>
      </div>
      </BrowserRouter>
    )
  }
}
