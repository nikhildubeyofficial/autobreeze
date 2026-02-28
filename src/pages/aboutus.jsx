import React from 'react'
import { Navigation } from '../components/navigation'
import Footer from '../components/footer'

const AboutUs = () => {
  return (
    <div>
      <Navigation page="detail"/>
      <div className="footer-section pt-5">
        <div className="container pt-5 pb-5">
         <div className="row">
            <div className="col-12">
                <div className="about-img w-100 pt-5">
                    <img src="./img/mapsaudi.jpg" className='w-100 img-fluid' alt="" />
                </div>
            </div>
            <div className="col-12">
                <div className="title-text mt-3 mb-3">
                    <h1 className='text-theme'>About Us</h1>
                </div>
                <div className="paragraph-about">
                    <p className='mb-0 pb-3'>Welcome to AutoBreeze Car Rental in Dubai! We are a trusted and reliable rental company that provides a wide range of vehicles for all your long-term car rental needs. Our goal is to make your rental experience a seamless and stress-free one.</p>
                    <p className="mb-0">Mission statement: At AutoBreeze Car Rental, we strive to provide flexible, reliable, and affordable long-term car rentals tailored to meet the unique needs of each customer. We are committed to delivering exceptional service and ensuring customer satisfaction by offering a wide range of high-quality vehicles. </p>
                    <p className="">At AutoBreeze Car Rental, we prioritize safety and cleanliness, with all our vehicles regularly maintained and thoroughly cleaned. Our team of experienced professionals is here to assist you in finding the perfect vehicle to suit your needs and budget.</p>
                    <p className="pb-2 pt-1">With our commitment to top-notch customer service and hassle-free rental experiences, AutoBreeze Car Rental ensures that you stay on the road with confidence and ease. Drive with us, where your journey is our priority.</p>
                </div>
            </div>
         </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
