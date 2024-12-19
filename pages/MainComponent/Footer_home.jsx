
import Link from 'next/link'
import React from 'react'

const Footer_home = () => {
    return (
        <section className='bg-black'>
            <div className="max-w-7xl mx-auto py-7 ">

                <div className="sm:hidden block">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/beba635f-ed41-4131-6f07-3aa09a652500/public" alt="" className=' w-2/5 mx-auto' />
                </div>
                <div className=" grid sm:grid-cols-4 grid-cols-2 text-center items-center justify-center gap-5 py-10 px-2">


                    <div className="sm:block hidden">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/beba635f-ed41-4131-6f07-3aa09a652500/public" alt="" className=' w-3/4 sm:mx-auto ' />
                    </div>

                    <div className="">
                        <div className="text-gray-400 font-extrabold text-2xl">
                            Bull Rider
                        </div>
                        <ul className='text-white py-2 text-sm'>
                            <li>About Us</li>
                            <li>Testimonials</li>
                            <li>Benefits</li>
                            <li>Reviews</li>
                            <li>Videos</li>
                        </ul>
                    </div>


                    <div className="">
                        <div className="text-gray-400 font-extrabold text-2xl">
                            Herbs
                        </div>
                        <ul className='text-white py-2 text-sm'>
                            <li>Shilajit Suddha</li>
                            <li>Ashwagandha Ghana</li>
                            <li>Kaucha ghana</li>
                            <li>Shwet Musli</li>
                            <li>Gokshura</li>
                        </ul>
                    </div>

                    <div className="">
                        <div className="text-gray-400 font-extrabold text-2xl">
                            Terms
                        </div>
                        <ul className='text-white py-2 text-sm'>
                            <Link href={'shipping-info'}>Delivery information</Link><br />
                            <Link href={'privacy-policy'}>Privacy Policy</Link><br />
                            <Link href={'return-refund'}>Return & Refund Policy</Link><br />
                            <Link href={'terms-conditions'}>Terms & Conditions</Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-500 text-black text-sm mx-auto  text-center py-3 sm:mb-0 mb-16">
                All rights reserved © 2024 Bull Rider Capsule
            </div>

        </section>
    )
}

export default Footer_home