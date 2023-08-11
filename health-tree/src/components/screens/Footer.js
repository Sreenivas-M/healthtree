import React from "react";
import ftimg from "../images/ftimg.png";
import fb from "../images/fc.png";
import link from "../images/link.png";
import you from "../images/you.png";
import insta from "../images/fc.png";
import twi from "../images/twi.png";
import rtarrow from "../images/rtarrow.png";
import { NavLink } from "react-router-dom";
import whatsapp from "../images/whatsapp.png";

function Footer() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9972488461'; // Replace with the desired phone number
    const message = encodeURIComponent('Hello, this is a pre-filled message.');

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  };
  return (
    <>
      <div className="row main">
        <div className="col-md-3">
          <h5>Quick Links</h5>
          <ul className="disk">
            <li className="p-1">
            <NavLink to={"/home"} style={{ textDecoration: 'none', color:"black" }}>Home</NavLink>
              </li>
            <li className="p-1">
            <NavLink to={"/ourstory"} style={{ textDecoration: 'none', color:"black" }}>Our Story</NavLink>
              </li>
            <li className="p-1">
            <NavLink to={"/blog"} style={{ textDecoration: 'none', color:"black" }}>Blog</NavLink>
              </li>
            <li className="p-1">
            <NavLink to={"/home"} style={{ textDecoration: 'none', color:"black" }}>Contact Us</NavLink>
              </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Quick Links</h5>
          <ul className="disk">
            <li className="p-1">
            <NavLink to={"/corporate"} style={{ textDecoration: 'none', color:"black" }}>Corporate Health Service</NavLink>
              </li>
            <li className="p-1">
            <NavLink to={"/recruiment"} style={{ textDecoration: 'none', color:"black" }}>International Recruitment</NavLink>
            </li>
            <li className="p-1">
            <NavLink to={"/diagnostic"} style={{ textDecoration: 'none', color:"black" }}>Medical and Diagnostics Services</NavLink>
              </li>
            <li className="p-1">
            <NavLink to={"/management"} style={{ textDecoration: 'none', color:"black" }}>Hospital Consultancy Management</NavLink>
              </li>
            <li className="p-1">
              <NavLink to={"/healthcaretourism"} style={{ textDecoration: 'none', color:"black" }}>Healthcare Tourism</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="border p-3">
            <h5 className="font-weight-bold">Subscribe</h5>
            <div className="d-flex">
              <input
                type="text"
                className="mt-2 mb-2"
                placeholder="Enter Email Address"
                style={{
                  width: "500px",
                  height: "45px",
                  padding: "10px",
                  fontSize: "16px",
                }}
              />
              
              <img src={rtarrow} alt="" className="mt-2" style={{width:"50px", height:"45px"}} />

            </div>
            <p>
              Sign up for our newsletter to stay updated with the latest news.
            </p>
          </div>
        </div>
      </div>

      <div className="row main">
        <div className="col-md-4">
          <img src={ftimg} alt="" className="w-75 h-75" />
        </div>
        <div className="col-md-4">
          <div className="d-flex mt-5">
            <p >Terms of Service </p> &nbsp; &nbsp; &nbsp; <p> Privacy Policy </p>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <img src={fb} alt="" className="img-fluid"/>
            <img src={link} alt="" />
            <img src={insta} alt="" />
            <img src={you} alt="" />
            <img src={twi} alt="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footertext">
          Copyright © 2023 | HealthTree Services Private Limited . All rights
          reserved.
        </p>
      </div>
      <div className="whatsapp">
      {/* <button onClick={handleWhatsAppClick}>Send WhatsApp Message</button> */}
        <img src={whatsapp} alt="" className="img-fluid" onClick={handleWhatsAppClick} />
      </div>
    </>
  );
}

export default Footer;
