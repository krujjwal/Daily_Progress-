import React, { Component } from 'react'
import Style from './Flipcart.module.css'

export default class Flipcart extends Component {
    render() {
        return (
            <>
                {/* <div className={Style.ap}>
                    <h1>hello</h1>
                </div> */}
                <div>
                    <div className={Style.top}>
                        <table>
                            <tr>
                                <td><img src="https://content.couponspy.in/public/shop/240.jpg" /></td>
                                <td><input placeholder="Search for products brand and more"/></td>
                                <td><button>Login</button></td>
                                <td>More ^</td>
                                <td><img src="https://cdn.shopify.com/app-store/listing_images/2b9bba2ab61edabc6d836f14f9377671/icon/CL+Lhc30lu8CEAE=.png"/></td>
                                <td><p>Cart</p></td>
                            </tr>
                        </table>
                    </div>

                    {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{width:"400px",height:"250px"}}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://picsum.photos/id/237/200/300" className="d-block w-100" alt="..." style={{width:"400px",height:"250px"}} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/seed/picsum/200/300" className="d-block w-100" alt="..." style={{width:"400px",height:"250px"}} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/536/354" className="d-block w-100" alt="..." style={{width:"400px",height:"250px"}} />
                            </div>
                        </div>
                    </div> */}
                </div>
            </>

            )
        }
    }
