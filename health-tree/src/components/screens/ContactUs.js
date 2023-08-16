import React, { useState } from "react";
import emailjs from "emailjs-com";
import loc from "../images/loc.png";
import email from "../images/email.png";
import phone from "../images/phone.png";
import Swal from "sweetalert2";

function ContactUs() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const templateParams = {
        from_name: formData.fname + " " + formData.lname,
        to_message: formData.message,
        to_email: formData.email,
        to_PhoneNumber: formData.phoneNumber,
        message_html: `
          Name: ${formData.fname}<br />
          Name: ${formData.lname}<br />
          Email: ${formData.email}<br />
          Phone Number: ${formData.phoneNumber}<br />
          Phone Number: ${formData.message}<br />
        `,
      };
      const serviceID = "service_3qw0dgr";
      const templateID = "template_0lfvgxw";
      const publicKey = "4i-_qT5weaGkFiVzL";
      await emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((res) => {
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          Swal.fire({ icon: "success", text: "Submited Successfully" });
        });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <>
      <div style={{ background: "#e7f8fd" }} className="pt-5 pb-3">
        <h1 className="text-center ctsus">Contact Us</h1>
      
      <div className="row main">
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9 text-center justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5535651966684!2d77.60858627489591!3d13.000381114247036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16f633958de1%3A0x9cdb8db0de481b24!2sHealthTree%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1691688009132!5m2!1sen!2sin"
              className="resmap"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="row mt-3">
            <div className="col-2 align-self-center">
              {" "}
              <img src={email} alt="" height="50px" width="50px" />
            </div>
            <div className="col-10">
              <h5 className="loctext">Email</h5>
              <p className="locptext">support@healthtree.co.in</p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 align-self-center">
              {" "}
              <img src={loc} alt="" height="50px" width="50px" />
            </div>
            <div className="col-10">
              <h5 className="loctext">Location</h5>
              <p className="locptext">HealthTree Services Pvt Ltd</p>
              <p className="locptext">
                {" "}
                G5, #12, Ashoka Enclave, Netaji Road, Frazer town, Bangalore
                560005
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 align-self-center">
              {" "}
              <img src={phone} alt="" height="50px" width="50px" />
            </div>
            <div className="col-10">
              <h5 className="loctext">Contact Us</h5>
              <p className="locptext"> U.A.E : +971544460308</p>
              <p className="locptext">
                INDIA : 8550077883/ 080 41514141/ 080 41526007
              </p>
              <p className="locptext">K.S.A : +966502882833</p>
            </div>
          </div>
        </div>
        <div className="col-md-6" style={{ background: "#fff" }}>
          <div className="border p-3 shadow">
            <h3 className="mt-4 ctsus2">Get in touch with us!</h3>
            <p className="mt-4 ctusp">
              We would love to hear from you. Fill out the form below and our
              team will contact you shortly. We look forward to connecting with
              you!
            </p>
            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div
                    className="form-group col-md-6 fnameinput"
                    style={{ marginRight: "25px"}}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="fname"
                      value={formData.fname}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div
                    className="form-group col-md-5 lnameinput"
                    
                  >
                    <input
                      type="text"
                      className="form-control ml-5"
                      placeholder="Last Name"
                      name="lname"
                      value={formData.lname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group col-12">
                  <input
                    type="number"
                    className="form-control mt-3"
                    placeholder="Contact Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group col">
                  <input
                    type="email"
                    className="form-control mt-3"
                    placeholder=" Work email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    type="text"
                    className="form-control mt-3"
                    placeholder="Your Message"
                    rows="14"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="text-center mt-3 mb-3">
                  <button className="btn" type="submit">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ContactUs;
