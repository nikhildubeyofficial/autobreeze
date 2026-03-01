import React from "react";

const WhyUs = () => {
  return (
    <section className="bg-theme-dark section-block" id="whyus">
      <div className="container container-responsive">
        <div>
          <h1 className="text-center text-theme fs-1 pb-3 section-title-heading">Why Us?</h1>
        </div>
        <div className=" mt-4">
          <div className="row">
            {/* Card 1 */}
            <div className="col-12 col-md-3 col-lg-3 mb-4">
              <div className="card bg-theme-dark h-100">
                {/* <img src alt="Image 1" /> */}
                <div className="card-body">
                  <span className="text-darkblue ps-2 fs-3 mb-2">
                  <img src="/img/whyus/CurrencyCircleDollar.png" alt="Image 1" />
                  </span>
                  <h5 className="card-title text-theme text-capitalize mt-2">
                  No Hidden Fees, Transparent Pricing
                  </h5>
                  <p className="card-text" style={{ color: "grey" }}>
                  Our pricing model is fully transparent no surprise charges at checkout. What you see is what you pay, with clear upfront details on taxes, insurance, and fuel options.


                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-12 col-md-3 col-lg-3  mb-4">
              <div className="card bg-theme-dark h-100">
                {/* <img src alt="Image 1" /> */}

                <div className="card-body">
                  <span className="text-darkblue ps-2 fs-3 mb-2">
                  <img src="/img/whyus/Car.png" alt="Image 1" />
                  </span>
                  <h5 className="card-title text-theme  text-capitalize mt-2">
                  Door to Door Delivery
                  </h5>
                  <p className="card-text" style={{ color: "grey" }}>
                  Enjoy the convenience of 24/7 contactless vehicle pick-up and drop-off at multiple locations, making your car rental experience faster, safer, and more efficient.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-12 col-md-3 col-lg-3 mb-4">
              <div className="card bg-theme-dark h-100">
                <div className="card-body">
                  <span className="text-darkblue ps-2 fs-3 mb-2">
                <img src="/img/whyus/Vector.png" alt="Image 1" />
                  {/* <i className="bi bi-car-front-fill"></i> */}
                  </span>
                  <h5 className="card-title text-theme  text-capitalize mt-2">
                  Luxury & Eco Friendly Vehicle Options
                  </h5>
                  <p className="card-text" style={{ color: "grey" }}>
                  Choose from a wide range of vehicles, from luxury cars to eco-friendly hybrids and electric vehicles, providing both comfort and sustainability for every type of traveler.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-12 col-md-3 col-lg-3 mb-4">
              <div className="card bg-theme-dark h-100">
                {/* <img src alt="Image 1" /> */}
                <div className="card-body">
                  <span className="text-darkblue ps-2 fs-3 mb-2">
                  <img src="/img/whyus/Headphones.png" alt="Image 1" />
                  </span>
                  <h5 className="card-title text-theme fw-semibold  text-capitalize mt-2">
                  24/7 Roadside Assistance & Customer Support
                  </h5>
                  <p className="card-text" style={{ color: "grey" }}>
                  We prioritize your peace of mind with around-the-clock roadside assistance and dedicated customer support, ensuring you're never alone during your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
