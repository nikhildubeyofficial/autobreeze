import React from "react";

const CheckBoxComponent = ({labelname,name,id,value,handleChange}) => {
  return (
    <div className="form-check mb-8" key={id} >
      <input
        className="form-check-input"
        type="checkbox"
        defaultValue
        value={value}
        id="flexCheckDefault"
        name={name}
        onChange={handleChange}
      />
      <label className="form-check-label text-uppercase " htmlFor="flexCheckDefault">
       {labelname}
      </label>
    </div>
  );
};

export default CheckBoxComponent;
