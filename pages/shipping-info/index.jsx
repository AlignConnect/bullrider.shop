import React from 'react'

const page = () => {
    return (
        <section className='w-full md:max-w-5xl mx-auto bg-gray-100 text-black fontPoppins'>


            <div className=' text-2xl pt-6 font-extrabold px-2 text-center'>
                Shipping Policy
            </div>


            <hr className='my-3' />

            <div className='px-2 py-2 text-[1rem] sm:text-[1.1rem] text-justify'>
                In order to provide good service and timely and efficient deliveries, please enter the correct pin code in the shipping address field of the Registration Form. Also, it is very important for us to have your contact number, so please enter your correct phone number while registering.


            </div>

            <div className=' text-2xl pt-6 font-extrabold px-2 text-center'>
                DELIVERY IN INDIA
            </div>

            <hr className='my-3' />

            <div className='px-2 py-2 text-[1rem] sm:text-[1.1rem] text-justify'>
                The estimated time of delivery within India is generally 3-7 business days, time may vary according to your delivery location.

                Please note that if your location is not served by our regular courier partners, then we will be dispatching your order through Value Payable Post (VPP) or Speed Post. In such cases, delivery duration may vary from 7-10 days

                Delivery time may also vary according your delivery location. Orders placed from North East India require minimum 3-5 business days for delivery.

            </div>

            <div className=' text-2xl pt-6 font-extrabold px-2 text-center'>
                Shipping Charges
            </div>

            <hr className='my-3' />

            <div className='px-2 py-2 text-[1rem] sm:text-[1.1rem] text-justify'>
                Free Shipping Available to all Order

                *AR Ayurveda Pvt Ltd reserve the right to change or update above policy at any time by placing a notice on the website. Such changes or updated shall be effective immediately upon posting to the website.

                <hr className='my-3' />

            </div>

        </section >
    )
}

export default page