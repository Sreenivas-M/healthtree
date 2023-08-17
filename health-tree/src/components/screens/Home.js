import React from "react";
import "./index.css";
import banner from "../images/banner.png";
import search from "../images/Vector.png";
import downarrow from "../images/expand.png";
import doctor from "../images/doctor.png";
import group6 from "../images/group6.png";
import group2 from "../images/Group2.png";
import group1 from "../images/Group1.png";
import group5 from "../images/Group5.png";
import right_a from "../images/right_a.png";
import hr from "../images/hr.png";
import world from "../images/world.png";
import qa from "../images/qa.png";
import PEOP from "../images/PEOP.png";
import Layer1 from "../images/Layer1.png";
import framecss from "../images/framecss.png";
import map from "../images/map.png";
import person from "../images/person.png";
import edit from "../images/edit.png";
import rtarrow from "../images/rtarrow.png";
import ImageCarousel from "./ImageCarousel";
import ContactUs from "./ContactUs";
import { NavLink } from "react-router-dom";
import ClientCarousel from "./ClientCarousel";
import ServiceCarousel from "./ServiceCarousel";
import Imgcarousel from "./Imgcarousel";
import Clientsayscarousel from "./Clientsayscarousel";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";

function Home() {
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="col-md-6 ">
            <div className="mt-5">
              <h1 className="main-text">
                Elevating Healthcare: Trust, Transparency, and Accountability
              </h1>
              <p className="p-text">
                Providing unparalleled healthcare services with a focus on
                trust, transparency, and accountability. Experience our uniquely
                tailored solutions delivered with utmost professionalism.
              </p>
              <NavLink
                to={"/contact"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <button className="btn mt-3 mb-4">
                  CONTACT US &nbsp; {">"}
                </button>
              </NavLink>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src={banner} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row section-2 shadow">
          <div className="col-md-3 col-lg-4">
            <div className="d-flex ">
              {" "}
              <div className="dot">
                {" "}
                <img src={search} className="search" alt="" />
              </div>
              <p className="para">I am interested in discovering</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 about">
            <p style={{ paddingLeft: "20px" }}>
              About Corporate Health Care Services{" "}
              <span className="downarrow">
                <img src={downarrow} alt="" />{" "}
              </span>
            </p>
          </div>
          <div className="col-md-2 ps-lg-2 ps-sm-0">
            <div className="md-text-center knowbtn ">
              <button className="btn btnKnow">KNOW MORE &nbsp; {">"}</button>
            </div>
          </div>
        </div>

        <div className="row section-3 ">
          <div className="col-lg-6">
            <div className="box">
              <h2>
                <div className="bar"></div>Who we are?
              </h2>
            </div>
            <div className="p-4">
              <p className="para1">
                HealthTree is a composite speciality healthcare firm, and
                delivers advisory and consulting services to both corporate and
                hospital healthcare facilities. Services are delivered on a
                project by project basis or as in a turnkey approach. We are
                thoroughly Professional consultancy firm specializing in molding
                itself to the needs, circumstances and situational demands to
                cater to needs of individual needs..
              </p>

              <div className="mt-2 pb-sm-3" style={{ float: "left" }}>
                <button className="btn mb-2 ">KNOW MORE &nbsp; {">"}</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img src={doctor} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="row section-4">
        <div className="col-lg-7">
          <div className="row">
            <div className="col-md-4">
              <h1 className="count">20 +</h1>{" "}
              <p className="countp">Years of Industry Experience</p>
            </div>
            <div className="col-md-4">
              <h1 className="count">30 +</h1>{" "}
              <p className="countp">Services in Hospital Management</p>
            </div>
            <div className="col-md-4">
              <h1 className="count">30 +</h1>{" "}
              <p className="countp">Services in Hospital Management</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 box4 text-center">
          <div>
            <div>
              <p>
                Exclusivity of Services. Distinct Tailor Made Products. END o
                END management. PAN INDIA services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-5 main">
        <div className="text-center">
          <h3>Elevate Employee Wellness and Satisfaction with our All-</h3>
          <h3>Inclusive, Personalized Corporate Healthcare Solutions.</h3>
        </div>
        <div className="row mt-5  justify-content-evenly">
          <div className="col-md-6 col-sm-6 col-lg-2 mt-3">
            <div className="box-img">
              <img src={group6} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-2 mt-3">
            <div className="box-img">
              <img src={group2} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-2 mt-3">
            <div className="box-img">
              <img src={group1} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-2 mt-3">
            <div className="box-img">
              <img src={group5} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-2 mt-3">
            <div className="box-img">
              <img src={group1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-6 mt-2 mb-5">
        <div>
          <ImageCarousel />
        </div>
      </div>
      <div className="section6">
        <div className="text-center pb-3 ">
          <h2>Transforming Healthcare Recruitment Globally</h2>
          <p className="p-4">
            Our technology puts everything in one place - Streamlining
            international hiring, on boarding, and the entire{" "}
            <span className="cutcolor">
              {" "}
              HR-administrative
              process on one dashboard,
            </span>{" "}
            and with ease of use. Our technology makes it easy for you to
            generate a locally compliant employment system to chose{" "}
            <span className="cutcolor"> anyone, anywhere, anytime.</span>
          </p>
        </div>
        <div className="">
          <Imgcarousel />
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-12 col-lg-8 text-center">
            <h2 className="p-2">
              Stages we follow while hiring the candidates
            </h2>
            <div>
              <img src={framecss} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-12 col-lg-4 text-center">
            <div className="border border-primary text-center m-3">
              <img src={hr} alt="" className="img-fluid p-2" />
              <p className="countptext">Simplified Recruitment</p>
            </div>
            <div className="border border-primary text-center m-3">
              <img src={world} alt="" className="img-fluid p-2" />
              <p className="countptext">Extensive Network</p>
            </div>
            <div className="border border-primary text-center m-3">
              <img src={qa} alt="" className="img-fluid p-2" />
              <p className="countptext">Quality Assurance</p>
            </div>
            <div className="border border-primary text-center m-3">
              <img src={PEOP} alt="" className="img-fluid p-2" />
              <p className="countptext p-1">Cultural Integration Support</p>
            </div>
            <div className="border border-primary text-center m-3">
              <img src={Layer1} alt="" className="img-fluid p-2" />
              <p className="countptext">Cost-Effective Solution</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={map} alt="" className="img-fluid" />
      </div>
      <div style={{  background: "linear-gradient(180deg, #00BEF2 0%, #014F93 100%)" }}>
        <div className="row mainperson">
          <div className="col-md-12 col-lg-6 ">
            <h4 className="d-flex" style={{ color: "#fff" }}>
              For Candidates <div className="fooo"></div>
            </h4>
            <div className="d-flex person">
              <img src={edit} alt="" className="image" />
              <div class="">
                <h5 className="img pt-1">
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
                      <h5 className="pt-1">
                        "Unlock Global Opportunities in Healthcare”
                      </h5>
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
          <div className="col-md-12 col-lg-6 ">
            <h4 className="d-flex" style={{ color: "#fff" }}>
              For Employers <div className="fooo"></div>
            </h4>
            <div className="d-flex person">
              <img src={person} alt="" className="image" />
              <div className="">
                <h5 className="img pt-1">
                  "Discover Top Nursing Talent Worldwide”
                </h5>
                <p className="mt-4">
                  Connect with HealthTree to access skilled and qualified
                  candidates globally. Streamline your recruitment process and
                  build a diverse healthcare team. Partner with us today and
                  unlock excellence!
                </p>
                <div class="overlay">
                  <div class="text d-flex overlaybox">
                    <div>
                      <h5 className="pt-1">
                        "Discover Top Nursing Talent Worldwide”
                      </h5>
                      <p className="mt-4">
                        Connect with HealthTree to access skilled and qualified
                        candidates globally. Streamline your recruitment process
                        and build a diverse healthcare team. Partner with us
                        today and unlock excellence!
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
      <div className="main">
        <ServiceCarousel />
      </div>

      <div>
        <ClientCarousel />
      </div>
      <div className="main">
        <Clientsayscarousel />
      </div>
      <div className="main">
        <div className="d-flex justify-content-between blogsection">
          <div className="d-flex blogheading">
            <div className="bar5"></div>
            <h2 className="serviceh1">News, Events and Blogs</h2>
          </div>
          <h6 className="rightarrow">
            <NavLink
              to="./blog"
              style={{ textDecoration: "none", color: "black" }}
            >
              View All <img src={right_a} alt="" className="img-fluid" />
            </NavLink>
          </h6>
        </div>
        <div className="backcolor">
          <div className="row backimg">
            <div className="col-md-4 p-3">
              <div className="card shadow">
                <div className="pt-3 px-3">
                  <img
                    className="card-img-top"
                    src={blog1}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    What is Cubital Tunnel Syndrom...
                  </h5>
                  <p className="card-text">
                    Diagnosis and Symptoms Cubital tunnel syndrome is a
                    condition that can cause severe pain,...
                  </p>

                  <p className="text-primary">
                    <a
                      href={"http://localhost:3000/blog/blogone"}
                      className=""
                      style={{ textDecoration: "none" }}
                    >
                      CONTINUE
                    </a>
                  </p>
                  <div
                    className="bar"
                    style={{
                      marginLeft: "-1px",
                      marginTop: "-10px",
                      width: "100px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3 ">
              <div className="card shadow">
                <div className="pt-3 px-3">
                  <img
                    className="card-img-top"
                    src={blog2}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    What is Cubital Tunnel Syndrom...
                  </h5>
                  <p className="card-text">
                    Diagnosis and Symptoms Cubital tunnel syndrome is a
                    condition that can cause severe pain,...
                  </p>

                  <p className="text-primary">
                    <a
                      href={"http://localhost:3000/blog/blogone"}
                      className=""
                      style={{ textDecoration: "none" }}
                    >
                      CONTINUE
                    </a>
                  </p>
                  <div
                    className="bar"
                    style={{
                      marginLeft: "-1px",
                      marginTop: "-10px",
                      width: "100px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card shadow">
                <div className="pt-3 px-3">
                  <img
                    className="card-img-top"
                    src={blog3}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    What is Cubital Tunnel Syndrom...
                  </h5>
                  <p className="card-text">
                    Diagnosis and Symptoms Cubital tunnel syndrome is a
                    condition that can cause severe pain,...
                  </p>

                  <p className="text-primary">
                    <a
                      href={"http://localhost:3000/blog/blogone"}
                      className=""
                      style={{ textDecoration: "none" }}
                    >
                      CONTINUE
                    </a>
                  </p>
                  <div
                    className="bar"
                    style={{
                      marginLeft: "-1px",
                      marginTop: "-10px",
                      width: "100px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
}

export default Home;
