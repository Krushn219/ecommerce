import React from 'react';
import './style.css'
import Sidebanner1 from "../../assets/Images/Sidebanner1.png"
import Slider1 from "../../assets/Images/Slider1.png"
import Slider2 from "../../assets/Images/Slider2.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomePageBanner = () => {
  return (
    <div>
      <div className="about-wrapper row">
        <div className="about-img">
          <img src={Sidebanner1} alt="png" className="img-fluid h-100" />
          <div className="about-content">
            <div>Upto <span>30%</span> Off</div>
            <p>New Collection</p>
            <button className="shop-main-btn">Shop Now</button>
          </div>
        </div>
        <div className='about-inner-wrapper'>
          <div className="h-100">
            <Carousel id="carouselExampleControls" data-bs-ride="carousel">
              <div className="active h-100">
                <img src={Slider1} className="img-fluid h-100" alt="png" />
                <div className="about-slider2">
                  <h2>iPad air</h2>
                  <p>Upto 30% Off</p>
                  <button className="shop-main-btn">Shop Now</button>
                </div>
              </div>
              <div className="active h-100">
                <img src={Slider2} className="h-100" alt="png" />
                <div className="about-slider2 text-start">
                  <h2>Live Without Limits</h2>
                  <p>Upto 30% Off</p>
                  <button className="shop-main-btn">Shop Now</button>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;