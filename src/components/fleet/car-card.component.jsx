import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCarImageUrl, getCarImageFallbackUrl } from "../../utils/carImageUtils";

/**
 * Minimal Luxury Fleet Card: Static side image, Car Name, Starting Price, View Details button.
 */
const CarCardComponent = ({ carDetail, bg = "" }) => {
  const [imgSrc, setImgSrc] = useState(getCarImageUrl(carDetail));
  const navigate = useNavigate();

  const handleImgError = () => {
    setImgSrc(getCarImageFallbackUrl(carDetail));
  };

  const handleViewDetails = () => {
    if (carDetail?.car_id) {
      navigate(`/${carDetail.car_id}`);
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 car-fleet mb-4">
      <div
        className={`card w-100 border-0 ${bg} car-fleet-card`}
        onClick={handleViewDetails}
        style={{ cursor: "pointer" }}
      >
        <div className="car-img-div position-relative overflow-hidden car-fleet-card-img">
          <img
            src={imgSrc || getCarImageFallbackUrl(carDetail)}
            onError={handleImgError}
            className="card-img-top image-car img-fluid"
            alt={carDetail?.title || "Car"}
          />
        </div>
        <div className={`card-body text-center ${bg}`} style={{ padding: "25px 20px" }}>
          <h5 className="card-title fw-bold pb-1 text-capitalize car-fleet-card-title m-0">
            {carDetail.title}
          </h5>

          <div className="car-price-luxury mb-4">
            Starting from {carDetail.daily_price} / day
          </div>

          <button
            type="button"
            className="btn btn-luxury w-100"
            onClick={(e) => {
              e.stopPropagation();
              handleViewDetails();
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCardComponent;
