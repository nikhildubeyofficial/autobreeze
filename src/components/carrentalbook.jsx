import React, { useEffect, useMemo, useState } from "react";
import { calculateCounts } from "../utility";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBookInfo } from "../redux/car/carslice";
import useCarApi from "../api/usecarapi.hook";
import useCarRentalApi from "../api/userentalcarapi.hook";
import { handleNotify, TOASTER_POSITION, TOASTER_TYPE } from "./common/notification/toaster_notify.component";

const RentalBooking = ({ section, name, data, carData, page, rentalBookData }) => {
  const isRedirectWhatsapp = page === "detail";
  const navigate = useNavigate()
  const [pickupDate, setPickupDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [insurance, setInsurance] = useState("");
  const [timePeriod, setTimePeriod] = useState("months");
  const [timeCount, setTimeCount] = useState(0);
  const [delivery, setDelivery] = useState(1)
  const [address, setAddress] = useState("");
  const dispatch = useDispatch()
  const{checkCarAvaibility}=useCarRentalApi()
  const cars = data;
  function calculateTime(startDate, endDate, timePeriod) {
    if (startDate !== "" && endDate !== "") {
      const count = calculateCounts(startDate, endDate);
      setTimeCount(count[timePeriod]);
    } else {
      setTimeCount(0);
    }
  }
  const getPeriodName = useMemo(() => {
    if (timePeriod === "daily") {
      return timeCount > 1 ? "Days" : "Day";
    }
    if (timePeriod === "months") {
      return timeCount > 1 ? "Months" : "Month";
    }
    if (timePeriod === "weekly") {
      return timeCount > 1 ? "Weeks" : "Week";
    }
  }, [timePeriod, timeCount]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const state = { car: selectedCar, from: pickupDate, to: dropOffDate, pickuptime: pickupTime, dropOffTime: dropOffTime, delivery: delivery, address: address, timePeriod: timePeriod }
   //first need to check the car is available for the this period
   const carCheckObj={car_id:selectedCar,book_date_from:pickupDate,book_date_to:dropOffDate,book_pick_time:pickupTime,book_drop_time:dropOffTime  }
   try {
    const res=await checkCarAvaibility(carCheckObj)
    if(res?.isSucess){
      if(res?.data?.isAvailable){
        dispatch(addBookInfo(state))
        navigate(`/${selectedCar}`, { state: state });
      }else{
        handleNotify(res.message,TOASTER_TYPE.INFO,TOASTER_POSITION.TOP_RIGHT)
        return;
      }
    }
   } catch (error) {
    
   }
    
  };

  const handleTimePeriod = (time) => {
    setTimePeriod(time);
    calculateTime(pickupDate, dropOffDate, time);
  };

  function calculateTime(startDate, endDate, timePeriod) {
    if (startDate !== "" && endDate !== "") {
      const count = calculateCounts(startDate, endDate);
      setTimeCount(count[timePeriod]);
    } else {
      setTimeCount(0);
    }
  }

  const handleDropOffDate = (e) => {
    const { value } = e.target;
    setDropOffDate(value);
    calculateTime(pickupDate, value, timePeriod);
  };

  useEffect(() => {
    if (rentalBookData) {
      const state = { car: selectedCar, from: pickupDate, to: dropOffDate, pickuptime: pickupTime, dropOffTime: dropOffTime, delivery: delivery, address: address }

      setPickupTime(rentalBookData.pickuptime)
      setSelectedCar(rentalBookData.car)
      setAddress(rentalBookData.address)
      setDelivery(rentalBookData.delivery)
      setDropOffDate(rentalBookData.to)
      setPickupDate(rentalBookData.from)
      setDropOffTime(rentalBookData.dropOffTime)
      setTimePeriod(rentalBookData.timePeriod)
      if (rentalBookData.from) {
        calculateTime(rentalBookData.from, rentalBookData.to, rentalBookData.timePeriod);
      }
    }
  }, [rentalBookData])

  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        times.push(formattedTime);
      }
    }
    return times;
  };

  const timeSlots = generateTimeSlots();
  return (
    <div className="bg-dark-blue rental-book-section pb-4">
      {section !== "detail" && (
        <h1 className="text-center py-2 text-white pt-5 rental-section-title">Reserve car</h1>
      )}
      <div className="container pt-3">
        {name && (
          <h1 className="text-start py-2 fw-semibold text-white pt-3">
            {name}
          </h1>
        )}
        <div className="brand-btn">
          <button
            type="button"
            className={`rounded me-3 btn text-dark ${timePeriod === "daily"
              ? "btn-light"
              : "btn-outline-default text-white"
              }`}
            onClick={() => handleTimePeriod("daily")}
          >
            Daily
          </button>
          <button
            type="button"
            className={`rounded me-3 btn text-dark ${timePeriod === "weekly"
              ? "btn-light"
              : "btn-outline-default text-white"
              }`}
            onClick={() => handleTimePeriod("weekly")}
          >
            Weekly
          </button>
          <button
            type="button"
            className={`rounded btn text-dark ${timePeriod === "months"
              ? "btn-light"
              : "btn-outline-default text-white"
              }`}
            onClick={() => handleTimePeriod("months")}
          >
            Monthly
          </button>

          <form onSubmit={handleSubmit}>
            <div style={styles.bookNowForm}>
              <div style={styles.formGroup}>
                <label htmlFor="pickupDate">Rent from</label>
                <input
                  type="date"
                  id="pickupDate"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="dropOffDate">Rent to</label>
                <input
                  type="date"
                  id="dropOffDate"
                  value={dropOffDate}
                  onChange={handleDropOffDate}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="pickupTime">Pickup time</label>
                {/* <input
                  type="time"
                  id="pickupTime"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  style={styles.input}
                /> */}
                <select
                  id="pickupTime"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  style={styles.input}
                >
                  <option value="">Select Time</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="dropOffTime">Drop off time</label>
                <select
                  id="dropOffTime"
                  value={dropOffTime}
                  onChange={(e) => setDropOffTime(e.target.value)}
                  style={styles.input}
                >
                  <option value="">Select Time</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div style={styles.bookNowForm}>
              <div style={styles.formGroup}>
                <label htmlFor="selectCar">Choose car</label>
                <select
                  id="selectCar"
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                  style={styles.selectinput}
                >
                  {/* Default option to show "Select Car" */}

                  {/* Mapping carData to options */}
                  <option value="" disabled>Select Car</option>
                  {carData?.map((car, index) => (
                    <option key={index} value={car?.car_id}>
                      {car?.title}
                    </option>
                  ))}
                </select>
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="delivery">Delivery</label>
                <select id="delivery" style={styles.input}
                  value={delivery}
                  onChange={(e) => setDelivery(+e.target.value)}
                >
                  <option value={1}>Self Pickup</option>
                  <option value={2}>Home Delivery</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}></div>
            </div>
            <div className="row pb-5">
              <div className="col-12 d-flex justify-content-end position-relative">
                <span className="me-5 text-white position-absolute month-span">
                  <span className="text-capitalize font-Raleway">
                    {timeCount} {getPeriodName}
                  </span>
                </span>
                {
                  isRedirectWhatsapp ?
                    <a
                      href="https://wa.me/971527074847/?text= "
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "10px",
                        textDecoration: "none"
                      }}
                      className=" book-btn py-2 px-4 border-0 mt-3 ms-2"
                      type="submit"
                      aria-label="Book Now"
                    >
                      Book Now
                    </a> :
                    <button
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "10px",
                        textDecoration: "none"
                      }}
                      className=" book-btn py-2 px-4 border-0 mt-3 ms-2"
                      type="submit"
                      aria-label="Book Now"
                    >
                      Book Now
                    </button>
                }

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#003F58",
    color: "white",
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "40px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
  },
  formGroup: {
    flex: "1",
    minWidth: "200px",
  },
  input: {
    height: "50px",
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    color: "#000",
    height: "50px"
  },
  unlimitedMilesGroup: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    margin: "20px 0",
  },
  checkbox: {
    marginRight: "10px",
  },
  totalPrice: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  bookBtn: {
    padding: "15px 30px",
    backgroundColor: "#fff",
    border: "none",
    color: "#003F58",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "5px",
  },
  bookNowForm: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "20px",
  },
  selectinput: {
    height: "50px",
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#ffffff",  // White background for the select input
    color: "#000000",            // Black text
    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M7 10l5 5 5-5z" /></svg>')`,  // Black arrow icon
    backgroundPosition: "right 10px center",  // Align the arrow icon to the right
    backgroundRepeat: "no-repeat",  // Prevent the image from repeating
    backgroundSize: "18px 18px",  // Adjust the size of the icon so it fits well
    appearance: "none",  // Removes the default select arrow
    WebkitAppearance: "none",  // Support for Safari
    MozAppearance: "none",     // Support for Firefox
  },




};
export default RentalBooking;

///

////
// import React, { useMemo, useState } from "react";
// import { calculateCounts } from "../utility";

// const RentalBooking = ({ section, name, data }) => {
//   const [pickupDate, setPickupDate] = useState("");
//   const [dropOffDate, setDropOffDate] = useState("");
//   const [pickupTime, setPickupTime] = useState("");
//   const [dropOffTime, setDropOffTime] = useState("");
//   const [selectedCar, setSelectedCar] = useState("");
//   const [insurance, setInsurance] = useState("");
//   const [timePeriod, setTimePeriod] = useState("months");
//   const [timeCount, setTimeCount] = useState(0);
//   const cars = data;

//   const getPeriodName = useMemo(() => {
//     if (timePeriod === "daily") {
//       return timeCount > 1 ? "Days" : "Day";
//     }
//     if (timePeriod === "months") {
//       return timeCount > 1 ? "Months" : "Month";
//     }
//     if (timePeriod === "weekly") {
//       return timeCount > 1 ? "Weeks" : "Week";
//     }
//   }, [timePeriod, timeCount]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Car: ${selectedCar}, Pickup: ${pickupDate} ${pickupTime}, Drop-off: ${dropOffDate} ${dropOffTime}, Insurance: ${insurance}`
//     );
//   };

//   const handleTimePeriod = (time) => {
//     setTimePeriod(time);
//     calculateTime(pickupDate, dropOffDate, time);
//   };

//   function calculateTime(startDate, endDate, timePeriod) {
//     if (startDate !== "" && endDate !== "") {
//       const count = calculateCounts(startDate, endDate);
//       setTimeCount(count[timePeriod]);
//     } else {
//       setTimeCount(0);
//     }
//   }

//   const handleDropOffDate = (e) => {
//     const { value } = e.target;
//     setDropOffDate(value);
//     calculateTime(pickupDate, value, timePeriod);
//   };

//   return (
//     <div className="bg-dark-blue rental-book-section pb-4">
//       {section !== "detail" && (
//         <h1 className="text-center py-2 text-white pt-5">Book Now</h1>
//       )}
//       <div className="container pt-3">
//         {name && (
//           <h1 className="text-start py-2 fw-semibold text-white pt-3">
//             {name}
//           </h1>
//         )}
//         <div className="brand-btn">
//           <button
//             type="button"
//             className={`rounded me-3 btn text-dark ${
//               timePeriod === "daily" ? "btn-light" : "btn-outline-default text-white"
//             }`}
//             onClick={() => handleTimePeriod("daily")}
//           >
//             Daily
//           </button>
//           <button
//             type="button"
//             className={`rounded me-3 btn text-dark ${
//               timePeriod === "weekly" ? "btn-light" : "btn-outline-default text-white"
//             }`}
//             onClick={() => handleTimePeriod("weekly")}
//           >
//             Weekly
//           </button>
//           <button
//             type="button"
//             className={`rounded btn text-dark ${
//               timePeriod === "months" ? "btn-light" : "btn-outline-default text-white"
//             }`}
//             onClick={() => handleTimePeriod("months")}
//           >
//             Monthly
//           </button>

//           <form onSubmit={handleSubmit} className="mb-0 mt-5">
//   <div className="row mt-2 pb-2 book-input">
//     <div className="col-12 col-md-3">
//       <label className="mb-1" htmlFor="pickupDate">From</label>
//       <input
//         type="date"
//         id="pickupDate"
//         className="form-control bg-dark text-theme"
//         value={pickupDate}
//         onChange={(e) => setPickupDate(e.target.value)}
//       />
//     </div>
//     <div className="col-12 col-md-3 pb-2 mt-md-0">
//       <label className="mb-1" htmlFor="dropOffDate">To</label>
//       <input
//         type="date"
//         id="dropOffDate"
//         className="form-control bg-dark text-theme"
//         value={dropOffDate}
//         onChange={handleDropOffDate}
//       />
//     </div>
//     <div className="col-12 col-md-3">
//       <label className="mb-1" htmlFor="pickupTime">Pickup Time</label>
//       <input
//         type="time"
//         id="pickupTime"
//         className="form-control bg-dark text-theme"
//         value={pickupTime}
//         onChange={(e) => setPickupTime(e.target.value)}
//       />
//     </div>
//     <div className="col-12 col-md-3">
//       <label className="mb-1" htmlFor="dropOffTime">Drop Off Time</label>
//       <input
//         type="time"
//         id="dropOffTime"
//         className="form-control bg-dark text-theme"
//         value={dropOffTime}
//         onChange={(e) => setDropOffTime(e.target.value)}
//       />
//     </div>
//   </div>

//   <div className="row mt-2 pb-2 book-input">
//     <div className="col-12 col-md-3">
//       <label htmlFor="selectCar">Select Car</label>
//       <select
//         className="form-select bg-dark text-theme"
//         aria-label="Default select example"
//         value={selectedCar}
//         onChange={(e) => setSelectedCar(e.target.value)}
//       >
//         <option value="">--Select a Car--</option>
//         {cars?.map((car) => (
//           <option key={car.title} value={car.title}>
//             {car.title}
//           </option>
//         ))}
//       </select>
//     </div>

//     <div className="col-12 col-md-6 mt-2 mt-md-0">
//       <div className="input-group delivery-group">
//         <label htmlFor="deliveryOption" className="label-p">Delivery</label>
//         <select
//           className="form-select bg-dark text-theme"
//           aria-label="Delivery selection"
//           id="deliveryOption"
//         >
//           <option value="">Delivery</option>
//         </select>
//         <label htmlFor="addressInput" className="address-label mt-2">Address</label>
//         <input
//           type="text"
//           className="form-control bg-dark text-theme address-input"
//           id="addressInput"
//           placeholder="Enter address"
//         />
//       </div>
//     </div>
//   </div>

//   <div className="row pb-5">
//     <div className="col-12 d-flex justify-content-end position-relative">
//       <span className="me-5 text-white position-absolute month-span">
//         <span className="text-capitalize font-Raleway">{timeCount} {getPeriodName}</span>
//       </span>
//       <button
//         className="btn btn-light book-btn py-2 px-4 border-0 mt-3 ms-2"
//         type="submit"
//         aria-label="Book Now"
//       >
//         Book Now
//       </button>
//     </div>
//   </div>
// </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default RentalBooking;
