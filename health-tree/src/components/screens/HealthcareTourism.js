import React from "react";
import featute from "../images/featute.png";
import featutes05 from "../images/features05.png";
import flight from "../images/flight.png";
import featutes02 from "../images/features02.png";
import featutes03 from "../images/features03.png";
import featutes04 from "../images/features04.png";
import { NavLink } from "react-router-dom";

function HealthcareTourism() {
  return (
    <>
      <div style={{ background: "#005198", marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6">
            <h2 className="recbanner5">
              Discover a World of Wellness: Embrace Healthcare Tourism with
              HealthTree
            </h2>
          </div>
          <div className="col-md-6">
            <div className="pe-5"> 
              <img src={featute} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="text-center">
          <h2>
            Your Path to Health and Adventure: Exploring <br /> Healthcare Tourism with
            HealthTree
          </h2>
          <p className="lh-lg p-3">
            At HealthTree, we believe that healthcare should know no boundaries.
            Our Healthcare Tourism services open the door to a world of <br />
            possibilities, where you can access top-tier medical treatments
            while exploring fascinating destinations. Experience a journey like
            no <br /> other, where healing meets adventure, and wellness meets
            exploration.
          </p>
        </div>

        <div>
          <div className="text-center pt-5">
          <h1>
            Experience the HealthTree Advantage: Exceptional Features for <br />
            Healthcare Tourism
          </h1>
          </div>
          <div className="row">
            <div className="col-md-4 p-5">
              <div>
                <img src={featutes05} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div>
                <img src={featutes04} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div>
                <img src={featutes03} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 p-5">
              <div>
                <img src={featutes02} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div>
                <img src={featutes05} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{background:"#8fe4ff"}} className="text-center p-5">
        <h3 style={{color:"#005198"}}>Embrace Your Journey to Wellness</h3>
        <p className="lh-lg">
          Thank you for considering HealthTree for your healthcare tourism
          journey. Our team will get back <br /> to you shortly to assist with your
          inquiry and ensure you have a seamless and unforgettable <br /> experience.
          Safe travels!
        </p>
        <NavLink to={"/healthcaretourism/healthform"}>
          <button className="btn">
            START YOUR JOURNEY &nbsp; &nbsp; <img src={flight} alt="" />
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default HealthcareTourism;
