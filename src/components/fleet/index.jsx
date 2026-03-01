import React, { useEffect, useState } from "react";
import CarCardComponent from "./car-card.component";
import { useNavigate } from "react-router-dom";

const OurFleet = ({ data }) => {
  const [Category, setCategory] = useState("all");
  const [carData, setcarData] = useState(data || []);
  const [isDiplayMore, setisDiplayMore] = useState(false);

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;
    const normalized = (val) => String(val || "").toLowerCase().trim();
    if (Category === "all") {
      setcarData(data);
    } else {
      setcarData(data.filter((item) => normalized(item.category) === normalized(Category)));
    }
  }, [Category, data]);

  useEffect(() => {
    setisDiplayMore(false);
  }, [Category]);
  
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
    <section className="section-block section-fleet bg-theme-dark fleet-btn" id="explorecar">
      <div className="container container-responsive">
        <h1 className="text-center py-5 text-theme fw-semibold fleet-section-title">Our Fleet</h1>
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

              return <CarCardComponent carDetail={car} idindex={index} handleClickBook={handleClickBook} allCars={data} />
            }
          })}
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <button className="btn btn-outline-dark btn-load-more" onClick={()=>setisDiplayMore(!isDiplayMore)}>
              {!isDiplayMore ? "Load more" : "Show less"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFleet;
