import React from "react";

const ModalComponent = ({title,buttonName,children}) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      tabIndex={-1}
      aria-labelledby="staticBackdrop"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h1 className="modal-title fs-5 text-theme" id="exampleModalLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {children && children}
          </div>
          <div className="modal-footer border-0">
            {/* <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
            <button type="button" className="btn bg-theme w-100 py-3 text-white fs-5">
              {buttonName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
