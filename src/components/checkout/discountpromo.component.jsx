import React from 'react'

const DiscountPromoComponent = () => {
    return (
        <div className='px-4'>
            <div className="row mt-5">
                <div className="col-4"><img style={{width:"160px",height:"81px" ,transform:"rotate(-180deg)"}}src="https://s3-alpha-sig.figma.com/img/6ed1/b641/2e3b3c84dad1cecf98ad6424b011b889?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NhjpiAKf2Jif8BAWXIOVItH9a4gOSCBlWoNhaAfhKWObmTIqF3kELsddK7KgfwcqtcmCbvE8oFFXj1AZmh8XSXhvqwp9Bd7m5ig-xp8iRVkK7~RkQGNZ54~sT8LDWYH~8usu2sN4D7BavoeDQQ1SoeO5rYD3gMfCzpOPIzgCllavV-DgBbY8iP68dTHS7~0-d9QYu3UZg9BITwGb5F7MQFDBBMEC~ta4IPaW7zgkb-i0qX8u9WRwfI6VjJ0cHCmKSDj1VMpIMHpiaggAX9DvsVi8uU1IfbTKz12vPbV2TOk6gv8EFLXkEeAMC7yCQHZ2symX~qpslR04krtRa72IEQ__" alt="" /></div>
                <div className="col-8"><h4>Mercedes Benz C Class</h4></div>
                <hr className='text-secondary' />
                
                <div className="col-12 d-flex justify-content-between">
                    <div ><h6 className='fw-lighter'>Monthly Rent</h6></div>
                    <div ><h6 className='fw-lighter'>29 AED</h6></div>
                </div>
                <div className="col-12 d-flex justify-content-between">
                    <div ><h6 className='fw-lighter'>Tax</h6></div>
                    <div ><h6 className='fw-lighter'>29 AED</h6></div>
                </div>
                <div className="col-12 d-flex justify-content-between mb-2">
                    <div > <input
                                type="text"
                                id="address"
                                value={""}
                                className='form-control'
                                placeholder='Apply promocode'
                                // onChange={(e) => setAddress(e.target.value)}
                                // style={styles.input}
                            /></div>
                    <div ><button className='bg-dark-blue btn text-white px-5 '>Apply</button></div>
                </div>
                <div className="col-12 d-flex justify-content-between text-black mt-4">
                    <div ><h5 className='text-capitalize fw-semibold'>Total Price</h5></div>
                    <div ><h6 className=''>29 AED</h6></div>
                </div>
            </div>
        </div>
    )
}

export default DiscountPromoComponent;
