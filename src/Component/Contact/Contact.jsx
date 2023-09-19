import React, { useEffect, useState } from "react";

export default function Contact() {
  useEffect(() => {
    const inputElements = document.querySelectorAll("input");
    const labelElements = document.querySelectorAll("label");

    inputElements.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        if (e.data != null) {
          labelElements[index].classList.add("labelStyle");
        } else {
          labelElements[index].classList.remove("labelStyle");
        }
      });
    });
  });

  return (
    <>
      <div className="contacts  d-flex justify-content-center align-items-center">
        <div className="container p-5 ">
          <div className=" text-center row align-items-center p-2  ">
            <div className="container-fluid p-5 ">
              <h1 className="pb-2 mt-4 toptext fw-bolder">CONATCT SECTION</h1>
              <div className="linenStar my-3 d-flex justify-content-center align-items-center ">
                <div className="lineContact"></div>
                <i className="starContact fa-solid fa-star mx-3"></i>
                <div className="lineContact"></div>
              </div>
            </div>
          </div>
          <div className=" form-Field mx-auto col-md-6">
          <div className=" position-relative ">
            <label className=" position-absolute " htmlFor="userName">
              userName :
            </label>
            <input
              type="text"
              id="userName"
              className=" w-100 mx-auto mb-5"
              placeholder="Your Name"
            />
          </div>
          <div className=" position-relative ">
            <label className=" position-absolute " htmlFor="userAge">
            userAge :
            </label>
            <input
              type="number"
              id="userAge"
              className=" w-100 mx-auto mb-5"
              placeholder="Your Age"
            />
          </div>
          <div className=" position-relative ">
            <label className=" position-absolute " htmlFor="userEmail">
            userEmail :
            </label>
            <input
              type="email"
              id="userEmail"
              className=" w-100 mx-auto mb-5"
              placeholder="Your Email"
            />
          </div>
          <div className=" position-relative ">
            <label className=" position-absolute " htmlFor="userPass">
            userPassword :
            </label>
            <input
              type="password"
              id="userPass"
              className=" w-100 mx-auto mb-5"
              placeholder="Your Password"
            />
          </div>
            <button className="btn btn-success mx-auto">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
