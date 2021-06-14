import React, { Component } from 'react'
import Mystyle from './Men.module.css'
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class Navbar extends Component {
    render() {
        return (
            <div className={Mystyle.nav} >
                            
                <img src="https://cdn.shopify.com/s/files/1/0099/9802/files/thumbnail_manitobah-logo-new.png?v=1566927683" alt=""/>
                <p> Women</p>
                <p>Men</p>
                <p>Kids</p>
                <p>Mitts And Gloves</p>
                <p>Storyboots</p>
                <p>Clearance</p>
                <p>Help</p>
                <a className={Mystyle.navA} ><FindInPageRoundedIcon/></a>
                <a className={Mystyle.navB}><PersonOutlineIcon/></a>
                <a className={Mystyle.navC}><ShoppingCartIcon/></a>
                    
            
            </div>
        )
    }
}
