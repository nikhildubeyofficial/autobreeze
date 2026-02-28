import React from 'react'
import { Navigation } from '../components/navigation'
import Breadcrumb from '../components/common/bredcum.component'
import Footer from '../components/footer'

const TermsAndUse = () => {
    return (
        <>
            <Navigation page="detail"></Navigation>
            <Breadcrumb name="Terms of Use" />
            <div className="container pb-2">
                <div className="row">
                    <div className="col-12">
                        <div className="title-text mt-3 mb-3">
                            <h1 className='text-theme'>Terms of Use</h1>
                        </div>
                    </div>
                    <div className="col-12">

                        <section className="mb-4">
                            <h3 className="fw-bold">Introduction</h3>
                            <p className="text-muted">
                                These Terms of Use govern your vehicle rental with AutoBreeze Car Rentals. By renting from us, you agree to follow these terms in accordance with Dubai, UAE laws.
                            </p>
                        </section>


                        <section className="mb-4">
                            <h3 className="fw-bold">Eligibility</h3>
                            <p className="text-muted">
                                - You must be at least 21 years old to rent, or 25 years old for specific vehicle categories. <br />
                                - A valid driver’s license recognized by the UAE is required. <br />
                                - For non-residents of the UAE, an international driving license or permit is required along with your home country’s driver's license.
                            </p>
                        </section>


                        <div>
                            <section className="mb-4">
                                <h3 className="fw-bold">Rental Agreement</h3>
                                <p className="text-muted">
                                    - A formal rental agreement will be issued when you collect the vehicle, specifying the rental period, fees, and conditions. <br />
                                    - The rental period is calculated on a 24-hour basis.
                                </p>
                            </section>
                            <section className="mb-4">
                                <h3 className="fw-bold">Fees and Payment</h3>
                                <p className="text-muted">
                                    - Rental fees must be paid upfront or as agreed in the rental contract. <br />
                                    - Additional charges may apply for late returns, fuel, insurance, or any damages. <br />
                                    - A refundable security deposit will be held and returned within 10 days, following the vehicle inspection.
                                </p>
                            </section>
                            <section className="mb-4">
                                <h3 className="fw-bold">Vehicle Use</h3>
                                <p className="text-muted">
                                    - The vehicle may only be used for lawful purposes and in accordance with UAE traffic laws. <br />
                                    - Only authorized drivers are permitted to operate the vehicle. <br />
                                    - Off-road driving is prohibited unless expressly permitted by the rental agreement.
                                </p>
                            </section>
                            <section className="mb-4">
                                <h3 className="fw-bold">Insurance and Liability</h3>
                                <p className="text-muted">
                                    - Basic insurance is included, with the option to purchase additional coverage. <br />
                                    - You are responsible for any damage, theft, or loss of the vehicle during the rental period. <br />
                                    - Liability for accidents or third-party damages may apply, as per UAE law.
                                </p>
                            </section>
                            <section className="mb-4">
                                <h3 className="fw-bold">Maintenance and Return</h3>
                                <p className="text-muted">
                                    - You are responsible for regular checks (e.g., fuel, tire pressure) during the rental period. <br />
                                    - The vehicle must be returned in the same condition, except for normal wear and tear. <br />
                                    - The vehicle must be returned at the agreed-upon location and time specified in the rental agreement.
                                </p>
                            </section>
                        </div>


                        <div>
                            <section className="mb-4">
                                <h3 className="fw-bold">Cancellations and Changes</h3>
                                <p className="text-muted">
                                    - Cancellations made at least 24 hours before the rental period begins are eligible for a full refund. <br />
                                    - Changes to the rental terms may incur additional fees.
                                </p>
                            </section>
                            <section className="mb-4">
                                <h3 className="fw-bold">Governing Law</h3>
                                <p className="text-muted">
                                    These terms are governed by UAE laws, and any disputes will be resolved in the courts of Dubai.
                                </p>
                            </section>
                        </div>



                        <section className="mb-4">
                            <h3 className="fw-bold">Changes to Terms</h3>
                            <p className="text-muted">
                                We reserve the right to modify these terms. Notice of any changes will be posted on our website or communicated via email.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TermsAndUse
