import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function OffCanvas({handleClickToggle,redirectPage,handleClickLink}) {
  const user=useSelector(({user})=>user?.user)
  const userId = user?.user_id;
  // const isWhite = page === "detail";
//   const [isOpen, setisOpen] = useState(false);

  const navigate = useNavigate();
  const handleClickLogo=()=>{
    handleClickToggle()
    navigate("/")
  }
//   const handleClickToggle = () => {
//     setisOpen(!isOpen);
//   };
//   const navc = document.querySelector(".navbar-collapse"); // Get element from DOM
//   const navtoggler = document.querySelector(".navbar-toggler"); // Get element from DOM
//   const handleClickLink = (x, path) => {
//     setisOpen(false);
//     // navc?.classList?.remove("show");
//     // navtoggler.classList?.remove("collapsed");
//     if (path) {
//       redirectPage(path);
//     }
//   };

//   const redirectPage = (path) => {
//     navigate(`/${path}`);
//   };
  return (
    // <div
    //   className="offcanvas offcanvas-start"
    //   tabIndex={-1}
    //   id="offcanvasExample"
    //   aria-labelledby="offcanvasExampleLabel"
    // >
    <>
      <div className="offcanvas-header ps-5 mt-5 ">
        <a
          className="navbar-brand pointer-cursor"
          onClick={handleClickLogo}
          data-bs-dismiss="offcanvas"
        >
          <img
            src={`./img/${true ? "logoblue.png" : "logo.png"}`}
            alt=""
            height={50}
          />
        </a>
        <button onClick={handleClickLogo}
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <div className="row">
          <div className="col-12 ps-5  pt-5">
            <ul className="canvas-ul text-decoration-none">
              <li className="canvas-li py-2 text-theme fs-4"> <a
                // href="#whyus"
                data-bs-dismiss="offcanvas"
                onClick={() => handleClickLink( "aboutus")}
                className={`cusrsor-pointer pointer-cursor text-decoration-none text-theme`}
                aria-current="page"
              >
                About Us
              </a></li>
              <li className="canvas-li py-2 text-theme fs-4" 
              // onClick={() => handleClickLink(false)}
              >
              <a
                className={`nav-link active cusrsor-pointer pointer-cursor text-decoration-none text-theme`}
                onClick={() => handleClickLink( "termsofuse")}
                data-bs-dismiss="offcanvas"
              >
                Terms of Use
              </a>
              </li>
              <li className="canvas-li py-2 text-theme fs-4"
              // onClick={() => redirectPage("explorescar")}
              > <a
                className={`nav-link active page-scroll cusrsor-pointer pointer-cursor text-decoration-none text-theme`}
                onClick={() => handleClickLink( "explorecars")}
                data-bs-dismiss="offcanvas"
              >
                Explore Cars
              </a></li>
             {(userId&&userId>0) ? <li className="canvas-li py-2 text-theme fs-4" 
              //  onClick={() => redirectPage("signin")} 
               data-bs-dismiss="offcanvas" onClick={() => handleClickLink( "signin")}>Sign in</li>:
               <li className="canvas-li py-2 text-theme fs-4" 
               //  onClick={() => redirectPage("signin")} 
                data-bs-dismiss="offcanvas" 
                // onClick={() => handleClickLink( "profile")}
                >Logout</li> }
            </ul>
          </div>
        </div>
      </div>
    {/* // </div> */}
    </>
  );
}

{/* <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <OffCanvas  handleClickToggle={handleClickToggle} redirectPage={redirectPage}/>
      </div> */}

                  // data-bs-toggle="collapse"
                //   data-bs-toggle="offcanvas"
                  // data-bs-target="#navbarText"
                //   data-bs-target="#offcanvasExample"
                  // aria-controls="navbarText"
                //   aria-controls="offcanvasExample"