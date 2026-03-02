import React, { useState } from "react";

/**
 * Embedded 360° viewer (Inline). Shows loading state.
 */
const Spin360Viewer = ({ iframeUrl }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (!iframeUrl) return null;

  return (
    <div className="spin-360-container position-relative w-100 mt-4 rounded-4 overflow-hidden" style={{ height: "500px", background: "#0a0a0a", border: "1px solid rgba(198, 167, 94, 0.2)" }}>
      {!iframeLoaded && (
        <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center text-white" style={{ zIndex: 2 }}>
          <div className="spinner-border text-light mb-3" role="status" style={{ width: "3.5rem", height: "3.5rem" }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mb-0 fw-medium fs-5" style={{ color: "var(--luxury-gold)" }}>Loading 360° view...</p>
        </div>
      )}
      <iframe
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
          transition: "opacity 0.8s ease",
        }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default Spin360Viewer;
