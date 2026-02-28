import React from 'react'
import OrderCardComponent from './order-card.component'

const BookingHistorySection = ({bookingData}) => {
  return (
    <div className="container mt-4  py-4">
{
         bookingData&&bookingData?.map((item)=><OrderCardComponent bookedCar={item}/>)
        }
      </div>
  )
}

export default BookingHistorySection
