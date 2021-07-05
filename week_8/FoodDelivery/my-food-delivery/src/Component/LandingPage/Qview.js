import React, { Component } from 'react'
import Qstyle from './Qview.module.css'
import StarIcon from '@material-ui/icons/Star';


export default class Qview extends Component {
    constructor(){
        super();
            this.state={
            arrHotelName:[],
            arrPriceName:[],
            arrSum:0
        }
        
    }

    handleclick(a,b){
        
        // this.setState({
        //     arrHotelName.push(a)
        // })
        this.state.arrHotelName.push(a);
        this.state.arrPriceName.push(b);
        this.forceUpdate()
    }

    // handleDetails(){
    //     this.setState({
            
    //     })
    // }

    // handleclick2(a,b){
    //     this.state.arrHotelName.push(a);
    //     this.state.arrPriceName.push(b)
    // }

    // handleclick3(a,b){
    //     this.state.arrHotelName.push(a);
    //     this.state.arrPriceName.push(b)
    // }

    // handleclick4(a,b){
    //     this.state.arrHotelName.push(a);
    //     this.state.arrPriceName.push(b)
    // }

    // handleclick5(a,b){
    //     this.state.arrHotelName.push(a);
    //     this.state.arrPriceName.push(b)
    // }

    // handleclick6(a,b){
    //     this.state.arrHotelName.push(a);
    //     this.state.arrPriceName.push(b)
    // }

    // handleclick7(a,b){
    //     this.state.arrHotelName.push(a);
    //     this.state.arrPriceName.push(b)
    // }

    // handleclick8(a,b){
    //     this.state.arrHotelName.push(a);
    //     this.state.arrPriceName.push(b)
    // }


    render() {
        console.log(this.state.arrHotelName)
        return (
            <div>
                <div className={Qstyle.top}>
                    <div>
                        <img src="/Assets/SouthIndian_a5ivgy (1).jpeg" alt="resIMg"/>
                    </div>
                    <div className={Qstyle.top2}>
                        <p className={Qstyle.top21}>Rasoi Restaurant</p>
                        <p className={Qstyle.top22}>Indian,Chinese,Biryani</p>
                        <p className={Qstyle.top23}>Fraser Road,patna</p>
                        <div className={Qstyle.starbar}>
                            <div className={Qstyle.starbar1}>
                                4.0 <StarIcon/>
                                <p>100+ Ratings</p>
                            </div>

                            <div className={Qstyle.starbar2}>
                                41 mins 
                                <p>Delivery Time</p>
                            </div>

                            <div className={Qstyle.starbar3}> 
                                <p>₹250</p>
                                <p>Cost for Two</p>
                            </div>
                        </div>
                    </div>

                    <div className={Qstyle.top3}>
                        <p>20% OFF UpToo ₹50</p>
                        <p>Use Code TRYNEW</p>
                    </div>
                </div>

                <div className={Qstyle.list}>
                    <div className={Qstyle.list1}>
                        <p>Reccommended</p>
                        <p>Starter</p>
                        <p>Soup</p>
                        <p>Main Course</p>
                        <p>Non-Veg</p>
                        <p>Curry</p>
                        <p>Desserts</p>
                    </div>

                    <div className={Qstyle.list2}>
                        <p className={Qstyle.headF}>Reccomended</p>
                        <p className={Qstyle.list22}>Ghar ki Thali</p>
                        <p className={Qstyle.list23}>₹250</p>
                        <p className={Qstyle.list23}>Rice,Dal,Seasonal Veg,Tawa Roti,salad,sweet</p>
                        <button onClick={()=>{this.handleclick('Ghar ki Thali:250','250')}} >ADD</button>

                        <div>
                            <p className={Qstyle.list22}>Aloo Paratha</p>
                            <p className={Qstyle.list23}>₹50 for one</p>
                            <button onClick={()=>{this.handleclick('Aloo Paratha:50','50')}} >ADD</button>
                        </div>

                        <div>
                            <p className={Qstyle.list22}>Chole Bhature</p>
                            <p className={Qstyle.list23}>90</p>
                            <p className={Qstyle.list23}>2 pc Bhature,chole</p>
                            <button onClick={()=>{this.handleclick('Chole Bhature:90','90')}}>ADD</button>
                        </div>

                        <div>
                            <p className={Qstyle.list22}>Paneer Butter Masala</p>
                            <p className={Qstyle.list23}>149</p>
                            <p className={Qstyle.p}>Half paneer butter masala</p>
                            <button onClick={()=>{this.handleclick('Paneer Butter Masala:149','149')}}>ADD</button>
                        </div>

                        <div>
                            <p className={Qstyle.headF}>Thali</p>
                            <p className={Qstyle.list22}>Ghar Ki Thali</p>
                            <p className={Qstyle.list23}>250</p>
                            <p className={Qstyle.p}>Rice,Dal,Seasonal Veg,Tawa Roti</p>
                            <button onClick={()=>{this.handleclick('Ghar Ki Thali:250','250')}}>ADD</button>
                        </div>

                        <div>
                            <p className={Qstyle.headF}>Dessert</p>
                            <p className={Qstyle.list22}>Gulab Jamun</p>
                            <p className={Qstyle.list23}>60 2pc</p>
                            <button onClick={()=>{this.handleclick('Gulab Jamun:60','60')}}>ADD</button>
                        </div>

                        <div>
                            <p className={Qstyle.list22}>Rasmalai</p>
                            <p className={Qstyle.list23}>90 1 pc</p>
                            <button onClick={()=>{this.handleclick('Rasmalai:90','90')}}>ADD</button>
                        </div>

                        <div>
                            <p className={Qstyle.list22}>Lassi</p>
                            <p className={Qstyle.lassi}>60 per Glass</p>
                            <button onClick={()=>{this.handleclick('Lassi:60','60')}}>ADD</button>
                        </div>
                    </div>

                    <div>
                        <p className={Qstyle.cart}>Cart</p>

                        <ul className={Qstyle.cart22}>
                        {
                            
                            this.state.arrHotelName.length?
                            this.state.arrHotelName.map((e)=>(
                                
                                    <p>
                                        {e}
                                    </p>
                                
                                
                               
                            ))

                            :"abc"

                            }

                            
                            
                        
                    
                    </ul>

                    <p className={Qstyle.cart2}>

                        {
                            this.state.arrPriceName.length?
                            this.state.arrPriceName.map((e)=>(
                                <p>
                                    Total={e}
                                </p>
                            ))

                            :"Total=0"
                        }

                    </p>

                    <button className={Qstyle.cart2} >Proceed</button>
                        

                    </div>
                </div>
            </div>
        )
    }
}
