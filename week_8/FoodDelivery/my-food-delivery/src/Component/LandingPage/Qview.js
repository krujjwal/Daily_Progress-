import React, { Component } from 'react'
import Qstyle from './Qview.module.css'
import StarIcon from '@material-ui/icons/Star';

export default class Qview extends Component {
    render() {
        return (
            <div>
                <div className={Qstyle.top}>
                    <div>
                        <img src="/Assets/SouthIndian_a5ivgy (1).jpeg" alt="resIMg"/>
                    </div>
                    <div className={Qstyle.top2}>
                        <p>Rasoi Restaurant</p>
                        <p>Indian,Chinese,Biryani</p>
                        <p>Fraser Road,patna</p>
                        <div>
                            4.0 <StarIcon/>
                            <p>100+ Ratings</p>
                        </div>

                        <div>
                            41 mins 
                            <p>Delivery Time</p>
                        </div>
                    </div>

                    <div className={Qstyle.top3}>
                        <p>20% OFF Up Too ₹50</p>
                        <p>Use Code TRYNEW</p>
                    </div>
                </div>
            </div>
        )
    }
}
