import React from 'react';
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../images/image 39.png"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-light fixed-top">
      <div className="container">
        <NavLink to={"/"} className="navbar-brand">
          <img src={logo} alt="Health Tree" className='imgfluid'/>
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="menu"
        >
          <ul className="navbar-nav">
            <li className="nav-item customnav active">
              <NavLink to={"/recruiment"} className="nav-link">
              INTERNATIONAL RECRUITMENT
              </NavLink>
            </li>
            <li className="nav-item customnav">
              <NavLink to={"/corporate"} className="nav-link ">
              CORPORATE HEALTHCARE SOLUTIONS
              </NavLink>
            </li>
            <li className="nav-item customnav">
              <NavLink to={"/diagnostic"} className="nav-link ">
              MEDICAL AND DIAGNOSTIC SERVICES
              </NavLink>
            </li>
            <li className="nav-item customnav">
              <NavLink to={"/ourstory"} className="nav-link ">
              OUR STORY
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar