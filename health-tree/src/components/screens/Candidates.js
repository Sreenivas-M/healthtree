import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import medical from "../images/medical.png";
import Select from "react-select";
const options = [
  { value: "andrapradesh", label: "AndraPradesh" },
  { value: "goa", label: "Goa" },
  { value: "kerala", label: "Kerala" },
];

function Candidates() {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

 

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    message: "",
    position:"",
    location:"",
    experiance:"",
    address:"",
    city:"",
    pincode:"",
    
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
        to_position: formData.position,
        to_location: formData.location,
        to_experiance: formData.experiance,
        to_selectedFile: selectedFile,
        to_address:formData.address,
        to_city:formData.city,
        to_country:formData.country,
        to_state:formData.state,
        to_pincode:formData.pincode,        
        message_html: `
          Name: ${formData.fname}<br />
          Name: ${formData.lname}<br />
          Email: ${formData.email}<br />
          Phone Number: ${formData.phoneNumber}<br />
          Message: ${formData.message}<br />
          Position: ${formData.position}<br />
          Location: ${formData.location}<br />
          Experiance: ${formData.experiance}<br />
          Address: ${formData.address}<br />
          City: ${formData.city}<br />
          Pincode: ${formData.pincode}<br />
          File: ${selectedFile}<br />
          Country: ${country}<br />
          State: ${state}<br />
          
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
          Swal.fire({
            icon: "success",
            text: "Thank You",
            message:
              "Thank you for expressing your interest in joining HealthTree's healthcare team. We appreciate your application and will carefully review your qualifications. Our recruitment specialists will be in touch shortly to discuss potential opportunities that match your expertise and aspirations.",
          });
        });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="main">
      <h1 className="ctsus">
        Partner with HealthTree for Your Healthcare Workforce Needs
      </h1>
      <p>
        HealthTree is your trusted partner in sourcing top-quality healthcare
        professionals. Fill in the form to discuss your hiring needs and let us{" "}
        <br />
        provide you with the perfect fit for your team.
      </p>
      <div className="row">
        <div className="col-md-6 shadow-lg p-3 mb-5 bg-body rounded ">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div
                className="form-group col-md-6"
                style={{ marginRight: "25px", width: "290px" }}
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
              <div className="form-group col-md-5 " style={{ width: "310px" }}>
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
                placeholder="Position of Interest:"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
              
              />
            </div>
            <div className="form-group col pt-2">
              <input
                type="text"
                className="form-control ml-5"
                placeholder="Preferred Location(s):"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            
           
            <div className="form-group col pt-2">
              <input
                type="text"
                className="form-control ml-5"
                placeholder="Years of Experience:"
                name="experiance"
                value={formData.experiance}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col pt-2">
              <input
                type="file"
                className="form-control ml-5"
                placeholder="Upload Resume/CV:"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group col pt-2">
              <textarea
                className="form-control ml-5"
                placeholder="Address"
                rows="3"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="form-group col pt-2">
              <Select
              value={country}
                onChange={setCountry}
                options={options}
                placeholder="Country"
              />
            </div>

            <div className="form-group col pt-2">
              <Select
                value={state}
                onChange={setState}
                options={options}
                placeholder="State"
              />
            </div>
            <div className="form-group col pt-2">
              <input
                type="text"
                className="form-control ml-5"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col pt-2">
              <input
                type="text"
                className="form-control ml-5"
                placeholder="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col pt-2">
              <textarea
                className="form-control ml-5"
                placeholder="Additional Comments or Questions:"
                rows="3"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="text-center">
              <button className="btn mt-3 mb-2 " type="submit">
                APPLY NOW {">"}
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div>
            <img src={medical} alt="" className="img-fluid p-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidates;
