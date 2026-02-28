import React from "react";

const KeyFeatures = ({ id, keyFeatures, imagepath,count }) => {
  return (
    <div>
      <div className="container mt-5 py-4">
        <h1 className="text-center text-theme">Key Features</h1>
        <div className="row mt-5">
          <div className="col-12 col-md-6 pb-5 md:pb-1">
            <img src={imagepath} alt="Car Image" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 ">
            <div>
              {keyFeatures?.map((item, index) => {
                return (
                  <div
                    className={`w-100 text-center rounded-1 py-2  mb-1 ${
                      index === count ? "bg-theme text-white" : ""
                    }`}
                    // style={styles}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
