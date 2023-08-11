import React from "react";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";

const data = [
  {
    img: blog1,
    text: "Gap Analysis & Bench Marking survey",
    header: "What is Cubital Tunnel Syndrom...",
    bloglink: "http://localhost:3000/blog/blogone",
  },
  {
    img: blog2,
    text: "Hospital Planning- New/Restructuring",
    header: "What is Cubital Tunnel Syndrom...",
    bloglink: "http://localhost:3000/blog/blogone",
  },
  {
    img: blog3,
    text: "Final Hospital Audits- Validatin",
    header: "What is Cubital Tunnel Syndrom...",
    bloglink: "http://localhost:3000/blog/blogone",
  },
  {
    img: blog1,
    text: "Strategic Operations, Administrative ",
    header: "What is Cubital Tunnel Syndrom...",
    bloglink: "http://localhost:3000/blog/blogone",
  },
  {
    img: blog2,
    text: "Hospital Supplies and inventory ",
    header: "What is Cubital Tunnel Syndrom...",
    bloglink: "http://localhost:3000/blog/blogone",
  },
  {
    img: blog3,
    text: "Hospital Admin Facilities Management.",
    header: "What is Cubital Tunnel Syndrom...",
    bloglink: "http://localhost:3000/blog/blogone",
  },
  // Add more objects as needed
];

function Blogs() {
  return (
    <>
      <div className="text-center" style={{ marginTop: "100px" }}>
        <h1 className="p-3">Blogs</h1>
      </div>
      <div className="main">
        {
          <div className="row justify-content-center m-3">
            {data.map((item, index) => (
              <div className="col-md-4 p-2">
                <div className="border border-primary p-3">
                  <div key={index}>
                    <img
                      src={item.img}
                      aalt={`Image ${index}`}
                      className="img-fluid "
                    />
                  </div>
                  <h6 className="pt-2">{item.text}</h6>
                  <p>{item.text}</p>
                  <div>
                    <p className="text-primary">
                      <a
                        href={item.bloglink}
                        className=""
                        style={{ textDecoration: "none" }}
                      >
                        CONTINUE
                      </a>
                    </p>
                    <div
                      className="bar"
                      style={{
                        marginLeft: "-1px",
                        marginTop: "-10px",
                        width: "100px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </>
  );
}

export default Blogs;
