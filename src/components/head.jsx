import React, { useEffect, useState } from "react";

export const Head = (props) => {
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
          // height: "90vh",
          width: "100vw",
          maxWidth: "100%",
          overflow: "hidden",
          minWidth: "100%",
        }}
      >
        <div className="intro position-relative">
          <div className="overlay"></div>
          <div className="container h-100 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-md-8 col-md-offset-0 intro-text">
            

                

               
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
