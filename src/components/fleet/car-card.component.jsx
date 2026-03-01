import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSpin360Url } from "../../constants/carSpin360";
import { getCarImageUrl, getCarImageFallbackUrl } from "../../utils/carImageUtils";
import Spin360Viewer from "../common/spin360-viewer.component";
import BookNowModal from "../common/book-now-modal.component";

/**
 * Fleet card matching PDF reference: image, name, Daily/Weekly/Monthly prices, Book Now.
 * "About car" expands to show features, 360° view, View details (all features preserved).
 */
const CarCardComponent = ({ carDetail, idindex, handleClickBook, allCars = [], bg = "" }) => {
  const [imgSrc, setImgSrc] = useState(getCarImageUrl(carDetail));
  const [show360, setShow360] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const spin360Url = getSpin360Url(carDetail);

  const handleImgError = () => {
    setImgSrc(getCarImageFallbackUrl(carDetail));
  };

  const handleViewDetails = () => {
    if (carDetail?.car_id) {
      navigate(`/${carDetail.car_id}`);
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 car-fleet">
      <div
        className={`card w-100 bg-theme-dark border-0 ${bg} car-fleet-card car-fleet-card-pdf`}
      >
        <div
          className="car-img-div position-relative overflow-hidden car-fleet-card-img"
          onClick={handleViewDetails}
        >
          <img
            src={imgSrc || getCarImageFallbackUrl(carDetail)}
            onError={handleImgError}
            className="card-img-top image-car img-fluid"
            alt={carDetail?.title || "Car"}
            style={{
              objectFit: "cover",
              objectPosition: "center 40%",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              display: "block",
              cursor: "pointer",
            }}
          />
        </div>
        <div className={`card-body ${bg}`}>
          <h5 className="card-title text-theme fw-semibold pb-2 text-capitalize car-fleet-card-title">
            {carDetail.title}
          </h5>

          {/* PDF-style price row: Daily | Weekly | Monthly - always visible */}
          <div className="car-fleet-price-row">
            <div className="car-fleet-price-item">
              <span className="car-fleet-price-label">Daily</span>
              <span className="car-fleet-price-value">{carDetail.daily_price}</span>
            </div>
            <div className="car-fleet-price-item">
              <span className="car-fleet-price-label">Weekly</span>
              <span className="car-fleet-price-value">{carDetail.weekly_price}</span>
            </div>
            <div className="car-fleet-price-item">
              <span className="car-fleet-price-label">Monthly</span>
              <span className="car-fleet-price-value">{carDetail.monthly_price}</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-book-fleet w-100 mt-2 mb-2"
            onClick={() => setShowBookModal(true)}
          >
            Book Now
          </button>

          {/* About car: optional expand - keeps 360°, View details, features */}
          {!expanded ? (
            <button
              type="button"
              className="btn btn-link btn-sm p-0 text-secondary text-decoration-none car-fleet-about-btn"
              onClick={() => setExpanded(true)}
            >
              About car
            </button>
          ) : (
            <div className="car-fleet-expanded mt-2 pt-2 border-top border-secondary">
              <div className="car-features d-flex flex-wrap justify-content-center align-items-center mb-2" style={{ gap: 10, fontSize: "0.85rem" }}>
                <span className="d-flex align-items-center gap-1">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" style={{ color: "rgb(0, 181, 255)" }}>
                    <path d="M224 320h32V96h-32c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32zm352-32V128c0-17.67-14.33-32-32-32h-32v224h32c17.67 0 32-14.33 32-32z" />
                  </svg>
                  3
                </span>
                <span>A/C</span>
                <span>Auto</span>
                <span>{carDetail?.capacity || "—"}</span>
              </div>
              {spin360Url && (
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm w-100 mb-2"
                  onClick={(e) => { e.preventDefault(); setShow360(true); }}
                >
                  View 360° Spin
                </button>
              )}
              <button
                type="button"
                className="btn btn-outline-dark btn-sm w-100 mb-2"
                onClick={handleViewDetails}
              >
                View details
              </button>
              <button
                type="button"
                className="btn btn-link btn-sm p-0 text-muted text-decoration-none"
                onClick={() => setExpanded(false)}
              >
                Show less
              </button>
            </div>
          )}
        </div>
      </div>

      <Spin360Viewer
        show={show360}
        onClose={() => setShow360(false)}
        iframeUrl={spin360Url}
        carTitle={carDetail?.title}
      />
      <BookNowModal
        show={showBookModal}
        onClose={() => setShowBookModal(false)}
        carDetail={carDetail}
        allCars={allCars}
      />
    </div>
  );
};

export default CarCardComponent;
