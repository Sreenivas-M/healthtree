import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Pnf from "./screens/Pnf";
import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import Recuitment from "./screens/Recuitment";
import Corporate from "./screens/Corporate";
import Diagonastics from "./screens/Diagonastics";
import OurStory from "./screens/OurStory";
import Footer from "./screens/Footer";
import Candidates from "./screens/Candidates";
import Employers from "./screens/Employers";
import HealthcareTourism from "./screens/HealthcareTourism";
import HealthcareForm from "./screens/HealthcareForm";
import ScrollToTop from "./screens/utils/ScrollToTop";
import Blogs from "./screens/Blogs";
import Blogone from "./screens/Blogone";
import ConsultancyManagement from "./screens/ConsultancyManagement";
import ContactUs from "./screens/ContactUs";

function Main() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop >
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/recruiment"} element={<Recuitment />} />
        <Route path={"/corporate"} element={<Corporate />} />
        <Route path={"/diagnostic"} element={<Diagonastics />} />
        <Route path={"/ourstory"} element={<OurStory />} />
        <Route path={"/candidates"} element={<Candidates />} />
        <Route path={"/employees"} element={<Employers />} /> 
        <Route path={"/blog"} element={<Blogs />} /> 
        <Route path={"/blog/blogone"} element={<Blogone />} /> 
        <Route path={"/healthcaretourism"} element={<HealthcareTourism />} />
        <Route path={"/management"} element={<ConsultancyManagement />} />
        <Route path={"/healthcaretourism/healthform"} element={<HealthcareForm />} /> 
        <Route path={"/contact"} element={<ContactUs />} /> 
        <Route path={"/*"} element={<Pnf />} />
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router>
  );
}

export default Main;
