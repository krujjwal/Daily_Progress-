import React, { Component } from 'react'
import Hsytle from './Home.module.css'
import CardComp from './CardComp.js'

export default class Home extends Component {
    render() {
        return (
            <>
                 <div className={Hsytle.slide1}>
                    <img src="/Assets/f60baea9f2c338bfcd3385da98e733f1.jpeg" alt="picimg" />
                    <img src="/Assets/EhpA79kU0AEwShb.jpeg" alt="imgpic"/>
                    <img src="/Assets/d5f546d0e2b7747f42fe987f87fa1f5e.png" alt="picimg"/>
                    <img src="/Assets/upto-50-off-on-top-restaurants-coupon.jpeg" alt="picimg"/>
                </div>

                <div className={Hsytle.slide2}>
                    <p>52<span>Restaurants</span></p>
                </div>

                <div className={Hsytle.cardstyle}>
                        <CardComp imgsrc='/Assets/unnamed.jpeg' name='Indian,Chinese' title='Rasoi Restaurant'
                                star='4.5' time='40min' price='₹500 For Two' off='20% OFF' new='Use TryNew'/>

                        <CardComp imgsrc='/Assets/SouthIndian_a5ivgy.jpeg' name='South Indian' title='The South Zone '
                                star='4.0' time='30min' price='₹350 For Two' off='30% OFF' new='Use TryNew'/>

                        <CardComp imgsrc='/Assets/chole_bhature_pakwan_520_070815033739.webp' name='North Indian,Biryani' title='Desi Tadka Restaurant'
                                star='3.5' time='50min' price='₹400 For Two' off='15% OFF' new='Use TryNew'/>

                        <CardComp imgsrc='/Assets/32922628d4b01b32d31eb9d42afc0f55.jpeg' name='Biryani,Mughlai Chicken' title='The Biryani Story'
                                star='3.8' time='40min' price='₹700 For Two' off='25% OFF' new='Use TryNew'/>
                </div>

                <div className={Hsytle.cardstyle}>
                        <CardComp imgsrc='/Assets/image.jpeg' name='Sweets,Confectinery' title='Backery House'
                                star='4.8' time='80min' price='₹900 For Two' off='10% OFF' new='Use TryNew'/>

                        <CardComp imgsrc='/Assets/download.jpeg' name=',NorthIndian,South Indian' title='RajDarbar Restaurants'
                                star='4.0' time='45min' price='₹450 For Two' off='30% OFF' new='Use TryNew'/>

                        <CardComp imgsrc='/Assets/87775484_2423209061324295_8080038552815009792_o.jpeg' name='Chinese,Tandoor' title='Breeze Restro'
                                star='4.5' time='30min' price='₹400 For Two' off='25% OFF' new='Use TryNew'/>

                        <CardComp imgsrc='/Assets/52478948.jpeg' name='Indian,Chinese' title='Foodies Point'
                                star='4.2' time='60min' price='₹800 For Two' off='35% OFF' new='Use TryNew'/>
                </div>

                <div>

                </div>

                <div className={Hsytle.cardstyle}>
                        <CardComp imgsrc='/Assets/unnamed.jpeg' name='Indian,Chinese' title='Rasoi Restaurant'
                                star='4.5' time='40min' price='₹500 For Two' off='20% OFF' new='Use TryNew'/>

                        <CardComp imgsrc='/Assets/SouthIndian_a5ivgy.jpeg' name='South Indian' title='The South Zone '
                                star='4.0' time='30min' price='₹350 For Two' off='30% OFF' new='Use TryNew'/>

                        <CardComp imgsrc='/Assets/chole_bhature_pakwan_520_070815033739.webp' name='North Indian,Biryani' title='Desi Tadka Restaurant'
                                star='3.5' time='50min' price='₹400 For Two' off='15% OFF' new='Use TryNew'/>

                        <CardComp imgsrc='/Assets/32922628d4b01b32d31eb9d42afc0f55.jpeg' name='Biryani,Mughlai Chicken' title='The Biryani Story'
                                star='3.8' time='40min' price='₹700 For Two' off='25% OFF' new='Use TryNew'/>
                </div>

                <div className={Hsytle.footer}>
                    <div>
                        <h3>COMPANY</h3>
                        <p>About Us</p>
                        <p>Team</p>
                        <p>Carrers</p>
                        <p>Swiggy Blog</p>
                        <p>Bug Bounty</p>
                        <p>Swiggy Super</p>
                    </div>

                    <div>
                        <h3>CONTACT</h3>
                        <p>Help{`&`}Support</p>
                        <p>Partner With Us</p>
                        <p>Ride With Us</p>
                    </div>

                    <div>
                        <h3>LEGAL</h3>
                        <p>Terms{`&`}Conditions </p>
                        <p>Refund {`&`}Cancellations</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Offer Policy</p>
                        <p>Phising{`&`}Fraud</p>
                    </div>

                   

                    <div>
                        <img src="/Assets/download-app-store-get-google-play-black-button-icons-old-painted-wooden-background-kiev-ukraine-february-212803914.jpeg" alt="image"/>
                    </div>
                </div>
            </>
        )
    }
}
