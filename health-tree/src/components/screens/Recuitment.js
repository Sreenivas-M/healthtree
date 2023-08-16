import React from "react";
import banner from "../images/Group.png";
import hr from "../images/hr.png";
import world from "../images/world.png";
import qa from "../images/qa.png";
import PEOP from "../images/PEOP.png";
import Layer1 from "../images/Layer1.png";
import healthtree from "../images/healthtree.png";
import Frame2 from "../images/Frame2.png";
import Component from "../images/Component.png";
import stage1 from "../images/stage1.png";
import stage2 from "../images/stage2.png";
import stage3 from "../images/stage3.png";
import stage4 from "../images/stage4.png";
import stage5 from "../images/stage5.png";
import stage6 from "../images/stage6.png";
import stage7 from "../images/stage7.png";
import stage8 from "../images/stage8.png";
import stage9 from "../images/stage9.png";
import stage10 from "../images/stage10.png";
import rtarrow from "../images/rtarrow.png";
import map from "../images/map.png";
import person from "../images/person.png";
import { NavLink } from "react-router-dom";
import Imgcarousel from "./Imgcarousel";

function Recuitment() {
  return (
    <>
      <div className="banner">
        <div className="row main">
          <div className="col-md-6">
            <h1 className="recbanner">
              Revolutionizing international healthcare recruitment with
              streamlined processes and advanced technology.
            </h1>
          </div>
          <div className="col-md-6">
            <div className="bottom">
              <img src={banner} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="text-center pb-3">
          <h2>Transforming Healthcare Recruitment Globally</h2>
          <p className="p-4">
            Our technology puts everything in one place - Streamlining
            international hiring, on boarding, and the entire{" "}
            <span className="cutcolor">
              {" "}
              HR-administrative <br />
              process on one dashboard,
            </span>{" "}
            and with ease of use. Our technology makes it easy for you to
            generate a locally compliant <br /> employment system to chose{" "}
            <span className="cutcolor"> anyone, anywhere, anytime.</span>
          </p>
          <div className="row d-flex justify-content-between">
            <div className="col-md-2 p-2">
              <div className="border border-primary text-center">
                <img src={hr} alt="" className="img-fluid p-2" />
                <p className="countptext">Simplified Recruitment</p>
              </div>
            </div>
            <div className="col-md-2 p-2">
              <div className="border border-primary text-center">
                <img src={world} alt="" className="img-fluid p-2" />
                <p className="countptext">Extensive Network</p>
              </div>
            </div>

            <div className="col-md-2 p-2">
              <div className="border border-primary text-center">
                <img src={qa} alt="" className="img-fluid p-2" />
                <p className="countptext">Quality Assurance</p>
              </div>
            </div>
            <div className="col-md-2 pt-2">
              <div className="border border-primary text-center">
                <img src={PEOP} alt="" className="img-fluid p-2" />
                <p className="countptext p-1">Cultural Integration Support</p>
              </div>
            </div>
            <div className="col-md-2 p-2">
              <div className="border border-primary text-center">
                <img src={Layer1} alt="" className="img-fluid p-2" />
                <p className="countptext">Cost-Effective Solution</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Imgcarousel />
        </div>

        <div className="row">
          <h2 className="text-center p-5">Now and then, we love being <span className="cutcolor">different !</span></h2>
          <div className="col-md-4">
            <div>
              <img src={Frame2} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-8">
            <ol className="list1">
              <li>Exclusive Services for Hospitals & Healthcare Industry</li> <hr />
              <li>Optimal Fill Ratio and Reduced Hiring Errors</li> <hr />
              <li>Global Outreach and Satisfied Clients</li> <hr />
              <li>Trusted Service Provider to MNCs</li> <hr />
              <li>Government Licensed and Recognized Firm</li> <hr />
              <li>Value-Added Services for Enhanced Recruitment</li> <hr />
              <li>Direct Collaboration and Dedicated Team</li> <hr />
              <li>Streamlined Technology for International Hiring</li> <hr />
              <li>End-to-End Control and Risk Management</li>
            </ol>
          </div>
        </div>

        <div className="row mt-5 mb-3 pb-5 pt-5" style={{background:"#f4f8fa"}}>
          <div className="text-center">
          <h6>Positions we Hire</h6>
          <h2>Join and Explore Diverse Medical <br /> Opportunities</h2>
          </div>
          <div>
            <img src={Component} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="p-5">Stages we follow while hiring the <br /> candidates </h2>
          <div className="row">
            <div className="col-md-3 p-2">
              <div>
                <img src={stage1} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div>
                <img src={stage2} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div>
                <img src={stage3} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div>
                <img src={stage4} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 p-2">
              <div>
                <img src={stage5} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div>
                <img src={stage6} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div>
                <img src={stage7} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div>
                <img src={stage8} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 p-2">
              <div>
                <img src={stage9} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div>
                <img src={stage10} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={map} alt="" className="img-fluid" />
      </div>
      
      
      <div style={{ background: "#8fe4ff" }}>
        <div className="row mainperson">
          <div className="col-md-6 ">
            <h4 className="d-flex" style={{ color: "#005198" }}>
              For Candidates <div className="fooo"></div>
            </h4>
            <div className="d-flex person">
              <img src={person} alt="" className="image" />
              <div class="">
                <h5 className="img">
                  "Unlock Global Opportunities in Healthcare”
                </h5>
                <p className="mt-4">
                  Join HealthTree's international recruitment program and
                  advance your career worldwide. Explore exciting job
                  opportunities in renowned hospitals. Apply now and embark on
                  an extraordinary journey!
                </p>
                <div className="overlay">
                  <div className="text d-flex overlaybox">
                    <div>
                      {" "}
                      <h5>"Unlock Global Opportunities in Healthcare”</h5>
                      <p className="mt-4">
                        Join HealthTree's international recruitment program and
                        advance your career worldwide. Explore exciting job
                        opportunities in renowned hospitals. Apply now and
                        embark on an extraordinary journey!
                      </p>
                    </div>
                    <NavLink to={"/candidates"}>
                      <div className="arrowlink">
                        <img src={rtarrow} alt="" />
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <h4 className="d-flex" style={{ color: "#005198" }}>
              For Employers <div className="fooo"></div>
            </h4>
            <div className="d-flex person">
              <img src={person} alt="" className="image" />
              <div className="">
                <h5 className="img">
                  "Unlock Global Opportunities in Healthcare”
                </h5>
                <p className="mt-4">
                  Join HealthTree's international recruitment program and
                  advance your career worldwide. Explore exciting job
                  opportunities in renowned hospitals. Apply now and embark on
                  an extraordinary journey!
                </p>
                <div class="overlay">
                  <div class="text d-flex overlaybox">
                    <div>
                      <h5>"Unlock Global Opportunities in Healthcare”</h5>
                      <p className="mt-4">
                        Join HealthTree's international recruitment program and
                        advance your career worldwide. Explore exciting job
                        opportunities in renowned hospitals. Apply now and
                        embark on an extraordinary journey!
                      </p>
                    </div>
                    <NavLink to={"/employees"}>
                      <div className="arrowlink">
                        <img src={rtarrow} alt="" />
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recuitment;
