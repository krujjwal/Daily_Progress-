import React, { Component } from 'react'
import finallyperson from './hotelinfo'

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            ujjwal:"",
            ankit:"",
        }
        
    }
    

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,

            // name:e.target.value,
        })
    }

    

    render() {
        return (
            <div>
                <p>{this.state.ujjwal}</p>
                <p>{this.state.ankit}</p>
                <input
                    placeholder="testing1"
                    onChange={this.handleChange}
                    name="ujjwal"
                    className = "cl1"
                />
                 <input
                    placeholder="testing2"
                    onChange={this.handleChange}
                    name="ankit"
                    
                />
                {
                    finallyperson.map((e)=>{
                        return(
                        <>
                        <p>{e.name}</p>
                        <p>{e.lastname}</p>
                        <p>{e.age}</p>
                        </>
                        )
                    })
                }
            </div>
        )
    }
}
