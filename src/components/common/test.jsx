import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OffCanvas } from "./common/sidecanvas.component";

export const Navigation = ({ page }) => {
  const isWhite = page === "detail";
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickToggle = () => {
    setisOpen(!isOpen);
  };
  const navc = document.querySelector(".navbar-collapse"); // Get element from DOM
  const navtoggler = document.querySelector(".navbar-toggler"); // Get element from DOM
  const handleClickLink = (x, path) => {
    setisOpen(false);
    navc?.classList?.remove("show");
    navtoggler.classList?.remove("collapsed");
    if (path) {
      redirectPage(path);
    }
  };

  const redirectPage = (path) => {
    navigate(`/${path}`);
  };

  return (
    
    // <nav id="menu" className="navbar navbar-default navbar-fixed-top ">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <button
    //         type="button"
    //         className="navbar-toggle collapsed"
    //         data-toggle="collapse"
    //         data-target="#bs-example-navbar-collapse-1"
    //       >
    //         {" "}
    //         <span className="sr-only">Toggle navigation</span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //       </button>
    //       <a className="navbar-brand page-scroll" href="#page-top">
    //         React Landing Page
    //       </a>{" "}
    //     </div>

    //     <div
    //       className="collapse navbar-collapse"
    //       id="bs-example-navbar-collapse-1"
    //     >
    //       <ul className="nav navbar-nav navbar-right">
    //         {/* <li>
    //           <a href="#features" className="page-scroll text-white">
    //             Features
    //           </a>
    //         </li> */}
    //         <li>
    //           <a href="#about" className="page-scroll text-white">
    //             About Us
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#services" className="page-scroll text-white">
    //             Terms of Use
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#portfolio" className="page-scroll">
    //             Explore Cars
    //           </a>
    //         </li>
    //         {/* <li>
    //           <a href="#testimonials" className="page-scroll">
    //             Testimonials
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#team" className="page-scroll">
    //             Team
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#contact" className="page-scroll">
    //             Contact
    //           </a>
    //         </li> */}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
<>
    <nav
      className={`navbar navbar-expand-lg navbar-default  fixed-top py-4 ${
        isWhite ? "bg-white" : ""
      } `}
      id="menu"
    >
      <div className="container-fluid">
        <button
          className={`navbar-toggler btn-light `}
          onClick={handleClickToggle}
          type="button"
//data-bs-toggle="collapse"
                  data-bs-toggle="offcanvas"
                //  data-bs-target="#navbarText"
                  data-bs-target="#offcanvasExample"
                //  aria-controls="navbarText"
                  aria-controls="offcanvasExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fs-4">
            <i className="bi bi-list text-white "></i>
          </span>
        </button>
        <a
          className="navbar-brand pointer-cursor"
          onClick={() => navigate("/")}
        >
          <img
            src={`./img/${isWhite ? "logoblue.png" : "logo.png"}`}
            alt=""
            height={50}
          />
        </a>

        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly nav-ul">
            <li className="nav-item">
              <a
                // href="#whyus"
                onClick={() => handleClickLink(false, "aboutus")}
                className={`cusrsor-pointer pointer-cursor nav-link active page-scroll ${
                  isWhite ? "text-theme" : ""
                }`}
                aria-current="page"
              >
                About Us
              </a>
            </li>
            <li className="nav-item" onClick={() => handleClickLink(false)}>
              <a
                className={`nav-link active ${isWhite ? "text-theme" : ""}`}
                href="#"
              >
                Terms of Use
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => redirectPage("explorescar")}
            >
              <a
                className={`nav-link active page-scroll ${
                  isWhite ? "text-theme" : ""
                }`}
                href="#explorecar"
              >
                Explore Cars
              </a>
            </li>
          </ul>
          <div className="navbar-text text-center">
            {/* Navbar text with an inline element */}
            <button
              type="button"
              class={`btn ${
                isWhite ? "btn-outline-dark" : "btn-outline-light"
              } me-5`}
              onClick={() => redirectPage("signin")}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <OffCanvas isOpen={isOpen} handleClickToggle={handleClickToggle} redirectPage={redirectPage} handleClickLink={handleClickLink}/>
      </div>
    </>
  );
};


