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
                                <td><img src="https://content.couponspy.in/public/shop/240.jpg" alt ="image" /></td>
                                <td><input placeholder="Search for products brand and more"/></td>
                                <td><button>Login</button></td>
                                <td>More ^</td>
                                <td><img src="https://cdn.shopify.com/app-store/listing_images/2b9bba2ab61edabc6d836f14f9377671/icon/CL+Lhc30lu8CEAE=.png"/></td>
                                <td><p>Cart</p></td>
                            </tr>
                        </table>
                    </div>

                    <div className={Style.top2}>
                        <table>
                            <tr>
                                <td>
                                    <div className={Style.top21}>
                                        <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2019/09/Flipkart-BBD.jpg"  />
                                        <p>Top Offers</p>
                                    </div>
                                </td>

                                <td>
                                    <div className={Style.top22}>
                                        <img src="https://2.wlimg.com/product_images/bc-full/2020/11/8134454/surf-excel-matic-liquid-detergent-1605703173-5635231.jpeg" />
                                        <p>Grocery</p>
                                    </div>        
                                </td>
                                    
                                <td>
                                    <div className={Style.top23}>
                                        <img src=" https://www.searchpng.com/wp-content/uploads/2019/02/HUAWEI-P20-715x856.png"/>
                                        <p>Mobiles</p>
                                    </div>
                                </td>

                                <td>
                                    <div className={Style.top24}>
                                        <img src="https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/flipkart-fashion-18-01-2021.jpg" />
                                        <p>Fashion^</p>
                                    </div>    
                                </td>

                                <td>
                                    <div className={Style.top25}>
                                        <img src ="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_260,w_260/v1605338532/Croma%20Assets/Computers%20Peripherals/Laptop/Images/8951115841566.png" />
                                        <p>Electronics</p>
                                    </div>
                                    </td>
                                <td>
                                    <div className={Style.top26}>
                                        <img src="https://www.pngitem.com/pimgs/m/248-2483369_single-sofa-png-transparent-background-png-download.png" />
                                        <p>Homes</p>
                                    </div>
                                    </td>
                                <td>
                                    <div className={Style.top27} >
                                        <img src="https://www.pngjoy.com/pngm/369/6844022_home-appliances-png-speed-queen-white-commercial-prep.png"/>
                                        <p>Appliances</p>
                                    </div>
                                    </td>
                                <td>
                                    <div className={Style.top28}>
                                        <img src="https://cdn.thinglink.me/api/image/792008968430944257/1024/10/scaletowidth"/>
                                        <p>Travel</p>    
                                    </div>
                                </td>
                                <td>
                                    <div className={Style.top29}>
                                        <img src="https://pngimg.com/uploads/teddy_bear/teddy_bear_PNG14.png" />
                                        <p>Beauty,Toys And More</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
                        <div className="carousel-inner" className={Style.carouselP}>
                            <div className="carousel-item active"  >
                                <img src="https://github.com/aadishjain1946/flipkartclone/blob/master/assets/images/slider/slider2.jpg?raw=true" className="d-block w-100" alt="..."  />
                            </div>
                            <div className="carousel-item"  >
                                <img src="https://github.com/aadishjain1946/flipkartclone/blob/master/assets/images/slider/slider1.jpg?raw=true" className="d-block w-100" alt="..."  />
                            </div>
                            <div className="carousel-item"  >
                                <img src="https://github.com/aadishjain1946/flipkartclone/blob/master/assets/images/slider/slider4.jpg?raw=true" className="d-block w-100" alt="..."  />
                            </div>

                            <div className="carousel-item"  >
                                <img src="https://github.com/aadishjain1946/flipkartclone/blob/master/assets/images/slider/slider5.jpg?raw=true" className="d-block w-100" alt="..."  />
                            </div>
                        </div>
                    </div>

                    <div className={Style.top3}>
                        <p>Deal Of The Day</p>
                        <button>VIEW ALL</button>
                    </div>

                    <div className={Style.top4}>
                        <div>
                            <img src="https://www.compareprix.in/images/product/large/flipkart-smartbuy-ms212n-cordless-trimmer-large.jpeg" />
                            <p>Best Trimmers</p>
                            <p>From ₹749</p>
                            <p>By Vega,Havells,Nova</p>
                        </div>

                        <div>
                            <img src="https://www.toileteries.net/pcat-gifs/products-small/liquid-hand-wash.jpg" />
                            <p>Best Trimmers</p>
                            <p>From ₹749</p>
                            <p>By Vega,Havells,Nova</p>
                        </div>

                        <div>
                            <img src="https://www.compareprix.in/images/product/large/flipkart-smartbuy-ms212n-cordless-trimmer-large.jpeg" />
                            <p>Best Trimmers</p>
                            <p>From ₹749</p>
                            <p>By Vega,Havells,Nova</p>
                        </div>

                        <div>
                            <img src="https://www.compareprix.in/images/product/large/flipkart-smartbuy-ms212n-cordless-trimmer-large.jpeg" />
                            <p>Best Trimmers</p>
                            <p>From ₹749</p>
                            <p>By Vega,Havells,Nova</p>
                        </div>

                        <div>
                            <img src="https://www.compareprix.in/images/product/large/flipkart-smartbuy-ms212n-cordless-trimmer-large.jpeg" />
                            <p>Best Trimmers</p>
                            <p>From ₹749</p>
                            <p>By Vega,Havells,Nova</p>
                        </div>
                    </div>

                    <div className={Style.top5} >
                        <img src='https://github.com/aadishjain1946/flipkartclone/blob/master/assets/images/slider/slidersmall/slider1.jpg?raw=true'/>
                        <img src="https://github.com/aadishjain1946/flipkartclone/blob/master/assets/images/slider/slidersmall/slider2.jpg?raw=true" />
                        <img src ="https://github.com/aadishjain1946/flipkartclone/blob/master/assets/images/slider/slidersmall/slider5.jpg?raw=true" />
                    
                    </div>

                    <div className={Style.top6}>
                        <img src="https://github.com/aadishjain1946/flipkartclone/blob/master/assets/images/slider/slider3.jpg?raw=true"/>
                    </div>

                    <div className={Style.top7} >
                        <p>Top Stories:<span>Brand Directory</span></p>
                        <p className={Style.top8}>Most Search For On Flipkart:
                            <span>
                            TV AND Appliances Super Saver Days SaleTV AND Appliances Shop From Home DaysGrand Home Appliances SaleFlipkart Super Cooling DaysBig Screen TelevisionsTV AND Large Appliances Big Savings Day SaleAkshaya Tritiya OffersEd A Mamma ClothingBooksFlipkart Electronics: TV AND Home Appliances SaleFlipkart Cooling DaysAC Cooling Days 2021Refrigerator Cooling Days 2021Grand Kitchen AND Home Appliances SaleStreak SunglassesGold CoinsFlipkart PlusFlipkart Super CoinFlipkart COVID-19 InsuranceFlipkart Help CentreFlipkart Track OrdersFlipkart Manage OrdersFlipkart Return OrdersContact LensesFlipkart Gift Cards StoreSuper Fan ShowSareesFlipkart Axis Bank Credit CardFlipkart VideosFlipkart Pay LaterRedmi 8Honor 20iOPPO K1Flipkart Axis Bank Credit CardEarringsMens WatchesSilver CoinsJewelleryWatchesGold CoinMangalsutraSunglassesMi SunglassesBackpacksRay Ban Sunglasses

                            </span>
                        </p>
                    </div>

                </div>

                <div className={Style.top9} >
                    <div className={Style.top91}>
                        <h6>ABOUT</h6>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Flipkart Stories</p>
                        <p>Press</p>
                        <p>Flipkart WholeSale</p>
                    </div>

                    <div className={Style.top91}>
                        <h6>HELP</h6>
                        <p>Payments</p>
                        <p>Shipping</p>
                        <p>Cancellations  Returns</p>
                        <p>FAQs</p>
                        <p>Report Infringement</p>
                    </div>

                    <div className={Style.top91}>
                        <h6>POLICY</h6>
                        <p>Return Policy</p>
                        <p>Terms Of Use</p>
                        <p>Security</p>
                        <p>Privacy</p>
                        <p>Sitemap</p>
                        <p>EPR Compliance</p>
                    </div>

                    <div className={Style.top91}>
                        <h6>SOCIAL</h6>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>YouTube </p>
                    </div>
                </div>

            </>

            )
        }
    }
