import React, { useEffect, useState } from "react";
import CarCardComponent from "./car-card.component";
import { useNavigate } from "react-router-dom";

const OurFleet = ({ data }) => {
  console.log(data)
  const [Category, setCategory] = useState("all");
  const intialData=data?.filter(item=>item.category===Category)
  const [carData, setcarData] = useState(intialData);
  const [isDiplayMore, setisDiplayMore] = useState(false)
  useEffect(() => {
    if(Category !== "all"){
      setcarData(data?.filter(item=>item.category===Category))
    }else{
      setcarData(data)
    }
    
  }, [Category,data])
  
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleClickBook = (id) => {
    if(id){
      navigate(`/${id}`);
    }
  };

  return (
    <div className="bg-theme-dark fleet-btn" id="explorecar">
      <div className="container">
        <h1 className="text-center py-5 text-theme fw-semibold">Our Fleet</h1>
        {/* <div className="brand-type d-flex justify-content-center pb-3"> */}
        <div className="brand-type d-flex justify-content-center pb-3">
          <div className="btn-group d-block fleet" role="group">
            {["all", "suv", "luxury", "sedan"].map((category) => (
              <React.Fragment key={category}>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id={`btnradio-${category}`}
                  value={category}
                  onChange={handleCategoryChange}
                  autoComplete="off"
                  checked={Category === category}
                />
                <label
                  className={`btn btn-outline-secondary category-btn ${Category === category ? "active" : ""}`}
                  htmlFor={`btnradio-${category}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* </div> */}
        <div className="row mt-5">
         
          {carData&&carData?.map((car, index) => {
            const count=isDiplayMore?carData.length:4;
            if((index<count)){

              return <CarCardComponent carDetail={car} idindex={index} handleClickBook={handleClickBook}/>
            }
          })}
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <button className="btn btn-outline-dark fw-lighter fs-3 view-all-btn" onClick={()=>setisDiplayMore(!isDiplayMore)}>
              {!isDiplayMore?"View all":"Hide More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFleet;
