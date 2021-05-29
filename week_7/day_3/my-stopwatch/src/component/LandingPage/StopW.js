import React, { Component } from 'react'




export default class StopW extends Component {
    
    constructor(props){
        super(props)
        this.state={
            countMs:0,
            countS : 0,
            countM:0,
            countH:0,
            miliS:""
        }
    }



    handleTime(){
        setTimeout(() => {
            console.log("hello world")
          }, 3000);
      
      }

      handleTimeI(){
        if(this.state.countMs==60){
            this.setState ({
                countS: this.state.countS +1,
                countMs: 0
        })
         
        }
        else{
        setInterval(()=>{
            this.setState ({
                countMs: this.state.countMs +1
        })
         
        },1)
        }

        // this.setState({
        //     countS : this.state.countS+1
        // })
    }
        


    render() {
        return (
            <div>
                <h1>Stop Watch</h1>
                <button onClick={()=>{this.handleTime()}}>Click Here</button>
                <button onClick={()=>{this.handleTimeI()}}>Click Here For Time Interval</button>
                <h2>{this.state.countMs}</h2>
                <h2>{this.state.countS}</h2>
            </div>
        )
    }
}
