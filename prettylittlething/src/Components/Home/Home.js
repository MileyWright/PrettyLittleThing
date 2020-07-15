import React from "react";
import Nav from './Nav';
import Footer from './Footer';
import './Home.css';
const Home = () => {
    return (
        <div className='home'>
            <Nav />
            <div className='section_three'>
                <div>UP TO 70% OFF EVERYTHING*</div>
                <div>+ EXTRA 10% OFF ENTER: HURRY10</div>
                <div>HURRY! LIMITED TIME ONLY</div>
                <div className='line-4'>*EXCL BEAUTY</div>
            </div>
            <div className='section_four'>
                <div>BECOMING A SOCIAL BUTTERFLY AGAIN? SHOP NOW</div>
                <div>WE'VE EXTENDED OUR RETURNS PERIOD TO 60 DAYS</div>
            </div>
            <div className='section_five'>
                <img src={require('../Assets/kOpZ4PZFplVaKEBh3zBjSqCuf7KYRKNyZWFSVyKA.webp')} alt='null'/>
            </div>
            <div className='section_six'>
                <div className='six'>
                    <div>TIME FOR SOME SELF CARE - SHOP SKINCARE & BEAUTY</div>
                    <div>STUDENTS GET EXTRA 5% OFF - HURRY! LIMITED TIME ONLY</div>
                    <div><img src={require('../Assets/instagram-sketched.png')} alt='null'/> @PRETTYLITTLETHING</div>
                </div>
            </div>
            <div className='section_seven'>
                <div>
                    <img src={require('../Assets/9DuMY9h47eRVKMfGcB7P8DJyhGDYzcm4vjpRgARM.webp')} alt='null'/>
                    <div className='cls_button'>DRESSES</div>
                </div>
                <div>
                    <img src={require('../Assets/1d4UAUqcVIC3V3w44cYtQy6vjSkkP2g0FKpD1p5y.webp')} alt='null'/>
                    <div className='cls_button'>GLOW UP</div>
                </div>
                <div>
                    <img src={require('../Assets/13MHafIBDAn123ezWudTnw7BgiPpVtgqwtn8rvGQ.webp')} alt='null'/>
                    <div className='cls_button'>SALE</div>
                </div>
                <div>
                    <img src={require('../Assets/dI8y1Stwvdb89P8EEbNqhko7aLnrjEOgaWAEJ1kz.webp')} alt='null'/>
                    <div className='cls_button'>SUMMER SHOP</div>
                </div>
            </div>
            <div className='section_eight'>
                <div className='section_eight_head'>SHOP BY CATEGORY</div>
                    <div className='section_eight_grid'>
                        <div className='cls_grid'>
                            <img src={require('../Assets/jqQXTzXPaFH7yPsqQUgLoQM3za2WcNDBIcpxhcv3.webp')} alt='null'/>
                            <div className='cls'>BOTTOMS</div>
                        </div>
                        <div className='cls_grid'>
                            <img src={require('../Assets/wN7S4QM5Cpqczjyd7ZDozM54kqMNrpKM6ZUac4vG.webp')} alt='null'/>
                            <div className='cls'>DENIM</div>
                        </div>
                        <div className='cls_grid'>
                            <img src={require('../Assets/mXx0E10RE3rKYZJdRB6mhjU7EACV5iPC4KJTREp4.webp')} alt='null'/>
                            <div className='cls'>CO-ORDS</div>
                        </div>
                        <div className='cls_grid'>
                            <img src={require('../Assets/rRwV9JLA9jh5I4CPVIOFnfHFA2vO39QWQxCI9vjJ.webp')} alt='null'/>
                            <div className='cls'>PLUS & SHAPE</div>
                        </div>
                        <div className='cls_grid'>
                            <img src={require('../Assets/7qRFj8T1A14TVps8rk83DA6znKmIUiPDvrqOpTod.webp')} alt='null'/>
                            <div className='cls'>TOPS</div>
                        </div>
                        <div className='cls_grid'>
                            <img src={require('../Assets/6YXUv9cmfMJauMqV6orPrAZMv1GFvwSyiau8P798.webp')} alt='null'/>
                            <div className='cls'>BEAUTY</div>
                        </div>
                    </div>
            </div>
            <div className='section_nine'>
                <div className='section_nine_cls'>
                    <div className='section_nine_grid left'>
                        <div className='section_nine_head'>UP TO 70% OFF FOOTWEAR</div>
                        <div className='cls_grid'>
                            <img src={require('../Assets/jSVxs31dBwvuLnML3O0OYnHtS5OuVTOG698dZgbM.webp')} alt='null'/>
                                <div className='cls_button'>SHOP NOW</div>
                        </div>
                    </div>
                    <div className='section_nine_grid right'>
                        <div className='section_nine_head'>COSTA RICA</div>
                        <div className='cls_grid'>
                            <img src={require('../Assets/TRvnHz9qsd7M69Ay7ebzkgCSBUJYxevIdydEzgwv.jpeg')} alt='null'/>
                                <div className='cls_button'>SHOP NOW</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pressplay'>
                <img src={require('../Assets/Video-Banner-Desktop.jpg')} alt='videobanner' />
                <div className='cls_button'>PRESS PLAY</div>
            </div>
            <div className='section_ten'>
                <div className='section_ten_insta'>
                    <div className='cls_icon'><img src={require('../Assets/instagram-sketched(1).png')} alt='null'/></div>
                    <div className='cls_name'>@PRETTYLITTLETHING</div>
                    <div className='cls_p'>Like what you see? Shop the looks from your fave influencer of the moment straight from the 'Gram.</div>
                    <div className='cls_button'>
                        <div>SHOP INSTAGRAM</div>
                        <div>FOLLOW US</div>
                    </div>
                </div>

                <div className='cls_slide'>
                    <img src={require('../Assets/button.png')} alt='null' className='arrow'/>
                    <img src={require('../Assets/cIQoMs9TlcRAY9k6FT985CZm60HAQbVPvMs3pwos.webp')} alt='null'/>
                    <img src={require('../Assets/right-arrow.png')} alt='null' className='arrow'/>
                </div>
            </div>
            <div className='section_eleven'>
                <div className='cls_name'>THE EDIT</div>
                <div className='cls_p'>Get your inspo fix from the new season trends you need to know, how-tos, celeb style and everything in between. This is your feed on all things #PrettyLittleThing</div>
                <div className='slide'>
                    <div className='cls_slide'>
                    <img src={require('../Assets/button.png')} alt='null' className='arrow'/>
                        <div className='cls_grid'>
                            <img src={require('../Assets/eFvBv83W4vlvQkTLNjLgtF0BeMyScJHEaFK30EOy.webp')} alt='null'/>
                            <div>Head to destination unknown this season for the ultimate escape with you, your best girls and nothing but body confidence.</div>
                            <div className='cls_button'>SHOP NOW</div>
                        </div>
                        <div className='cls_grid'>
                            <img src={require('../Assets/jyIl5tz97wf5joN6c9529pwSTOx29BLxPkYnbXx6.webp')} alt='null'/>
                            <div>PLT Presents: Jess Hunt with the new season looks way too hot to stay in the shade.</div>
                            <div className='cls_button'>SHOP NOW</div>
                        </div>
                        <div className='cls_grid'>
                            <img src={require('../Assets/y5ANNUEoOT46xtNIAiXFQDcfyIW4fe5dqTSq2F4c.webp')} alt='null'/>
                            <div>Get ready to bring the heat with summer's sizzling swimwear, beach cover ups and dresses to take you from sunrise to sunset.</div>
                            <div className='cls_button'>VIEW THE EDIT</div>
                        </div>
                        <div className='cls_grid'>
                            <img src={require('../Assets/LpZBP8auyRAOtz6ewyw42rKbMKQFIoEnYwyC4eDe.webp')} alt='null'/>
                            <div>Wear your pride with our collection to celebreate the LGBTQ + community.</div>
                            <div className='cls_button'>VIEW THE EDIT</div>
                        </div>
                        <img src={require('../Assets/right-arrow.png')} alt='null' className='arrow'/>
                    </div>
                    

                </div>
            </div>
            <div className='section_twelve'>
                <div>
                    <div className='icons'>
                        <img src={require('../Assets/instagram-sketched(1).png')} className="insta" alt='instaLogo'/>
                    </div>
                    <div className='icons'>
                        <img src={require('../Assets/facebook.svg')} className="fb" alt='fbLogo'/>
                    </div>
                    <div className='icons'>
                        <img src={require('../Assets/twitter.svg')} className="tw" alt='twLogo'/>
                    </div>
                    <div className='icons'>
                        <img src={require('../Assets/internet.svg')} className="yt" alt='ytLogo'/>
                    </div>
                    <div className='icons'>
                        <img src={require('../Assets/podcast.svg')} className="pod" alt='podLogo'/>
                    </div>
                    <div className='icons'>
                        <img src={require('../Assets/tiktok.svg')} className="tik" alt='tikLogo'/>
                    </div>
                    <div className='vr'></div>
                    <img src={require('../Assets/visa.png')} className="icon2" alt='visa'/>
                    <img src={require('../Assets/visa-electron.png')} className="icon2" alt='visa-electron'/>
                    <img src={require('../Assets/mastercard.webp')} className="icon2" alt='mastercard'/>
                    <img src={require('../Assets/maestro.webp')} className="icon2" alt='maestro'/>
                    <img src={require('../Assets/paypal-new2.webp')} className="icon2" alt='paypal'/>
                    <img src={require('../Assets/klarna.png')} className="icon2" alt='klarna'/>
                    <img src={require('../Assets/discover2.webp')} className="icon2" alt='discover'/>
                    <img src={require('../Assets/dci2.webp')} className="icon2" alt='dci'/>
                </div>
            </div>
            <div className='section_thirteen'>
                <Footer />
            </div>
        </div>
    )
}

export default Home;