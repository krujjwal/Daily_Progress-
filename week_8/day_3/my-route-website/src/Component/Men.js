import React, { Component } from 'react'
import Mystyle from './RouteOnlineShop.module.css''



export default class Men extends Component {
    render() {
        return (
            <>


            <div className={Mystyle.men} >
                <div >
                <p>MENS COLLECTION</p>
                <button className={Mystyle.men1}>Shop Now</button>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/51ctUWf4hfL._SL1300_.jpg" alt=""/>
                <img src="https://fashionate.in/wp-content/uploads/2019/09/home-mens-collection.png" alt=""/>
            </div>
            </>
        )
    }
}


