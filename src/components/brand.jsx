import React from "react";

import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";

const Brand = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="">
      {/* <motion.div
    className="bg-theme-dark w-100 pt-2 pb-2"
    initial={{ x: '100vw' }} // Start off-screen (left side)
    animate={{ x: '-100%' }} 
    transition={{
      duration: 15, // Duration of one complete movement
      ease: 'linear', // Continuous linear movement
      repeat: Infinity, // Infinite loop
      repeatType: 'loop', // Go back and forth
    }}
    > */}
      <div className="bg-theme-dark w-100 section-block pt-5 pb-5">
        <div className="container-responsive px-4">
          <div className="row parent">
            {/* <Carousel responsive={responsive} infinite={true} autoPlay={true} co autoPlaySpeed={100} arrows={false} transitionDuration={0.5} > */}
            <Marquee speed={80}>
              <div className="col slider">
                <img
                  src="./img/brand/landrovers.png"
                  className="img-fluid w-75 h-75"
                  alt=""
                />
              </div>
              <div className="col slider">
                <img
                  src="./img/brand/hyundai.png"
                  className="img-fluid w-75 h-75"
                  alt=""
                />
              </div>
              <div className="col slider">
                <img
                  src="./img/brand/jeep.png"
                  className="img-fluid w-75 h-75"
                  alt=""
                />
              </div>
             
              <div className="col slider">
                <img
                  src="./img/brand/mercidez.png"
                  className="img-fluid w-75 h-75"
                  alt=""
                />
              </div>
              <div style={{ marginRight: "60px" }} className="col slider">
                <img
                  src="./img/brand/bmw.png"
                  className="img-fluid w-75 h-75 "
                  alt=""
                />
              </div>
              {/* <div className="col slider"><img src="./img/brand/hyundai.png" className="img-fluid w-75 h-75 "  alt="" /></div> */}
              <div className="col slider">
                <img
                  src="./img/brand/v.png"
                  className="img-fluid w-75 h-75"
                  alt=""
                />
              </div>
              <div className="col slider">
                <img
                  src="./img/brand/reanult.png"
                  className="img-fluid w-75 h-75"
                  alt=""
                />
              </div>
              <div className="col slider">
                <img
                  src="./img/brand/mg.png"
                  className="img-fluid w-75 h-75"
                  alt=""
                />
              </div>
              {/* <div className="col slider">
                <img
                  src="./img/brand/mer.png"
                  className="img-fluid w-75 h-75"
                  alt=""
                />
              </div> */}
              {/* <div className="col slider"><img src="./img/brand/royce.png" className="img-fluid w-75 h-75" alt="" /></div> */}
              {/* <div className="col slider"><img src="./img/brand/suzuki.png" className="img-fluid w-75 h-75" alt="" /></div> */}
              {/* <div className="col slider"><img src="./img/brand/purche.png" className="img-fluid w-75 h-75" alt="" /></div> */}
              <div className="col slider">
                <img
                  src="./img/brand/infiniti.png"
                  className="img-fluid w-75 h-75"
                  alt=""
                />
              </div>

            
            </Marquee>
          </div>
          {/* <div className="col-3"><img src="./img/brand/honda.png" width={20} alt="" /></div> */}
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Brand;
