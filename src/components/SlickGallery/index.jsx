import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./SlickGallery.module.css";

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  lazyLoad: 'ondemand', 
};

const SlickGallery = ({ images }) => {
  return (
    <div className={classes.wrapper}>
      <Slider {...sliderSettings}>
      {images.map((image) => (
        <div key={image} className={classes.slickCard}>
          <img src={image} alt=""/>
        </div>
      ))}
      </Slider>
    </div>
    
  );
};

export default SlickGallery;
