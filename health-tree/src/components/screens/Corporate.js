import React from "react";
import "./index.css";
import group6 from "../images/group6.png";
import grpbanner from "../images/grpbanner.png";
import nursedoctor from "../images/nursedoctor.png";
import nursesspecial from "../images/nursesspecial.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";
import img11 from "../images/img11.png";
import ImageCarousel from "./ImageCarousel";
import ClientCarousel from "./ClientCarousel";

const data = [
  { img: img1, text: "Gap Analysis & Bench Marking survey Goals" },
  { img: img2, text: "Hospital Planning- New/Restructuring, Re-Architecture/Renovating." },
  { img: img3, text: "Final Hospital Audits- Validating Business Plan- Complete Business Project Report." },
  { img: img4, text: "Strategic Operations, Administrative and Facility Management." },
  { img: img5, text: "Hospital Supplies and inventory Management" },
  { img: img6, text: "Hospital Admin Facilities Management." },
  { img: img7, text: "Hospital Quality and Accreditations.(JCI, NABH, NABL, ISO, etc)" },
  { img: img8, text: "Hospital Digitalization and information systems management." },
  { img: img9, text: "Statutory requirement-compliance Legalities and Implications." },
  { img: img10, text: "Marketing, Promotion and Brand Management." },
  { img: img11, text: "Procurement- Validation and vendor management, and many More Services," },
  // Add more objects as needed
];

function Corporate() {
  return (
    <>
      <div style={{ background: "#005198" }}>
        <div className="row main">
          <div className="col-md-6">
            <h1 className="recbanner">
              Empowering Your Workforce: Unleashing the Potential of Corporate
              Healthcare
            </h1>
          </div>
          <div className="col-md-6">
            <div>
              <img src={grpbanner} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="text-center">
          <h2>Enhanced Corporate Health Care Solutions</h2>
          <p className="p-4 lh-lg">
            Experience enhanced corporate health care solutions tailored to meet
            your organization's unique needs. Our <br /> comprehensive programs
            focus on preventive care, occupational health, and wellness
            initiatives to promote a healthy and <br /> productive workforce.
          </p>
        </div>

        <div className="row mt-4 mb-4">
          <div className="col-md-6">
            <div>
              <img src={nursedoctor} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6  p-5">
            <h2>Transforming Workforce Health</h2>
            <p className="pt-3 pb-3 lh-lg">
              Welcome to HealthTree Service PVT LTD, where we are committed to{" "}
              <br />
              putting the client first and building a foundation of wellness.
              Our <br /> dedicated team operates with utmost transparency and
              upholds the <br /> highest standards of medical ethics.
            </p>
            <p className="lh-lg">
              By seamlessly integrating our services into your system, we have a
              positive impact on various aspects of health security, while also
              boosting productivity and reducing absenteeism. Experience the
              transformative power of a healthy and happier workforce with
              HealthTree
            </p>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-md-6 p-3">
            <h2>Employee-Centric Wellness Solutions</h2>
            <p className="pt-3 pb-3 lh-lg">
              At HealthTree Service PVT LTD, we believe in taking care of your
              extended family – your employees. With our employee-centric
              wellness solutions, we prioritize their health and well-being,
              recognizing that they are the driving force behind your business.
            </p>
            <p className="pt-3 pb-3 lh-lg">
              Through our comprehensive services and personalized approach, we
              aim to enhance their overall health, productivity, and job
              satisfaction.
            </p>
          </div>
          <div className="col-md-6">
            <div>
              <img src={nursesspecial} alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="section-5 main">
          <div className="text-center">
            <h3>Elevate Employee Wellness and Satisfaction with our All-</h3>
            <h3>Inclusive, Personalized Corporate Healthcare Solutions.</h3>
          </div>
          <div className="row mt-5 justify-content-between">
            <div className="col-md-2 col-sm-6 mt-3">
              <div className="box-img">
                <img src={group6} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-2 col-sm-6 mt-3">
              <div className="box-img">
                <img src={group6} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-2 col-sm-6 mt-3">
              <div className="box-img">
                <img src={group6} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-2 col-sm-6 mt-3">
              <div className="box-img">
                <img src={group6} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-2 col-sm-6 mt-3">
              <div className="box-img">
                <img src={group6} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-6 main">
          <div>
            <ImageCarousel />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 p-5">
            <h3>What We Do?</h3> <div className="bar1"></div>
            <p className="pt-3 pb-3 lh-lg">
              Total Hospital & Healthcare Management Services of Clinic's,
              Diagnostic's, Poly Clinic's, Primary Units, Nursing home's,
              Secondary and Tertiary Care Units
            </p>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((item, index) => (
                <div className="col-md-4 p-4">
                  <div key={index}>
                    <img
                      src={item.img}
                      aalt={`Image ${index}`}
                      className="img-fluid"
                    />
                  </div>
                  <p className="countpt">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <ClientCarousel />
      </div>
    </>
  );
}

export default Corporate;
