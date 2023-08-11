import React, { useRef } from 'react';
import Slider from 'react-slick';
import croimg from "../images/caroimg.png"
import rightA from "../images/rightA.png"
import leftA from "../images/leftA.png"

function Imgcarousel() {
    const sliderRef = useRef(null);

    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };  
    return (
        <div className='mt-5 mb-5 px-5'>
          <Slider ref={sliderRef} {...settings}>
          <div className="container">
            <img src={croimg} className="img-fluid" />
          </div>
          <div className="container">
            <img src={croimg} className="img-fluid" />
          </div>
          </Slider>
          <div className='d-flex justify-content-center'>
            <div className="p-3" onClick={previous}>
              <img src={leftA} alt="" width="50" />
            </div>
            <div className="p-3" onClick={next}>
            <img src={rightA} alt="" width="50" />
            </div>
          </div>
        </div>
      );
    };
    
  
      
    
    

export default Imgcarousel