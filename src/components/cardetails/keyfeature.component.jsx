import React, { useState, useEffect } from "react";

const KeyFeatures = ({ id, keyFeatures, imagepath, fallbackImagepath, count }) => {
  const [currentSrc, setCurrentSrc] = useState(imagepath);

  useEffect(() => {
    setCurrentSrc(imagepath);
  }, [imagepath]);

  const handleImageError = () => {
    if (fallbackImagepath && currentSrc !== fallbackImagepath) {
      setCurrentSrc(fallbackImagepath);
    }
  };

  return (
    <div>
      <div className="container mt-5 py-4">
        <h1 className="text-center text-theme">Key Features</h1>
        <div className="row mt-5">
          <div className="col-12 col-md-6 pb-5 md:pb-1">
            <img src={currentSrc || imagepath} onError={handleImageError} alt="Car" className="img-fluid" style={{ objectFit: "contain", maxHeight: 350 }} />
          </div>
          <div className="col-12 col-md-6 ">
            <div>
              {keyFeatures?.map((item, index) => {
                return (
                  <div
                    className={`w-100 text-center rounded-1 py-2 mb-1 keyfeature-item-transition ${
                      index === count ? "bg-theme text-white" : ""
                    }`}
                    role="listitem"
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
