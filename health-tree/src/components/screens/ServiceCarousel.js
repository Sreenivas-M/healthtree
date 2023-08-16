import React from "react";
import Slider from "react-slick";
import radiology from "../images/radiology.png";
import radiology1 from "../images/radiology1.png";
import radiology2 from "../images/radiology2.png";
import radiology3 from "../images/radiology3.png";
import radiology4 from "../images/radiology4.png";

function ServiceCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive:[
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 3,
        }
      }
        
      ]
  };
  return (
    <>
      <div className="mainContainer">
        <div className="text-center">
        <h1 className="serviceh1">Comprehensive Diagnostic Services for Your Well-being</h1>
        <p className="pb-5">
          Advanced diagnostics for your well-being. From radiology to
          cardiology, obstetrics to orthopedics, our comprehensive range of <br />
          services ensures accurate and timely results. Experience personalized
          care and prioritize your health with Health Tree.
        </p>
        </div>
        <Slider {...settings}>
          <div className="container">
            <img src={radiology1} className="img-fluid" />
          </div>
          <div className="container">
            <img src={radiology3} className="img-fluid" />
          </div>
          <div className="container">
            <img src={radiology4} className="img-fluid" />
          </div>
          <div className="container">
            <img src={radiology} className="img-fluid" />
          </div>
          <div className="container">
            <img src={radiology3} className="img-fluid" />
          </div>
          <div className="container">
            <img src={radiology4} className="img-fluid" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default ServiceCarousel;
