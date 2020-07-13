import React from "react";
import Nav from './Nav';
import InstaCarousel from './Insta-Carousel';

const Home = () => {
    return (
        <div>
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
                    <InstaCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Home;