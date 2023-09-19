import React from "react";
import homeImage from "../../imgs/homeimg.svg";

export default function Home() {





  
  return (
    <>
      <div className="home text-center justify-content-center p-5 mt-5">
        <img className=" mt-4 homeimg" src={homeImage} alt="" />
        <h1 className="pb-2 mt-4 fw-bolder">START FRAMEWORK</h1>
        <div className="linenStar my-3 d-flex justify-content-center align-items-center ">
          <div className="line"></div>
          <i className="star fa-solid fa-star mx-3"></i>
          <div className="line"></div>
        </div>
        <div className="whoami pb-5">
          Graphic Artist - Web Designer - Illustrator
        </div>
      </div>
    </>
  );
}
