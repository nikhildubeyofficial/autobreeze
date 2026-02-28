import React from 'react'
import { Navigation } from '../components/navigation'
import Breadcrumb from '../components/common/bredcum.component'
import Footer from '../components/footer'
import CarBookForm from '../components/common/carbook.component'
import DiscountPromoComponent from '../components/checkout/discountpromo.component'
import ProfileSectionComponent from '../components/profile/profile-section.component'

const Checkout = () => {
    return (
        <>

            <Navigation page="detail"></Navigation>
            <Breadcrumb name="checkout" />
            <div className="container pb-2">
                <div className="row">
                    <div className="col-12">
                        <div className="row price-breakup bg-white py-2">
                            <div className="col-7">
                                <CarBookForm />
                            </div>
                            <div className="col-5">
                                <DiscountPromoComponent />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 px-0">
                    <ProfileSectionComponent page={"Checkout"} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout
