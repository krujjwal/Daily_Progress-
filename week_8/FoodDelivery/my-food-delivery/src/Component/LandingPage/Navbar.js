import React, { Component } from 'react'

import Mystyle from './Navbar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import SpeedIcon from '@material-ui/icons/Speed';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className={Mystyle.nav}>
                    <img src="/Assets/Swiggy-1594035877.jpeg" alt="picimg"/>

                    <select>
                        <option>New Delhi</option>
                        <option>Mumbai</option>
                        <option>Varanasi</option>
                        <option>Patna</option>
                        <option>Banglore</option>
                        <option>Chennai</option>
                    </select>

                    <SearchIcon className={Mystyle.icon1} />
                    <p>Search</p>

                    <SpeedIcon className={Mystyle.icon2}/>
                    <p>Offers</p>

                    <HelpOutlineIcon className={Mystyle.icon2}/>
                    <p>Help</p>

                    <PersonIcon className={Mystyle.icon2}/>
                    <p>Sign In</p>

                    <ShoppingCartIcon className={Mystyle.icon2}/>
                    <p>Cart</p>
                </div>

               
            </>
        )
    }
}
