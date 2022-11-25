import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './css-modules/textCar.module.css';


export default class TextCar extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={`${styles.carRoot} latoTxt`}>
        <Slider {...settings}>
          <div>
            <h3>Cutting edge technology for neuromuscular assessment</h3>
          </div>
          <div>
            <h3>Amazing technology for neuromuscular assessment and more</h3>
          </div>
          <div>
            <h3>Don't be surprised. We have more to offer</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
