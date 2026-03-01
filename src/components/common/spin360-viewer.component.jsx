import React, { useEffect } from "react";

/**
 * Embedded 360° viewer modal. Displays the spin URL in an iframe on the site.
 */
const Spin360Viewer = ({ show, onClose, iframeUrl, carTitle = "" }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="spin360ModalTitle"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down" style={{ maxWidth: "90vw", height: "85vh" }}>
        <div className="modal-content h-100 bg-dark">
          <div className="modal-header border-secondary py-2">
            <h5 className="modal-title text-white" id="spin360ModalTitle">
              {carTitle ? `360° View – ${carTitle}` : "360° View"}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={onClose}
            />
          </div>
          <div className="modal-body p-0 flex-grow-1 position-relative" style={{ minHeight: "70vh" }}>
            <iframe
              title="360 degree car view"
              src={iframeUrl}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div
        className="modal-backdrop fade show"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={onClose}
        aria-hidden="true"
      />
    </div>
  );
};

export default Spin360Viewer;
