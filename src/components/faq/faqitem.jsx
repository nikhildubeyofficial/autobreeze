import React from "react";

const FaqItem = ({ id1, id2, qua, ans }) => {
  return (
    <div className="accordion-item bg-theme-dark">
      <h2 className="accordion-header" id={id2}>
        <button
          className="accordion-button bg-theme-dark text-theme fw-semibold border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id1}`}
          aria-expanded="true"
          aria-controls={id1}
        >
          {qua}
        </button>
      </h2>
      <div
        id={id1}
        className="accordion-collapse collapse show"
        aria-labelledby={id2}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <span className="text-theme fw-lighter"> {ans}</span>
        </div>{" "}
      </div>
    </div>
  );
};

export default FaqItem;
