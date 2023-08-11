import React from "react";
import Slider from "react-slick";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";

function ClientCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div style={{background:"#8fe4ff", paddingBottom:"50px"}}>
      <div className="mt-5 pb-5">
        <h1 className="clienth1">OUR CLIENTS</h1>
        <p className="text-center">
          Our trusted patronage spans corporate clients, IT companies, MNCs,
          BPOs, star hotels, residential enclaves, and <br /> overseas patients. With a
          dynamic team of professionals, we are committed to redefining the
          healthcare industry. <br /> Your trust fuels our pursuit of a better
          tomorrow.
        </p>
      </div>
      <div className="mainContainer">
        <Slider {...settings}>
          <div className="container">
            <img src={logo1} className="img-fluid"/>
          </div>
          <div className="container">
            <img src={logo2} className="img-fluid"/>
          </div>
          <div className="container">
            <img src={logo4} className="img-fluid"/>
          </div>
          <div className="container">
            <img src={logo3} className="img-fluid"/>
          </div>
          <div className="container">
            <img src={logo1} className="img-fluid"/>
          </div>
          <div className="container">
            <img src={logo4} className="img-fluid"/>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ClientCarousel;

