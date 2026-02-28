import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrumb = ({name}) => {
  const navigate = useNavigate();
  const handlClick = () => {
    navigate("/");
  };
  return (
    <div className="container ">
      <nav aria-label="breadcrumb  mt-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item cursor-pointer pointer-cursor" onClick={handlClick}>
            Home
          </li>
          <li
            className="breadcrumb-item active text-primary"
            aria-current="page"
          >
            {name}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
