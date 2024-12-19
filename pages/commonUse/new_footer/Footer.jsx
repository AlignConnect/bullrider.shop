import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='bg-gray-200'>

            <div className='py-4 sm:max-w-[70%] mx-auto text-black'>

                <div className="flex items-center justify-center gap-2 py-2">
                    <div className="bg-black rounded-full">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4673b9a2-df3e-4ca7-5b09-c411e0e1ed00/public" alt="" className='w-16 md:w-20 mx-auto' />
                    </div>
                    <div className="">
                        <div className="flex items-center gap-1">
                            <div className="fontPoppins uppercase text-black md:text-xl text-md font-extrabold">
                                BullRider Capsule
                            </div>
                            <img src="/main/home_images/verify.svg" alt="" className='w-4' />
                        </div>
                        <div className="fontPoppins text-[0.7rem]">
                            THE GOOD MEN SECRET
                        </div>
                    </div>
                </div>




                <div className="text-center text-[0.8rem] md:text-[0.9rem] py-3 px-2">
                    Empower your workouts with Bull Rider Capsules—crafted to boost your strength, enhance stamina, and build immunity naturally.
                </div>


                <div className="">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d7a611cf-2eae-4586-7527-94f98908f100/public" alt="" className='w-22 mx-auto' />
                </div>

                <div className="py-5">
                    <div className="fontPoppins text-sm sm:flex justify-center items-center text-center gap-4">

                        <Link href='/privacy-policy' className='underline '>
                            Privacy Policy
                        </Link><br />

                        <Link href='/terms-conditions' className='underline  '>
                            Terms & Conditions
                        </Link><br />

                        <Link href='/return-refund' className='underline  '>
                            Return & Refund Policy
                        </Link><br />


                        <Link href='/shipping-info' className='underline '>
                            Delivery information
                        </Link><br />
                    </div>
                </div>


                <div className="text-center text-blue-800 mb-16 md:mb-4 text-sm">
                    © 2024 bullrider capsule | All Rights Reserved.
                </div>




            </div>


        </section>
    )
}

export default Footer