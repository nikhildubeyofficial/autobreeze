import React, { useEffect, useState } from "react";

/**
 * Embedded 360° viewer modal. Shows loading state and offers "Open in new tab"
 * so users can view without iframe lag. Iframe loads only when modal is open.
 */
const Spin360Viewer = ({ show, onClose, iframeUrl, carTitle = "" }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      setIframeLoaded(false);
      setIframeKey((k) => k + 1);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const openInNewTab = () => {
    if (iframeUrl) window.open(iframeUrl, "_blank", "noopener,noreferrer");
  };

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
      <div
        className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down"
        style={{ maxWidth: "95vw", height: "90vh" }}
      >
        <div className="modal-content h-100 bg-dark">
          <div className="modal-header border-secondary py-2 d-flex flex-wrap align-items-center justify-content-between gap-2">
            <h5 className="modal-title text-white mb-0" id="spin360ModalTitle">
              {carTitle ? `360° View – ${carTitle}` : "360° View"}
            </h5>
            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-light"
                onClick={openInNewTab}
              >
                Open in new tab
              </button>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
          </div>
          <div
            className="modal-body p-0 flex-grow-1 position-relative d-flex align-items-center justify-content-center"
            style={{ minHeight: "70vh", backgroundColor: "#0d0d0d" }}
          >
            {!iframeLoaded && (
              <div
                className="position-absolute top-0 left-0 right-0 bottom-0 d-flex flex-column align-items-center justify-content-center text-white"
                style={{ zIndex: 2 }}
              >
                <div
                  className="spinner-border text-light mb-3"
                  role="status"
                  style={{ width: "3rem", height: "3rem" }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mb-0 small">Loading 360° view...</p>
                <button
                  type="button"
                  className="btn btn-link btn-sm text-white mt-2 text-decoration-underline"
                  onClick={openInNewTab}
                >
                  Open in new tab instead
                </button>
              </div>
            )}
            <iframe
              key={iframeKey}
              title="360 degree car view"
              src={iframeUrl}
              onLoad={() => setIframeLoaded(true)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                opacity: iframeLoaded ? 1 : 0,
                transition: "opacity 0.2s ease",
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
