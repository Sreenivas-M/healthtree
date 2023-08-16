import React, { useState } from "react";
import emailjs from "emailjs-com";
import formimg from "../images/formimg.png";
import Swal from 'sweetalert2';

function HealthcareForm() {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    message: "",
    destination:"",
    comments:"",
    questions:"",
    concerns:"",
    companions:"",
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
        to_destination: formData.destination,
        to_comments: formData.comments,
        to_date: selectedDate,
        to_questions: formData.questions,
        to_concerns: formData.concerns,
        to_companions: formData.companions,
        message_html: `
          Name: ${formData.fname}<br />
          Name: ${formData.lname}<br />
          Email: ${formData.email}<br />
          Phone Number: ${formData.phoneNumber}<br />
          Phone Number: ${formData.message}<br />
          Destination: ${formData.destination}<br />
          Comments: ${formData.comments}<br />
          SelectedDate: ${selectedDate}<br />
          Questions: ${formData.questions}<br />
          Concerns: ${formData.concerns}<br />
          Companions: ${formData.concerns}<br />
          
          
        `,
      };
      const serviceID = "service_3qw0dgr";
      const templateID = "template_0lfvgxw";
      const publicKey = "4i-_qT5weaGkFiVzL";
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((res) => {
        setTimeout(() => {
          window.location.reload()
        }, 3000);
        Swal.fire(
          {icon: 'success',
          text:'Thank You',
          message:"For choosing HealthTree. We look forward to embarking on this transformational experience with you."
          }
        )
    })
   
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <>
      <div className="main">
        <h1>Get in touch with us!</h1>
        <p>
          Thank you for considering HealthTree for your healthcare tourism
          journey. To tailor an unforgettable experience that meets your unique
          needs, we kindly request you to provide us with some essential
          details. Please take a moment to fill out the following inquiry form
        </p>
        <div className="row">
          <div className="col-md-6 shadow-lg p-4 g-4 bg-body rounded">
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
                  className="form-group col-md-5 lnameinput2"
                >
                  <input
                    type="text"
                    className="form-control ml-5"
                    placeholder="Last Name"
                    name="lname"
                      value={formData.lname}
                      onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group col pt-2">
                <input
                  type="number"
                  className="form-control ml-5"
                  placeholder="Phone Number"
                  name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group col pt-2">
                <input
                  type="email"
                  className="form-control ml-5"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group col pt-2">
                <input
                  type="text"
                  className="form-control ml-5"
                  placeholder="Preferred Destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group col pt-2">
                <input
                  type="text"
                  className="form-control ml-5"
                  placeholder="Medical Procedure(s) of Interest"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group col pt-2">
                <textarea
                type="text"
                  className="form-control ml-5"
                  placeholder="Additional Comments or Requirements:"
                  rows="2"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-group col pt-2">
                <input
                  type="date"
                  className="form-control ml-5"
                  placeholder="Preferred Travel Dates"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={handleDateChange}
                  value={selectedDate}
                  required
                />
              </div>

              <div className="form-group col pt-2">
                <input
                  type="text"
                  className="form-control ml-5"
                  placeholder="Number of Travel Companions"
                  name="companions"
                  value={formData.companions}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col pt-2">
                <textarea
                  className="form-control ml-5"
                  placeholder="Any Specific Medical Requirements or Concerns:"
                  rows="2"
                  name="concerns"
                  value={formData.concerns}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-group col pt-2">
                <textarea
                  className="form-control ml-5"
                  placeholder="Additional Comments or Questions:"
                  rows="2"
                  name="questions"
                  value={formData.questions}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <p>
                Once you submit the form, our dedicated team will be in touch
                shortly to assist with your inquiry and guide you through the
                next steps of your journey to wellness.
              </p>

              <div className="text-center" style={{ paddingBottom: "-10px" }}>
                <button className="btn mt-2" type="submit">SUBMIT {">"}</button>
              </div>
            </form>
          </div>

          <div className="col-md-6 g-4">
            <div className="">
              <img src={formimg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthcareForm;
