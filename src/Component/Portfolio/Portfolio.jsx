import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../imgs/port1.png";
import img2 from "../../imgs/port2.png";
import img3 from "../../imgs/port3.png";

export default function Portfolio() {
  useEffect(() => {
    let imgPorts = document.querySelectorAll(".portImg");
    const lightBoxContainer = document.getElementById("lightBoxContainer");
    let currentIndex = -1;
    imgPorts.forEach((port, index) => {
      port.addEventListener("click", () => {
        let imgSrc = port.firstElementChild.getAttribute("src");
        currentIndex = index;
        lightBoxContainer.style.display = "flex";
        lightBoxContainer.firstElementChild.firstElementChild.setAttribute(
          "src",
          imgSrc
        );
      });
    });

    const closeModal = () => {
      lightBoxContainer.style.display = "none";
    };


    lightBoxContainer.addEventListener('click',(event)=>{
      if(event.target===lightBoxContainer){
        closeModal()
      }
    })

    function nextSlide() {
      currentIndex++;
      if (currentIndex >= imgPorts.length) {
        currentIndex = 0; // Wrap around to the first image
      }
      let newSrc = imgPorts[currentIndex].firstElementChild.getAttribute("src");
      lightBoxContainer.firstElementChild.firstElementChild.setAttribute(
        "src",
        newSrc
      );
    }
    function prevSlide() {
      currentIndex--;
      if (currentIndex === -1) {
        currentIndex = imgPorts.length - 1;
      }
      let newSrc = imgPorts[currentIndex].firstElementChild.getAttribute("src");
      lightBoxContainer.firstElementChild.firstElementChild.setAttribute(
        "src",
        newSrc
      );
    }

    const handleRightArrowPress = (event) => {
      if (event.keyCode === 39 || event.key === "ArrowRight") {
        nextSlide();
      }
    };

    const handleLeftArrowPress = (event) => {
      if (event.keyCode === 37 || event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    document.addEventListener("keydown", handleLeftArrowPress);
    document.addEventListener("keydown", handleRightArrowPress);
  }, []);
  return (
    <>
      <div id="lightBoxContainer">
        <div className="lightBox">
          <img src={img1} className="w-100" alt="" />
        </div>
      </div>

      <div className="contacts  row justify-content-center m-5 align-items-center">
        <div className="container-fluid p-5 ">
          <div className=" text-center  row align-items-center p-2  ">
            <div className="container-fluid p-2 ">
              <h1 className="pb-2 mt-4 toptext fw-bolder">
                PORTFOLIO COMPONENT
              </h1>
              <div className="linenStar my-3 d-flex justify-content-center align-items-center ">
                <div className="lineContact"></div>
                <i className="starContact fa-solid fa-star mx-3"></i>
                <div className="lineContact"></div>
              </div>
            </div>
          </div>
          <div className="workingImgs w-100 ">
            <div className="row g-5">
              <div className="col-lg-4  col-md-6 ">
                <div className="portImg">
                  <img src={img1} className="w-100" alt="" />
                  <div className="imgLayer  justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="fa-6x"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-6 ">
                <div className="portImg">
                  <img src={img2} className="w-100" alt="" />
                  <div className="imgLayer  justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="fa-6x"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-6 ">
                <div className="portImg">
                  <img src={img3} className="w-100" alt="" />
                  <div className="imgLayer  justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="fa-6x"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-6 ">
                <div className="portImg">
                  <img src={img1} className="w-100" alt="" />
                  <div className="imgLayer  justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="fa-6x"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-6 ">
                <div className="portImg">
                  <img src={img2} className="w-100" alt="" />
                  <div className="imgLayer  justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="fa-6x"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-6 ">
                <div className="portImg">
                  <img src={img3} className="w-100" alt="" />
                  <div className="imgLayer  justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="fa-6x"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
