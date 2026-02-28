// import React, { useState } from "react";

// const CarCardComponent = ({ carDetail, idindex,handleClickBook ,bg=""}) => {
//   let height = idindex === 0 || idindex === 2 ? 280.25 : 330.25;
//   height = idindex === 3 ? 290.25 : height;
//   height=280.25
//   const [price, setprice] = useState(127);
//   const [period, setperiod] = useState("");
//   const handleClickBookPeriod = (price, period) => {
//     setprice(price);
//     setperiod(period);
//   };
//   return (
//     <div className="col-12 col-md-6 col-lg-6 car-fleet">
//       <div className="card w-100 bg-theme-dark border-0 ">
//         <div className={`w-100 px-1 car-img-div position-relative ${bg}`}>

//         <img
//           src={`./img/car/${carDetail.img}`}
//           // height={height}
//           className="card-img-top cursor-pointer image-car img-fluid"
//           onClick={()=>handleClickBook(carDetail?.id)}
//           alt="..."
//           />
//           </div>
//         <div className={`card-body ${bg}`}>
//           <h5
//             className={`card-title text-theme fs-3 fw-semibold pb-2 text-capitalize ${
//               1 === 0 ? "mt-52" : 1 === 2 ? "mt-12" : ""
//             }`}
//           >
//             {carDetail.title}
//           </h5>
//           <div className="w-100 mt-2 mb-2  d-inline-block d-flex ">
//             <div className={`price-card me-2 ${period === 'Daily'?"act":""}`} onClick={()=>handleClickBookPeriod(carDetail.bookTime[0].price,"Daily")}>
//               <h6>Daily</h6>
//               <h6 className="fw-semibold text-theme " >{carDetail.bookTime[0].price}</h6>
//             </div>
//             <div className={`price-card me-2 ${period === 'Week'?"act":""}`} onClick={()=>handleClickBookPeriod(carDetail.bookTime[1].price,"Week")}>
//               <h6>Weekly</h6>
//               <h6 className="fw-semibold text-theme ">{carDetail.bookTime[1].price}</h6>
//             </div>

//             <div className={`price-card me-2 ${period === 'Month'?"act":""}`} onClick={()=>handleClickBookPeriod(carDetail.bookTime[2].price,"Month")}>
//               <h6>Monthly</h6>
//               <h6 className="fw-semibold text-theme ">{carDetail.bookTime[2].price}</h6>
//             </div>
//           </div>
//           <buton className="btn-style501 btn bg-dark-blue w-100 border-0 text-white mb-2 py-3 fs-6 mt-3 btn-book-price cursor-pointer" onClick={()=>handleClickBook(carDetail?.id)}>
//           {period === ""?"Book":`Book for ${price}${" "}/${" "}${period}`}
//           </buton>
//           {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarCardComponent;
import React, { useState } from "react";
import CarFeatures from "./car-feature";

const CarCardComponent = ({ carDetail, idindex, handleClickBook, bg = "" }) => {
  console.log(carDetail?.capacity)
  const [price, setPrice] = useState(127);
  const [period, setPeriod] = useState("");

  const handleClickBookPeriod = (price, period) => {
    setPrice(price);
    setPeriod(period);
  };

  return (
    <div className="col-12 col-md-6 col-lg-6 car-fleet">
      <div
        className={`card w-100 bg-theme-dark border-0 ${bg} car-fleet-card`}
        style={{ minHeight: "330px" }}
      >
        <div className={` px-1 car-img-div position-relative`}>
          <img
            src={`https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/car/${carDetail.img}`}
            className="card-img-top cursor-pointer image-car img-fluid"
            onClick={() => handleClickBook(carDetail?.car_id)}
            alt="..."
            style={{ objectFit: "contain", height: "200px", width: "100%" }} // Adjust height as needed
          />
        </div>
        <div className={`card-body ${bg}`}>
          <h5 className="card-title text-theme fs-3 fw-semibold pb-2 text-capitalize text-center">
            {carDetail.title}
          </h5>
          <div className="car-features text-center d-flex  items-center justify-around items-center mb-3" style={{ gap: 10, marginTop: 14 }}><span className="me-3"><svg stroke="currentColor" fill="black" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(0, 181, 255)' }}><path d="M224 320h32V96h-32c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32zm352-32V128c0-17.67-14.33-32-32-32h-32v224h32c17.67 0 32-14.33 32-32zm48 96H128V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h48v368c0 8.84 7.16 16 16 16h82.94c-1.79 5.03-2.94 10.36-2.94 16 0 26.51 21.49 48 48 48s48-21.49 48-48c0-5.64-1.15-10.97-2.94-16h197.88c-1.79 5.03-2.94 10.36-2.94 16 0 26.51 21.49 48 48 48s48-21.49 48-48c0-5.64-1.15-10.97-2.94-16H624c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM480 96V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v272h192V96zm-48 0h-96V48h96v48z" /></svg> 3</span><span className="me-3"><svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" style={{ height: 20, width: 20 }}><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M13 2h-2v4H9V4H7v2h2v2h2v3H8V9H6V7H4v2h2v2H2v2h4v2H4v2h2v-2h2v-2h3v3H9v2H7v2h2v-2h2v4h2v-4h2v2h2v-2h-2v-2h-2v-3h3v2h2v2h2v-2h-2v-2h4v-2h-4V9h2V7h-2v2h-2v2h-3V8h2V6h2V4h-2v2h-2V2z" fill="black" /></g></svg> A/C</span><span className="me-3">
    <img src="./img/automatic.png" style={{height:"23px"}}></img> Auto</span><span className="me-3"><svg height="1em" width="1em" fill="black" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M44.7,46.3c-2.1-13.7,17.6-17.8,20.8-3.9l5.4,26.8l20.1,0c5.8,0,8.9,4.7,8.9,9v36.4c0,8.9-12.6,8.8-12.6-0.2V86.2H61.6c-6,0-9.7-4.1-10.6-8.8L44.7,46.3z" /><path d="M54.1,30.3c6.5,0,11.8-5.2,11.9-11.8C66,12,60.7,6.7,54.1,6.7c-6.5,0-11.8,5.2-11.8,11.7C42.3,25,47.5,30.3,54.1,30.3" /><path d="M28.4,60.6c-1.4-7.6,8.6-9.4,10-1.8l4.4,23.9c1,5,4.6,9.2,9.8,10.8c1.6,0.5,3.3,0.5,4.8,0.6l14.5,0.1c7.7,0,7.7,10.1-0.1,10.1l-15.2-0.1c-2.3,0-4.7-0.3-7-1c-9-2.7-15.3-10.1-16.9-18.7L28.4,60.6z" /></g></svg> {carDetail?.capacity}</span></div>

          {/* <div
            className="car-features text-center d-flex  items-center justify-around items-center mb-3"
            style={{ gap: 10, marginTop: 14 }}
          >
            <span className="me-3">
              <svg
                stroke="currentColor"
                fill="black"
                strokeWidth={0}
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "black" }}
              >
                <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
              </svg>{" "}
              5
            </span>
            <span className="me-3">
              <svg
                stroke="currentColor"
                fill="black"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "black" }}
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>{" "}
              3
            </span>
            <span className="me-3">
              <svg
                stroke="currentColor"
                fill="black"
                strokeWidth={0}
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "black" }}
              >
                <path d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z" />
              </svg>{" "}
              2
            </span>
            <span className="me-3">
              <svg
                stroke="currentColor"
                fill="black"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "black" }}
              >
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>{" "}
              No
            </span>
          </div> */}

          {/* <div className="w-100 mt-2 mb-2 d-flex justify-content-center flex-wrap">
            {carDetail.bookTime.map((time, index) => (
              <div
                key={index}
                className={`price-card me-2 ${price === time.price ? "act" : ""}`}
                onClick={() => handleClickBookPeriod(time.price, time.label)}
              >
                <h6 className="text-center">{time.label}</h6>
                <h6 className="fw-semibold text-theme text-center">{time.price}</h6>
              </div>
            ))}
          </div> */}
          <div className="w-100 mt-2 mb-2  d-inline-block d-flex mb-4">
            <div
              className={`price-card me-2 ${period === "Daily" ? "act" : ""}`}
              onClick={() =>
                handleClickBookPeriod(carDetail.daily_price, "Daily")
              }
            >
              <h6>Daily</h6>
              <h6 className="fw-semibold text-theme ">
                {carDetail.daily_price}
              </h6>
            </div>
            <div
              className={`price-card me-2 ${period === "Week" ? "act" : ""}`}
              onClick={() =>
                handleClickBookPeriod(carDetail.monthly_price, "Week")
              }
            >
              <h6>Weekly</h6>
              <h6 className="fw-semibold text-theme ">
                {carDetail.weekly_price}
              </h6>
            </div>

            <div
              className={`price-card me-2 ${period === "Month" ? "act" : ""}`}
              onClick={() =>
                handleClickBookPeriod(carDetail.weekly_price, "Month")
              }
            >
              <h6>Monthly</h6>
              <h6 className="fw-semibold text-theme ">
                {carDetail.monthly_price}
              </h6>
            </div>
          </div>
          <CarFeatures />
          {/* <button
            className="btn-style btn bg-dark-blue w-50 border-0 text-white mb-2 py-3 fs-6 mt-3"
            onClick={() => handleClickBook(carDetail?.car_id)}
          >
            {period === "" ? "Book" : `Book for ${price}`}
          </button> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a
              href="https://wa.me/971527074847/?text="
              className="btn w-100"
              style={{
                background:
                  "linear-gradient(90deg, rgb(0, 106, 150) 0%, rgb(0, 84, 118) 100%)",
                color: "white",
                textAlign: "center",
                borderRadius: 5,
                textDecoration: "none",
                height: 35,
              }}
            >
              Book Now
            </a>
            <div
              className="d-flex justify-content-around "
              style={{ display: "flex", gap: 10 }}
            >
              <a
                href="https://wa.me/971527074847/?text="
                className
                style={{
                  backgroundColor: "green",
                  height: 35,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style={{ height: 24, width: 24 }}
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <a
                href="mailto:info@autobreezecarrental.com?subject=Your Subject&body=Your Message"
                className
                style={{
                  backgroundColor: "black",
                  height: 35,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ height: 24, width: 24 }}
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                </svg>
              </a>
              <a
                href="tel:+971527074847"
                className
                style={{
                  backgroundColor: "red",
                  height: 35,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ height: 24, width: 24 }}
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCardComponent;
