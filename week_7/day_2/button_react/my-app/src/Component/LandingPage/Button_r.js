import React, { Component } from 'react'

export default class Button_r extends Component {
    constructor(props){
        super(props)
        this.state={
            bt1:null,
            bt2:null,
            bt3:null,
            bt4:null,
            bt5:null,

            btc1:null,
            btc2:null,
            btc3:null,
            btc4:null,
            btc5:null,
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleChange1=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <button style={{backgroundColor:this.state.btc1}}>{this.state.bt1}</button>
                    <button style={{backgroundColor:this.state.btc2}}>{this.state.bt2}</button>
                </div>

                <div>
                <button style={{backgroundColor:this.state.btc3}}>{this.state.bt3}</button>
                <button style={{backgroundColor:this.state.btc4}}>{this.state.bt4}</button>
                </div>

                <button style={{backgroundColor:this.state.btc5}}>{this.state.bt5}</button>
                <div>
                    <input
                        placeholder="testing1"
                        onChange={this.handleChange}
                    
                        name="bt1"
                    />

                    <input
                        placeholder="color1"
                        onChange={this.handleChange1}
                    
                        name="btc1"
                />
                </div>

                <div>
                    <input
                        placeholder="testing2"
                        onChange={this.handleChange}
                    
                        name="bt2"
                />

                    <input
                        placeholder="color2"
                        onChange={this.handleChange1}
                    
                        name="btc2"
                    />
                </div>
                <div>
                    <input
                        placeholder="testing3"
                        onChange={this.handleChange}
                    
                        name="bt3"
                    />
                
                    <input 
                        placeholder ="color3"
                        onChange ={this.handleChange1}
                        name="btc3"
                    />
                </div>
                <div>
                <input 
                    placeholder ="testing4"
                    onChange ={this.handleChange}
                    name="bt4"
                />

                <input 
                    placeholder ="color4"
                    onChange ={this.handleChange1}
                    name="btc4"
                />
                </div>

                <div>
                <input 
                    placeholder ="testing5"
                    onChange ={this.handleChange}
                    name="bt5"
                />

                <input 
                    placeholder ="color5"
                    onChange ={this.handleChange1}
                    name="btc5"
                />
                </div>
            </div>
        )
    }
}
