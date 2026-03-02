import React, { useEffect, useState } from "react";

export const Header = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount < 2 ? prevCount + 1 : 0));
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <header id="header">
      {count === 0 && <ChildHeader count="3" carText="Affordable" onBookNowClick={props.onBookNowClick} data={props.data} />}
      {count === 1 && <ChildHeader count="4" carText="Reliable" onBookNowClick={props.onBookNowClick} data={props.data} />}
      {count === 2 && <ChildHeader count="5" carText="Flexible" onBookNowClick={props.onBookNowClick} data={props.data} />}
    </header>
  );
};
const ChildHeader = (props) => {
  return (
    <>
      <div
        className="hero-bg"
        style={{
          background: `url(../img/landing/landing${props.count}.${props.count >= 3 ? 'jpg' : 'png'}) center center no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          maxWidth: "100%",
          overflow: "hidden",
          minWidth: "100%",
          minHeight: "75vh",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="intro position-relative h-100" style={{ minHeight: "75vh" }}>
          <div
            className="hero-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4))",
              zIndex: 1,
              width: "100%",
              height: "100%",
            }}
          />
          <div className="overlay" />
          <div className="container h-100 d-flex flex-column justify-content-center position-relative" style={{ zIndex: 2 }}>
            <div className="row zx">
              <div className="col-md-8 col-md-offset-0 intro-text" style={{ animation: "fadeUp 1.5s ease" }}>
                <h2 className="text-start h1-text-intro fs-1 text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Car Rental Made <br />
                  <span style={{ color: "var(--luxury-gold)" }}>{props.carText}</span>
                </h2>
                <div className="animation-div">
                  <div
                    style={{ letterSpacing: "3px", color: "var(--luxury-gold)", fontFamily: "'Montserrat', sans-serif", fontSize: "1.5rem", fontWeight: "300" }}
                    className="text-animate animated-text text-start h1-text-intro text-uppercase mb-4"
                  >
                    Experience the ultimate luxury.
                  </div>
                </div>
                <div className="text-start mt-4">
                  <a
                    href="#explorecar"
                    className="btn btn-luxury btn-lg page-scroll"
                    style={{ padding: "15px 40px", fontSize: "1.1rem" }}
                  >
                    Explore Fleet
                  </a>
                </div>
              </div>
              <span className="mouse">
                <img src="./img/mouse.png" alt="Scroll icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
