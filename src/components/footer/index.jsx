import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkStyle = { color: "grey" };
  return (
    <footer className="footer-enhance bg-theme-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="d-inline-block">
              <img
                src="./img/logoblack.png"
                alt="Logo"
                className="mb-5 footer-img"
                style={{ height: 50 }}
              />
            </Link>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-4 offset-md-0 col-md-5 offset-0 px-3 mb-4">
                <h6 className="text-theme">Info</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/aboutus" className="text-decoration-none d-block mb-2" style={linkStyle}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/termsofuse" className="text-decoration-none d-block mb-2" style={linkStyle}>
                      Terms of Use
                    </Link>
                  </li>
                  {/* <li>
                <a href="#" className="text-decoration-none d-block mb-2" style={{color: 'grey'}}>Policies</a>
              </li> */}
                  <li>
                    <a
                      href="#"
                      className="text-decoration-none d-block mb-2"
                      style={{ color: "grey" }}
                    >
                      Policies
                    </a>
                  </li>
                </ul>
              </div>
              {/* Contact */}
              {/* <div className="col-4 px-3 mb-4">
            <h6>Social Media</h6>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.instagram.com/autobreezecar" className="text-decoration-none d-block mb-2" target='_blank'  style={{color: 'grey'}}><img src='./img/socialicon/instra.png'></img>&nbsp;Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61565346815233" className="text-decoration-none d-block mb-2" target='_blank'  style={{color: 'grey'}}><img src='./img/socialicon/facebook.png'></img>&nbsp;Facebook</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/autobreeze-car-rental/" className="text-decoration-none d-block mb-2" target='_blank'  style={{color: 'grey'}}><img src='./img/socialicon/linkedin.png'></img>&nbsp;Linkedin</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@autobreezecars?lang=en" className="text-decoration-none d-block mb-2" target='_blank'  style={{color: 'grey'}}><img src='./img/socialicon/tiktok.png'></img>&nbsp;TikTok</a>
              </li>
            </ul>
          </div> */}
              <div className="col-6 col-md-5 px-3 mb-4">
                <h6 className="text-theme">Contact Us</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="mailto:info@autobreezecarrental.com" className="text-decoration-none d-block mb-2" style={linkStyle}>
                      info@autobreezecarrental.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+971246724786" className="text-decoration-none d-block mb-2" style={linkStyle}>
                      +971 2467 24786
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-decoration-none d-block mb-2"
                      style={{ color: "grey" }}
                    >
                      906,&nbsp;Park&nbsp;Lane,&nbsp;Park&nbsp;Regis
                      Business&nbsp;Bay,&nbsp;Dubai{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 order-1 order-md-0">
              <p className="mt-2" style={{ color: "grey" }}>
                © 2024 Autobreeze. ALL RIGHTS RESERVED.
              </p>
            </div>
            <div className="col-12 col-md-6  d-flex d-inline-block social-icon justify-content-start justify-content-md-end order-0 py-2 py-md-0  order-md-1">
            {/* <span>
                <a href="#" className="text-decoration-none d-block mb-2"   style={{color: 'grey'}}><img src='./img/socialicon/twit.svg'></img></a>
              </span> */}
              <span className="ms-5 ms-md-0">
                <a href="https://www.tiktok.com/@autobreezecars?lang=en" className="text-decoration-none d-block mb-2" target='_blank'  style={{color: 'grey'}}><img src='./img/socialicon/tiktok.svg'></img></a>
              </span>
              <span>
                <a href="https://www.facebook.com/profile.php?id=61565346815233" className="text-decoration-none d-block mb-2" target='_blank'  style={{color: 'grey'}}><img src='./img/socialicon/facebook.svg'></img></a>
              </span>
              <span>
                <a href="https://www.linkedin.com/company/autobreeze-car-rental/" className="text-decoration-none d-block mb-2" target='_blank'  style={{color: 'grey'}}><img src='./img/socialicon/linkedin.svg'></img></a>
              </span>
              <span><a href="https://www.instagram.com/autobreezecar" className="text-decoration-none d-block mb-2" target='_blank'  ><img src='./img/socialicon/instra.svg'></img></a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
