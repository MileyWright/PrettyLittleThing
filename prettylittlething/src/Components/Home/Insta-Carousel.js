import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class InstaCarousel extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <h2>Previous and Next methods</h2>
          <button className="button" onClick={this.previous}>
              Previous
            </button>
          <Slider ref={c => (this.slider = c)} {...settings}>
              
            <div key={1}>
            <img src={require('../Assets/TRvnHz9qsd7M69Ay7ebzkgCSBUJYxevIdydEzgwv.jpeg')} alt='null'/>
            </div>
            <div key={2}>
            <img src={require('../Assets/TRvnHz9qsd7M69Ay7ebzkgCSBUJYxevIdydEzgwv.jpeg')} alt='null'/>
            </div>
            <div key={3}>
            <img src={require('../Assets/TRvnHz9qsd7M69Ay7ebzkgCSBUJYxevIdydEzgwv.jpeg')} alt='null'/>
            </div>
          
          </Slider>
          
            
            <button className="button" onClick={this.next}>
              Next
            </button>
          
        </div>
      );
    }
  }