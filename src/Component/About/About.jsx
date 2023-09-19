import React from "react";

export default function About() {
  return (
    <>
      <div className="about text-center d-flex align-items-center p-5 mt-5 ">
        <div className="container-fluid p-5 ">
          <h1 className="pb-2 mt-4 fw-bolder">ABOUT COMPONENT</h1>
          <div className="linenStar my-3 d-flex justify-content-center align-items-center ">
            <div className="line"></div>
            <i className="star fa-solid fa-star mx-3"></i>
            <div className="line"></div>
          </div>
          <div className="row px-5 ">
            <p className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
