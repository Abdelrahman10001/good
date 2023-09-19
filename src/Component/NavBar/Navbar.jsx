import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {



  
  const [scrollPadding, setScollPadding] = useState(25);

  useEffect(() => {
    const handlescroll = () => {
      const newPadding = window.scrollY === 0 ? 25 : 0;
      setScollPadding(newPadding);
    };

    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  const navStyle = {
    padding: `${scrollPadding}px`,
    transition: "ease 1s padding",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={navStyle}>
        <div className="container">
          <Link className="navbar-brand fw-bolder fs-2" to="">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold " to="about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="portfolio">
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
