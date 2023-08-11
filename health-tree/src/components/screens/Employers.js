import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import employer from "../images/employer.png";

function Employers() {
  const [formData, setFormData] = useState({
    name: "",
    ctname:"",
    email: "",
    phoneNumber: "",
    message: "",
    preferredare:"",
    positionfill:"",
    positionnumber:"",
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
        from_name: formData.name,
        to_ctname: formData.ctname,
        to_message: formData.message,
        to_email: formData.email,
        to_PhoneNumber: formData.phoneNumber,
        to_positionfill: formData.positionfill,
        to_preferredare: formData.preferredare,
        to_positionnumber: formData.positionnumber,
        message_html: `
          Name: ${formData.name}<br />
          Ctname: ${formData.ctname}<br />
          Email: ${formData.email}<br />
          Phone Number: ${formData.phoneNumber}<br />
          Message: ${formData.message}<br />
          Preferredare: ${formData.preferredare}<br />
          Positionfill: ${formData.positionfill}<br />
          Positionnumber: ${formData.positionnumber}<br />          
          
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
          message:"Thank you for reaching out to HealthTree for your healthcare workforce requirements. We appreciate your interest in our recruitment services. Our team of experts is dedicated to finding the best-fit professionals for your organization's needs. If you have any additional questions or need further assistance, feel free to contact us."
          
          }
        )
    })
   
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className="main">
      <h1 className="ctsus">Partner with HealthTree for Your Healthcare Workforce Needs</h1>
      <p>
        HealthTree is your trusted partner in sourcing top-quality healthcare
        professionals. Fill in the form to discuss your hiring needs and let us
        provide you <br /> with the perfect fit for your team.
      </p>
      <div className="row">
        <div className="col-md-6 shadow-lg p-3 pb-0 mb-2 bg-body rounded ">
          <form onSubmit={handleSubmit}>
            <div className="form-group col ">
              <input
                type="text"
                className="form-control ml-5"
                placeholder="Company/Organization Name:"
                name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    required
              />
            </div>
            <div className="form-group col pt-2">
              <input
                type="text"
                className="form-control ml-5"
                placeholder="Contact Person"
                name="ctname"
                value={formData.ctname}
                onChange={handleInputChange}
              required
              />
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
                placeholder="Position to Fill:"
                name="positionfill"
                      value={formData.positionfill}
                      onChange={handleInputChange}
                    
              />
            </div>
            <div className="form-group col pt-2">
              <input
                type="text"
                className="form-control ml-5"
                placeholder="Number of Positions:"
                name="positionnumber"
                      value={formData.positionnumber}
                      onChange={handleInputChange}
                    
              />
            </div>
            <div className="form-group col pt-2">
              <input
                type="text"
                className="form-control ml-5"
                placeholder="Preferred Specialty/Area:"
                name="preferredare"
                      value={formData.preferredare}
                      onChange={handleInputChange}
                    
              />
            </div>
            <div className="form-group col pt-2">
              
               <textarea
               type="text"
                      className="form-control ml-5"
                      placeholder="Additional Comments or Requirements:"
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
            </div>

            <div className="text-center">
            <button className="btn mt-3 mb-2 " type="submit">GET IN TOUCH {">"}</button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div>
            <img src={employer} alt="" className="img-fluid p-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employers;
