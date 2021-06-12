import React, { Component } from 'react'
import Shopstyle from './RouteOnlineShop.module.css'
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'

export default class RouteOnlineShop extends Component {
    render() {
        return (
            <>
                <div className={Shopstyle.nav}>
                    <img src="https://cdn.shopify.com/s/files/1/0099/9802/files/thumbnail_manitobah-logo-new.png?v=1566927683" alt=""/>
                    <p>women</p>
                    <p> Men</p>
                    <p>Kids</p>
                    <p>Mitts And Gloves</p>
                    <p>Storyboots</p>
                    <p>Clearance</p>
                    <p>Help</p>
                    <a className={Shopstyle.navA} ><FindInPageRoundedIcon/></a>
                    <a className={Shopstyle.navB}><PersonOutlineIcon/></a>
                    <a className={Shopstyle.navC}><ShoppingCartIcon/></a>
                </div>

                <div className={Shopstyle.bImg}>
                    <p>Light. Comfortable. Cute.</p>
                </div>
            </>
        )
    }
}
