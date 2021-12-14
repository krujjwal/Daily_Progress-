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
                

                <div>
                <div className={Mystyle.top}>
                    <img src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" alt=""/>
                    <h4>Why GitHub??</h4>
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
                        // console.log(typeof (e))
                        
                        const a = `${e.avatar_url}`
                        return <>
                                <h1>{e.login}</h1>
                                <img src={a} alt=""/>
                                <button onClick={()=>{this.handleGetDetails(e.url)}}>Get Details</button>
                            </>
                    })
                }
                    </div>
                    <div className={Mystyle.box3}>
                        {/* {
                            this.state.ab.length?
                            console.log("hjg",this.state.ab[0].login)
                            :
                            null
                        } */}

                        <h1>
                            {this.state.ab.login}
                        </h1>

                        <img src={this.state.ab.avatar_url}/>
                    </div>
                </div>
            
                


             
                
                
            </div>

               
            </>
        )
    }
}
