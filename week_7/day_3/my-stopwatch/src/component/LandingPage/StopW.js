import React, { Component } from 'react'
import "./TouseHooks"



export default class StopW extends Component {
    
    constructor(props){
        super(props)
        this.state={
            countMs:0,
            countS : 0,
            countM:0,
            countH:0
        }
    }



    handleTime(){
        setTimeout(() => {
            console.log("hello world")
          }, 3000);
      
      }

      handleTimeI(){
            this.state.countMs++
        if (this.state.countMs==100) {
            this.setState({
                countMs :0,
                countS : this.state.countS+1

            })
        }

    }

    




      

    render() {
        return (
            <div>
                <h1>Stop Watch</h1>
                <button onClick={()=>{this.handleTime()}}>Click Here</button>
                <button onClick={()=>{this.handleTimeI()}}>Click Here For Time Interval</button>
                {/* <p>{this.state.countH}</p>
                <p>{this.state.countM}</p>
                // <p>{this.state.countS}</p>
                // <p>{this.state.countMs}</p> */}
                // <button onClick={()=> setCount(count+1)}>Update</button>
            </div>
        )
    }
}
