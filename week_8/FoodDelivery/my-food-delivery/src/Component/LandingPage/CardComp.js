
import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';
import Cstyle from './CardComp.module.css'



export default class CardComp extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     name:props.name
        // }
    }

    render() {
        return (
            <div>
                <div className={Cstyle.card1}>
                    <img src={this.props.imgsrc}  alt="cardImg"/>
                    <p className={Cstyle.cardp}>{this.props.title}</p>
                    <p className={Cstyle.type}>{this.props.name}</p>
                    <div className={Cstyle.card2}>
                        <p>{this.props.star} <StarIcon/> </p>
                        <p>{this.props.time}</p>
                        <p>{this.props.time}</p>
                    </div>
                    <div className={Cstyle.off}>
                        <p>{this.props.off}</p>
                        <p>{this.props.new}</p>
                    </div>

                    <button>QUICK VIEW</button>
                </div>
            </div>
        )
    }
}

