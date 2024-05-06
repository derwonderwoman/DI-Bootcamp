import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../carousel.css';


import image1 from '../assets/c1cklkyp6ms02tougufx.webp';
import image2 from '../assets/e8fnw35p6zgusq218foj.webp';
import image3 from '../assets/jrfyzvgzvhs1iylduuhj.jpg';
import image4 from '../assets/liw377az16sxmp9a6ylg.webp';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        <div className="slide">
        <img src={image1} alt="Slide 1" />
        </div>
        <div className="slide">
        <img src={image2} alt="Slide 2" />
        </div>
        <div className="slide">
        <img src={image3} alt="Slide 3" />
        </div>
        <div className="slide">
        <img src={image4} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
