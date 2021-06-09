import React, { Component } from 'react'
import axios from 'axios'
import Mystyle from './GitProjapi.module.css'

export default class GitProjapi extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            data :[]

        }
    }

    handleChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    handleClick(){
        // This is placed inside 
        axios.get(`https://api.github.com/search/users?q=${this.state.username}`)
        .then(res => {
            this.setState({
                data:res.data.items
            })
           
        })
        .catch(error=>console.log(error))
    }

    // handleGetDetails(){
    //     // axios.get(`${e.url}`)
    //     // .then(resp => {
    //     //     console.log(resp)
           
    //     // })
    //     // .catch(error=>console.log(error))
    //     console.log(this.state.b)
    // }


    render() {

        console.log("ujjwal",this.state.data)
        return (
            <div>
                <div className={Mystyle.top}>
                    <img src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"/>
                    <h4>Why GitHub?</h4>
                    <p>Team</p>
                    <p>Enterprise</p>
                    <p>Explore</p>
                    <p>Marketing</p>
                    <p>Pricing</p>
                    <input placeholder="Search"/>
                    <button>Sign in</button>
                    <button>Sign Up</button>
                </div>

                <div className={Mystyle.box}>
                    <div className={Mystyle.box1}>
                        <h1>you chose username:<span>{this.state.username}</span></h1>
                        <input type="text" placeholder="type userName" value={this.state.username} onChange={this.handleChange}/>
                        <button onClick={()=>{this.handleClick()}}>Submit</button>
                    </div>
                    <div className={Mystyle.box2}>
                    {
                    this.state.data.map((e)=>{
                        console.log(e)
                        
                        const a = `${e.avatar_url}`
                        return <>
                                <h1>{e.login}</h1>
                                <img src={a}/>
                                <button>Get Details</button>
                            </>
                    })
                }
                    </div>
                    <div className={Mystyle.box1}>
                        <h1></h1>
                    </div>
                </div>
            
                


                {/* {
                    this.state.img.map((e)=>{
                        return <img src={e}/>
                    })
                } */}
                
                
            </div>
        )
    }
}
