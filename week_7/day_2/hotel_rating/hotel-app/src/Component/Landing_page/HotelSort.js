import React, { Component } from 'react'
import "./Hotel_style.css"
import  './Hotel_info.js'
import info from './Hotel_info.js'


export default class HotelSort extends Component {
    constructor(props){
        super(props)
        this.state={
            star : ""
        }
    }

    handleStar=(e)=>{
        this.setState({
            star:e
        })
    }
        
    

    render() {
        return (
            <>
                <div>
                    <button onClick={()=>{this.handleStar(4)}}>More Than 4 Star</button>
                    <button onClick={()=>{this.handleStar(3)}} >More Than 3 Star</button>
                    <button onClick={()=>{this.handleStar(2)}}>More Than 2 Star</button>
                    <button onClick={()=>{this.handleStar(1)}}>More Than 1 Star</button>
                </div>

            
            {
                
                    info.map((e)=>{
                        
                        console.log(this.state.star)
                        
                        return(
                        <>


                            <div className="bodyM">
                                <div>
                                    <img src={e.pics} alt="randomimages" />
                                </div>
                                <div className="main">
                                    <div className="title">
                                        <h1>{e.hname}</h1>
                                        <h5>{e.Fname}</h5>
                                        <h6>{e.cost}</h6>
                                        <p>{e.min}</p>
                                        <p>Accept Online Payment Only</p>
                                        <h4>Order Online Now</h4>
                                    </div>
                                    <div className="star">    
                                        <h3>{e.star}</h3>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                        
                    })
            }
            </>
        )
    }
}
