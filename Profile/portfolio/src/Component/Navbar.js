import React, { Component } from 'react'
import Mystyle from './Navbar.module.css'



export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className={Mystyle.nav}> 
                    <p>About</p>
                    <p>Experience</p>
                    <p>Work</p>
                    <p>Contact</p>
                    <p>Resume</p>
                </div>
            </>
        )
    }
}
