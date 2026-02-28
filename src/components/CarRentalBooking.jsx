import React, { useState } from 'react';
import '../css/index.css';

function CarRentalBooking() {
  const [pickupDate, setPickupDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [insurance, setInsurance] = useState('');

  const cars = [
    { name: 'Mazda Cx5', rate: '27 AED Daily' },
    { name: 'BMW X5', rate: '12 AED Daily' },
    { name: 'Mercedes Benz C Class', rate: '27 AED Daily' },
    { name: 'Chevy Breeze', rate: '12 AED Daily' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Car: ${selectedCar}, Pickup: ${pickupDate} ${pickupTime}, Drop-off: ${dropOffDate} ${dropOffTime}, Insurance: ${insurance}`);
  };

  return (
    <div className="car-rental-container">
      <h2>Car Rental Booking</h2>
      <form onSubmit={handleSubmit} className="car-rental-form">
        <div className="form-group">
          <label>Pickup Date:
            <input  type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>Drop-off Date:
            <input type="date" value={dropOffDate} onChange={(e) => setDropOffDate(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>Pickup Time:
            <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>Drop-off Time:
            <input type="time" value={dropOffTime} onChange={(e) => setDropOffTime(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>Select Car:
            <select value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)}>
              <option value="">--Select a Car--</option>
              {cars.map((car) => (
                <option key={car.name} value={car.name}>
                  {car.name} - {car.rate}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>Insurance:
            <select value={insurance} onChange={(e) => setInsurance(e.target.value)}>
              <option value="">--Select Insurance--</option>
              <option value="Collision Damage">Collision Damage</option>
              <option value="Unlimited Miles">Unlimited Miles (12 AED/ Month)</option>
            </select>
          </label>
        </div>
        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </div>
  );
}

export default CarRentalBooking;