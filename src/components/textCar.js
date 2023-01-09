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
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={`${styles.carRoot} latoTxt`}>
        {this.props.carousel.length > 0 && <Slider {...settings}>
          {this.props.carousel.map((text, index) => {
            return <div key={index}>
              <h3 className={styles.carH3}>{text}</h3>
            </div>
          })}
        </Slider>}
      </div>
    );
  }
}
