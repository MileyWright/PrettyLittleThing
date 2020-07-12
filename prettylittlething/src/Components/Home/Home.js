import React from "react";
import Nav from './Nav';

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
                <div></div>
            </div>
            <div className='section_eight'>

            </div>
        </div>
    )
}

export default Home;