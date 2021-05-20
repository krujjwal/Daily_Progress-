import React, { Component } from 'react'
import  './App.css'

export default class App extends Component {
  render() {
    return (
      <div class="class1">
          <div>
            <h1>Mobile Operating System</h1>
            <ul>
              <li>Android</li>
              <li>Blackberry</li>
              <li>iPhone</li>
              <li>Microsoft</li>
            </ul>
          </div>

          <div>
            <h1>Mobile Manufactureres</h1>
            <ul>
              <li>Samsung</li>
              <li>HTC</li>
              <li>Micromax</li>
              <li>Apple</li>
            </ul>
          </div>

          <div>
            <h1>Functional Component</h1>
            <div>
              <button style={{backgroundColor:"blue",border:"2px solid blue",borderRadius:"5px",padding:"10px",margin:"20px"}}>Join Us</button>
              <button style={{backgroundColor:"green",border:"2px solid green",borderRadius:"5px",padding:"10px",margin:"20px"}}>Setting</button>
            </div>

            <div>
              <button style={{backgroundColor:"yellow",border:"2px solid yellow",borderRadius:"5px",padding:"10px",margin:"20px"}}>Login</button>
              <button style={{backgroundColor:"crimson",border:"2px solid crimson",borderRadius:"5px",padding:"10px",margin:"20px"}}>Contact Us</button>
            </div>

            <div>
              <button  style={{backgroundColor:"green",border:"2px solid green",borderRadius:"5px",padding:"10px",margin:"20px"}}>Search</button>
              <button  style={{backgroundColor:"violet",border:"2px solid violet",borderRadius:"5px",padding:"10px",margin:"20px"}}>Help</button>
            </div>
            
            <div>
              <button  style={{backgroundColor:"red",border:"2px solid red",borderRadius:"5px",padding:"10px",margin:"20px"}}>Home</button>
              <button  style={{backgroundColor:"blue",border:"2px solid blue",borderRadius:"5px",padding:"10px",margin:"20px"}}>Download</button>
            </div>
          </div>

          <div>
            <h1>Static Card</h1>
            <div class="main">
              <div class="mCard">
                <div class="pro">
                  <p>PRO</p>
                </div>

                <div class="image">
                  <img src="https://randomuser.me/api/portraits/women/79.jpg"></img>
                </div>

              </div>
            </div>
          </div>
      </div>
      
    )
  }
}
