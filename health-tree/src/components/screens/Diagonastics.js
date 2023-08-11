import React from "react";
import coworkers from "../images/coworkers.png";
import microscope from "../images/microscope.png";
import ServiceCarousel from "./ServiceCarousel";

function Diagonastics() {
  return (
    <>
      <div>
        <div
          className="row"
          style={{ background: "#005198", marginTop: "100px" }}
        >
          <div className="col-md-6">
            <h1 className="recbanner5">
              Cutting-Edge Medical Diagnostics for Corporate Wellness
            </h1>
          </div>
          <div className="col-md-6">
            <div>
              <img src={coworkers} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div className="main">
          <div className="text-center">
            <h2>Comprehensive Diagnostic Services for Your Well-being</h2>
            <p className="p-4 lh-lg">
              Advanced diagnostics for your well-being. From radiology to
              cardiology, obstetrics to orthopedics, our comprehensive range of{" "}
              <br />
              services ensures accurate and timely results. Experience
              personalized care and prioritize your health with Health Tree.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src={microscope} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="p-4">
                Advanced Medical Services Tailored for Corporate Clients
              </h3>
              <p className="p-4 lh-lg">
                At Health Tree Medical and Diagnostics, we prioritize accuracy,
                precision, and reliability in every aspect of our services. With
                over a decade of experience, our centrally located and easily
                accessible facility is dedicated to serving corporate clients
                with fast, reliable, and cost-efficient medical reports.
              </p>
              <p className="px-4 lh-lg">
                We believe in the importance of early detection, prevention, and
                immediate attention to ensure optimal healthcare outcomes. Our
                comprehensive range of diagnostic services includes
                state-of-the-art technologies and expert medical professionals.
                From radiology and pathology to cardiology and specialized
                screenings, we are committed to delivering top-quality services
                that promote well-being and proactive healthcare management.With
                HealthTree Medical and Diagnostics, you can trust in our
                expertise, efficiency, and unwavering commitment to your health
                and wellness.
              </p>
            </div>
          </div>

          <div>
            <ServiceCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Diagonastics;
