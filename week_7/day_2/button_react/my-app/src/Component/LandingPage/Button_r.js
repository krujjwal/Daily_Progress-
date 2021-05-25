import React, { Component } from 'react'

export default class Button_r extends Component {
    constructor(props){
        super(props)
        this.state={
            bt1:null,
            bt2:null,
            bt3:null,
            bt4:null,
            bt5:null
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleChange2=(e)=>{
        this.setState({
            
        })
    }

    render() {
        return (
            <div>
                
                <button>{this.state.bt1}</button>
                <button>{this.state.bt2}</button>
                <button>{this.state.bt3}</button>
                <button>{this.state.bt4}</button>
                <button>{this.state.bt5}</button>
                
                <input
                    placeholder="testing1"
                    onChange={this.handleChange}
                    onChange={this.handleChange2}
                    name="bt1"
                />

                <input
                    placeholder="testing1"
                    onChange={this.handleChange}
                    onChange={this.handleChange2}
                    name="bt2"
                />

                <input
                    placeholder="testing1"
                    onChange={this.handleChange}
                    onChange={this.handleChange2}
                    name="bt3"
                />

                <input
                    placeholder="testing1"
                    onChange={this.handleChange}
                    onChange={this.handleChange2}
                    name="bt4"
                />

                <input
                    placeholder="testing1"
                    onChange={this.handleChange}
                    onChange={this.handleChange2}
                    name="bt5"
                />
                <button>aa</button>
            </div>
        )
    }
}
