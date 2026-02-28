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
      {count === 0 && <ChildHeader count="0" carText="Affordable" />}
      {count === 1 && <ChildHeader count="1" carText="Reliable" />}
      {count === 2 && <ChildHeader count="2" carText="Flexible" />}
    </header>
  );
};
const ChildHeader = (props) => {
  return (
    <>
      <div
        style={{
          background: `url(../img/landing/landing${props.count}.png) center center no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          maxWidth: "100%",
          overflow: "hidden",
          minWidth: "100%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)", // Shadow effect
        }}
      >
        <div className="intro position-relative">
          {/* {props.count === "2" && ( */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Black overlay with opacity
                zIndex: 1,
                width: "100%",
                height: "100%",
              }}
            />
          {/* )} */}
          <div className="overlay"></div>
          <div className="container h-100 d-flex flex-column justify-content-center">
            <div className="row zx">
              <div className="col-md-8 col-md-offset-0 intro-text">
                <h2 className="text-start h1-text-intro text-capitalize fs-1 text-white mb-3">
                  {props.data ? props.data.title : "Car Rental Made"}
                </h2>

                <div className="animation-div">
                  <div
                    style={{ letterSpacing: "3px" }}
                    className="text-animate  animated-text text-start h1-text-intro text-capitalize text-white mb-3 h2-text-intro"
                  >
                    {props.carText}
                  </div>
                </div>

                <div className="text-start mt-4">
                  <a
                    href="https://wa.me/971527074847/?text="
                    title="Share on WhatsApp"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-custom btn-lg page-scroll btn-style501"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              <span class="mouse">
                <img src="./img/mouse.png" alt="Scroll icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
