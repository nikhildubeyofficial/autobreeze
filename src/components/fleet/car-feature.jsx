import React from 'react'

const CarFeatures = () => {
  return (
    <div className='row mb-2'>
        <h3>Features</h3>
      <div className="col-12">
        <div className="row">
            <div className="col-12 col-md-6"><p className='text-theme'><span className='me-3'><img src="./img/carfeature/milege.svg" alt="milage" /></span>Mileage: 250 Km</p></div>
            <div className="col-12 col-md-6 ps-2 ps-md-5"><p className='text-theme'><span className='me-3'><img src="./img/carfeature/deposit.svg" alt="miladepositge" /></span>Deposit: 1500 AED</p></div>
            <div className="col-12 col-md-6 "><p className='text-theme'><span className='me-3'><img src="./img/carfeature/fuel.svg" alt="fuel" /></span>Fuel Policy: Level to Level</p></div>
            <div className="col-12 col-md-6 ps-2  ps-md-5"><p  className='text-theme'><span className='me-3'><img src="./img/carfeature/insurance.svg" alt="insurance" /></span>Insurance: Basic</p></div>
            {/* <div className="col-12 col-md-6"><p className='text-theme'><span className='me-3'><img src="./img/carfeature/discount.svg" alt="discount" /></span>Discount included in Price</p></div> */}
        </div>
      </div>
    </div>
  )
}

export default CarFeatures
