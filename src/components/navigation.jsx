// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { OffCanvas } from "./common/sidecanvas.component";

// export const Navigation = ({ page }) => {
//   const isWhite = page === "detail";
//   const [isOpen, setisOpen] = useState(false);
//   const navigate = useNavigate();
//   const handleClickToggle = () => {
//     if(isOpen){
//       // offcanvas-backdrop
//       const offCanvas = document.querySelector(".offcanvas-backdrop")
//       if(offCanvas){
//         offCanvas?.remove()
//       }
//     }
//     setisOpen(!isOpen);
//   };
//   const navc = document.querySelector(".navbar-collapse"); // Get element from DOM
//   const navtoggler = document.querySelector(".navbar-toggler"); // Get element from DOM
//   const handleClickLink = (x, path) => {
//     setisOpen(false);
//     const offCanvas = document.querySelector(".offcanvas-backdrop")
//       if(offCanvas){
//         offCanvas?.remove()
//       }
//     // if (path) {
//       redirectPage(path);
//     // }
//   };

//   const redirectPage = (path) => {
//     navigate(`/${path}`);
//   };

//   return (

//     // <nav id="menu" className="navbar navbar-default navbar-fixed-top ">
//     //   <div className="container">
//     //     <div className="navbar-header">
//     //       <button
//     //         type="button"
//     //         className="navbar-toggle collapsed"
//     //         data-toggle="collapse"
//     //         data-target="#bs-example-navbar-collapse-1"
//     //       >
//     //         {" "}
//     //         <span className="sr-only">Toggle navigation</span>{" "}
//     //         <span className="icon-bar"></span>{" "}
//     //         <span className="icon-bar"></span>{" "}
//     //         <span className="icon-bar"></span>{" "}
//     //       </button>
//     //       <a className="navbar-brand page-scroll" href="#page-top">
//     //         React Landing Page
//     //       </a>{" "}
//     //     </div>

//     //     <div
//     //       className="collapse navbar-collapse"
//     //       id="bs-example-navbar-collapse-1"
//     //     >
//     //       <ul className="nav navbar-nav navbar-right">
//     //         {/* <li>
//     //           <a href="#features" className="page-scroll text-white">
//     //             Features
//     //           </a>
//     //         </li> */}
//     //         <li>
//     //           <a href="#about" className="page-scroll text-white">
//     //             About Us
//     //           </a>
//     //         </li>
//     //         <li>
//     //           <a href="#services" className="page-scroll text-white">
//     //             Terms of Use
//     //           </a>
//     //         </li>
//     //         <li>
//     //           <a href="#portfolio" className="page-scroll">
//     //             Explore Cars
//     //           </a>
//     //         </li>
//     //         {/* <li>
//     //           <a href="#testimonials" className="page-scroll">
//     //             Testimonials
//     //           </a>
//     //         </li>
//     //         <li>
//     //           <a href="#team" className="page-scroll">
//     //             Team
//     //           </a>
//     //         </li>
//     //         <li>
//     //           <a href="#contact" className="page-scroll">
//     //             Contact
//     //           </a>
//     //         </li> */}
//     //       </ul>
//     //     </div>
//     //   </div>
//     // </nav>
// <>
//     <nav
//       className={`navbar navbar-expand-lg navbar-default  fixed-top py-4 ${
//         isWhite ? "bg-white" : ""
//       } `}
//       id="menu"
//     >
//       <div className="container-fluid">
//         <button
//           className={`navbar-toggler btn-light `}
//           onClick={handleClickToggle}
//           type="button"
// //data-bs-toggle="collapse"
//                   data-bs-toggle="offcanvas"
//                 //  data-bs-target="#navbarText"
//                   data-bs-target="#offcanvasExample"
//                 //  aria-controls="navbarText"
//                   aria-controls="offcanvasExample"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="fs-4">
//             <i className={`bi bi-list ${isWhite?"text-theme":"text-white"} `}></i>
//           </span>
//         </button>
//         <a
//           className="navbar-brand pointer-cursor"
//           onClick={() => navigate("/")}
//         >
//           <img
//             src={`./img/${isWhite ? "logoblue.png" : "logo.png"}`}
//             alt=""
//             height={50}
//           />
//         </a>

//         <div className="collapse navbar-collapse " id="navbarText">
//         {/* <div className="d-flex justify-content-center"> */}
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly nav-ul">
//             <li className="nav-item">
//               <a
//                 // href="#whyus"
//                 onClick={() => handleClickLink(false, "aboutus")}
//                 className={`cusrsor-pointer pointer-cursor nav-link active page-scroll ${
//                   isWhite ? "text-theme" : ""
//                 }`}
//                 aria-current="page"
//               >
//                 About Us
//               </a>
//             </li>
//             <li className="nav-item" onClick={() => handleClickLink(false)}>
//               <a
//                 className={`nav-link active ${isWhite ? "text-theme" : ""}`}
//                 href="#"
//               >
//                 Terms of Use
//               </a>
//             </li>
//             <li
//               className="nav-item"
//               onClick={() => redirectPage("explorescar")}
//             >
//               <a
//                 className={`nav-link active page-scroll ${
//                   isWhite ? "text-theme" : ""
//                 }`}
//                 href="#explorecar"
//               >
//                 Explore Cars
//               </a>
//             </li>
//           </ul>
//           {/* </div> */}
//           <div className="navbar-text text-center">
//             {/* Navbar text with an inline element */}
//             <button
//               type="button"
//               class={`btn ${
//                 isWhite ? "btn-outline-dark" : "btn-outline-light"
//               } me-5`}
//               onClick={() => redirectPage("signin")}
//             >
//               Sign In
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//     <div
//       className="offcanvas offcanvas-start"
//       tabIndex={-1}
//       id="offcanvasExample"
//       aria-labelledby="offcanvasExampleLabel"
//     >
//       <OffCanvas isOpen={isOpen} handleClickToggle={handleClickToggle} redirectPage={redirectPage} handleClickLink={handleClickLink}/>
//       </div>
//     </>
//   );
// };

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { OffCanvas } from "./common/sidecanvas.component";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/user/userslice";

export const Navigation = ({ page }) => {
  const isWhite = page === "detail";
  const [isOpen, setisOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.hash === "#explorecar") {
      const el = document.getElementById("explorecar");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname, location.hash]);
  const dispatch=useDispatch()
  const user=useSelector(({user})=>user?.user)
  const userId = user?.user_id;
  // Toggles the offcanvas visibility
  const handleClickToggle = () => {
    setisOpen(!isOpen);
  };

  // Closes offcanvas and navigates to a path
  const handleClickLink = (path) => {
    setisOpen(false);
    navigate(`/${path}`);
  };

  const handleClickLogout=()=>{
    dispatch(logoutUser())
    navigate('/signin')
  }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-default fixed-top py-4 ${
          isWhite ? "bg-white" : ""
        }`}
        id="menu"
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left side: Logo */}
          <a
            className="navbar-brand pointer-cursor"
            onClick={() => navigate("/")}
          >
            <img
              src={`./img/${isWhite ? "logoblue.png" : "logo.png"}`}
              alt="Logo"
              height={50}
            />
          </a>

          {/* Mobile Toggle Button */}
          <button
            className={`navbar-toggler ${isWhite ? "navbar-light" : "navbar-dark"}`}
            type="button"
            onClick={handleClickToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Middle: Navigation Links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-evenly">
              <li className="nav-item">
                <a
                  onClick={() => handleClickLink("aboutus")}
                  className={`nav-link active page-scroll pointer-cursor pointer-cursor ${
                    isWhite ? "text-theme" : "text-white"
                  }`}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item  pointer-cursor">
                <a
                  className={`nav-link active ${
                    isWhite ? "text-theme" : "text-white"
                  }`}
                  onClick={() => handleClickLink("termsofuse")}
                >
                  Terms of Use
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#explorecar"
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname === "/") {
                      document.getElementById("explorecar")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      setisOpen(false);
                    } else {
                      navigate("/#explorecar");
                    }
                  }}
                  className={`nav-link active page-scroll cursor-pointer pointer-cursor ${
                    isWhite ? "text-theme" : "text-white"
                  }`}
                >
                  Explore Cars
                </a>
              </li>
                      {/* {(userId&&userId>0) && 
                        <li className="nav-item">
                <a
                  onClick={() => handleClickLink("profile")}
                  className={`nav-link active page-scroll cursor-pointer pointer-cursor ${
                    isWhite ? "text-theme" : "text-white"
                  }`}
                >
                  Profile
                </a>
              </li>
} */}
            </ul>
          </div>

          {/* Right side: Sign In button */}
          <div className="navbar-text text-end d-none d-lg-block">
              {(userId&&userId>0) ? 
            // <button
            // // style={{visibility:"hidden"}}
            //   type="button"
            //   className={`btn v-hidden ${
            //     isWhite ? "btn-outline-dark" : "btn-outline-light"
            //   }`}
            //   onClick={handleClickLogout}
            // >
            //   Logout
            // </button>
      <div className="dropdown">
  <button 
    className={`btn v-hidden dropdown-toggle ${
                isWhite ? "btn-outline-dark" : "btn-outline-light"
              }`}
   type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {user?.firstName ||"User"}
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button" onClick={() => handleClickLink("profile")}>Profile</button></li>
    <li><button className="dropdown-item" type="button" onClick={handleClickLogout}>Logout</button></li>
    {/* <li><button className="dropdown-item" type="button">Another action</button></li> */}
    {/* <li><button className="dropdown-item" type="button">Something else here</button></li> */}
  </ul>
</div>

           : <button
            // style={{visibility:"hidden"}}
              type="button"
              className={`btn v-hidden ${
                isWhite ? "btn-outline-dark" : "btn-outline-light"
              }`}
              onClick={() => handleClickLink("signin")}
            >
              Sign In
            </button>
}
          </div>
        </div>
      </nav>

      {/* OffCanvas Component */}
      <div
        className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`}
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        {/* Cross/Close Button inside the OffCanvas */}
        {/* <button
          type="button"
          className="btn-close text-reset"
          onClick={handleClickToggle}
          aria-label="Close"
        ></button> */}

        <OffCanvas
          isOpen={isOpen}
          handleClickToggle={handleClickToggle}
          redirectPage={handleClickLink}
          handleClickLink={handleClickLink}
        />
      </div>
    </>
  );
};
