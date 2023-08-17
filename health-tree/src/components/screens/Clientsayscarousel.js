import React, { useRef } from "react";
import Slider from "react-slick";
import feed from "../images/feed.png";
import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";
import client4 from "../images/client4.png";
import rightA from "../images/rightA.png";
import leftA from "../images/leftA.png";

function Clientsayscarousel() {
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
    <>
      <div className="mt-5 mb-5 align-items-stretch">
        <div className="d-flex ">
          <div className="bar2 m-3 p-2"></div>{" "}
          <h3 className="p-2">What our Clients Say</h3>
        </div>
        <Slider ref={sliderRef} {...settings}>
          <div className="shadow p-2">
              <div className="row shadow">
                <div className="col-md-3 d-flex justify-content-center  pt-3">
                  <img src={client1} className="clientimage" />
                </div>
                <div className="col-md-9 p-2">
                  <h4 className="clienttext">
                    "Dr Ahmed is a thorough gentleman and a dedicated
                    professional who goes the extra mle every single time. I
                    wish him and HealthTree Services all thr very best to
                    continue their good work"
                  </h4>
                  <p className="desname mt-5">Akash Agarwal</p>
                  <p className="destext">
                    Director Procurement - Global Shared Service at Dell
                  </p>
                </div>
              </div>
          </div>
          <div className="shadow p-2">
              <div className="row shadow">
                <div className="col-md-3 d-flex justify-content-center  pt-3">
                  <img src={client2} className="clientimage" />
                </div>
                <div className="col-md-9 p-2">
                <h4 className="clienttext">
                  "From the first meeting with Dr.Ahmed, I felt he is gentleman,
                  dedicated to his work, punctual, trustworthy and excellent
                  work skill. He has marvelous and wonderful personality. I wish
                  you recomend Dr.Ahmed.."
                </h4>
                <p className="desname mt-5">Rajendra Singh Kalsi</p>
                <p className="destext">
                  Administration and Facilities Professional
                </p>
              </div>
              </div>
          </div>
          <div className="shadow p-2">
              <div className="row shadow">
                <div className="col-md-3 d-flex justify-content-center  pt-3">
                  <img src={client3} className="clientimage" />
                </div>
                <div className="col-md-9 p-2 ">
                <h4 className="clienttext">
                  "I have no words to say about Dr. I have personally have great
                  respect to him. One has to lean how simle and helpful can a
                  doctor could be without money in mind...this days.. Best of
                  luck doctor"
                </h4>
                <p className="desname mt-5  ">Sunil V</p>
                <p className="destext">
                  Associate Vice President Facilities at Tavant
                </p>
              </div>
              </div>
          </div>
          <div className="shadow p-2">
              <div className="row shadow">
                <div className="col-md-3 d-flex justify-content-center  pt-3">
                  <img src={client4} className="clientimage" />
                </div>
                <div className="col-md-9 p-2">
                <h4 className="clienttext">
                  "Dr Ahmed is amazing professional, who will make you
                  comfortable at the first meeting, counsels and advises on the
                  health front and ensures he takes care of public awareness
                  through the news letter he publishes - altogether, its great
                  work. I wish him all success"
                </h4>
                <p className="desname">Raghunandan SV (He/Him?His)</p>
                <p className="destext">
                  MSME Mentor | Global Alliance Partner | Deal Maker
                </p>
              </div>
              </div>
          </div>
          
        </Slider>
        <div className="d-flex justify-content-center">
          <div className="p-3" onClick={previous}>
            <img src={leftA} alt="" width="50" />
          </div>
          <div className="p-3" onClick={next}>
            <img src={rightA} alt="" width="50" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Clientsayscarousel;
