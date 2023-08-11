import React from "react";
import patient from "../images/patient.png";
import ceo from "../images/ceo.png";
import Rectangle from "../images/Rectangle.png";
import leftA from "../images/leftA.png";
import rightA from "../images/rightA.png";
import ContactUs from "./ContactUs";
import Clientsayscarousel from "./Clientsayscarousel";

function OurStory() {
  return (
    <>
      <div>
        <div
          className="row"
          style={{ background: "#005198", marginTop: "100px" }}
        >
          <div className="col-md-6">
            <h1 className="recbanner1">
              Transforming healthcare through innovation and compassionate
              service.
            </h1>
          </div>
          <div className="col-md-6">
            <div>
              <img src={patient} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="text-center">
            <h2>Who we are?</h2>
            <p className="p-3 lh-lg">
              HealthTree is a composite speciality healthcare firm, and delivers
              advisory and consulting services to both corporate and hospital{" "}
              <br />
              healthcare facilities. Services are delivered on a project by
              project basis or as in a turnkey approach.
            </p>
            <p className="p-3 lh-lg">
              We are thoroughly Professional consultancy firm specializing in
              molding itself to the needs, circumstances and situational demands
              to <br /> cater to needs of individual clinics, IT, ITES, BPO,
              Call centers, MNC’s, Factories, Industries at the corporate front
              and Laboratories, <br /> polyclinics, Primary healthcare centers
              to high end tertiary care hospitals @ healthcare
              verticals...rendering end to end services-solutions <br /> in the
              most tailor made fashion.
            </p>
            <p className="p-3 lh-lg">
              Founded - Promoted by Dr Ahmed A Khan who pioneered ‘Corporate
              Healthcare Services’ in India, in 2004 and has been at the
              forefront of <br /> uniquely conceptualized Hospital Management
              services since 2009, working along with a amalgamated team of
              expert, potential and <br />
              talented allied professionals. We take special care to tackle all
              tasks handed over to us, in a decisive way and make it a point to
              deliver <br /> effectual solutions swiftly and promptly. Which has
              gained us a family of 27 corporate clients across many cities.
            </p>
          </div>
          <div className="row text-center p-5">
            <div className="col-md-6 g-3 p-3">
              <div className="card shadow">
                <h3 className="m-2 p-3" style={{ background: "#8fe4ff" }}>
                  Our Vision & Mission
                </h3>
                <p className="p-3 lh-lg">
                  “ To be reckoned as the most trusted, transparent and <br />
                  accountable healthcare service provider & to render an <br />{" "}
                  umbrella of uniquely conceptualized services in the most{" "}
                  <br /> professional way.”
                </p>
              </div>
            </div>
            <div className="col-md-6 g-3 p-3">
              <div className="card shadow">
                <h3 className="m-2 p-3" style={{ background: "#8fe4ff" }}>
                  Quality Policy
                </h3>
                <p className="p-3 lh-lg pb-5">
                  “ HealthTree is focused to deliver service excellence, and{" "}
                  <br /> value in healthcare, with transparency & ethical
                  practices, all <br /> this within a culture of compassion,
                  quality & Integrity.”
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center">
              <h2>Our Team</h2>
              <p className="lh-lg">
                Our experienced team of doctors is dedicated to providing
                exceptional healthcare services. With expertise in various
                specialties, our <br /> compassionate doctors deliver
                personalized care to meet your unique needs. From general
                healthcare to specialized treatments, trust us to <br /> guide
                you towards better health with our patient-centered approach
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 p-3">
                <div className="card shadow">
                  <div className="pt-3 px-3">
                    <img
                      className="card-img-top"
                      src={ceo}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5
                      className="card-title p-2"
                      style={{ background: "#005198", color: "#fff" }}
                    >
                      Dr. Ahmed A Khan
                    </h5>
                    <p className="card-text">Managing Director & CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="card shadow">
                  <div className="pt-3 px-3">
                    <img
                      className="card-img-top"
                      src={ceo}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5
                      className="card-title p-2"
                      style={{ background: "#005198", color: "#fff" }}
                    >
                      Dr. Ahmed A Khan
                    </h5>
                    <p className="card-text">Managing Director & CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="card shadow">
                  <div className="pt-3 px-3">
                    <img
                      className="card-img-top"
                      src={ceo}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5
                      className="card-title p-2"
                      style={{ background: "#005198", color: "#fff" }}
                    >
                      Dr. Ahmed A Khan
                    </h5>
                    <p className="card-text">Managing Director & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Clientsayscarousel />
          </div>
        </div>
        <ContactUs />
      </div>
    </>
  );
}

export default OurStory;
