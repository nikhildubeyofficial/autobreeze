import React, { useState, useEffect } from 'react'
import { get24to12, getDateMonth, getDeliveryType } from '../../utility'
import { getCarImageUrl, getCarImageFallbackUrl } from '../../utils/carImageUtils'

const OrderCardComponent = ({ orderDetail, bookedCar }) => {
  const carDetailForImage = { car_id: bookedCar?.car_id, title: bookedCar?.car_title, img: bookedCar?.img || 'car.png' }
  const [imgSrc, setImgSrc] = useState(() => getCarImageUrl(carDetailForImage))

  useEffect(() => {
    setImgSrc(getCarImageUrl(carDetailForImage))
  }, [bookedCar?.car_id, bookedCar?.car_title, bookedCar?.img])

  return (
    <div className="row car-card mb-2 align-items-center bg-white py-4 livecar-section" style={{ borderRadius: "4px" }}>
    {/* Car Image Column */}
    <div className="col car-img text-center mb-4 mb-md-0">
      <img
        style={{ width: "211px", height: "108px", objectFit: "contain" }}
        src={imgSrc || getCarImageFallbackUrl(carDetailForImage)}
        onError={() => setImgSrc(getCarImageFallbackUrl(carDetailForImage))}
        alt={bookedCar?.car_title || 'Car'}
      />
    </div>
    {/* Car Details Column */}
    <div className="col  car-details">
      <h4>{bookedCar?.car_title}</h4>
      <p>
        <span className="label">Booking ID:</span> {bookedCar?.booking_id}
      </p>
      <p>
        <span className="label">Duration:</span> {getDateMonth(bookedCar?.book_date_from)} to {getDateMonth(bookedCar?.book_date_to)} 
      </p>
     
    </div>
    <div className="col">
    <p>
        <span className="label">Delivery:</span> {getDeliveryType(bookedCar?.delivery)}
      </p>
      <p>
        <span className="label">Address:</span> {bookedCar?.address}
      </p>
    </div>

    {/* Pickup & Drop Time and Button Column */}
    <div className="col px-3">
      <p>
        <span className="label">Pickup Time:</span> {get24to12(bookedCar?.book_pick_time)}
      </p>
      <p>
        <span className="label">Drop Time:</span> {get24to12(bookedCar?.book_date_to)}
      </p>
     
    </div>
    <div className="col-12 col-md-1 text-end invoice-btn-div w-100">
    {/* <div className="invoice-button"> */}
        <button className="btn btn-outline-dark btn-sm w-100">View Invoice</button>
      {/* </div> */}
    </div>
  </div>
  )
}

export default OrderCardComponent
