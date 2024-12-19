import Link from 'next/link'
import React from 'react'

const bra_footer = () => {
    return (
        <section className='bg-[#2a2a2a]'>




            <div className='py-4'>


                <div className='bg-[#F8F4E1]'>
                    <div className='text-md text-center pt-4 text-black'>
                        We are available on:-
                    </div>


                    <div className="flex justify-center items-center gap-7 py-3">
                        <a href="https://bit.ly/3JvDOKa">
                            <img src="/checkout_images/flipkart.png" alt="" className='sm:w-28 w-24 mx-auto' />
                        </a>
                        <a href="https://amzn.to/49VCQC0">
                            <img src="/checkout_images//amazon.png" alt="" className='sm:w-24 w-20 mx-auto ' />
                        </a>
                    </div>

                    <hr className='my-3' />
                </div>


                <div className="flex items-center justify-center gap-2 py-2">
                    <div className="">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4673b9a2-df3e-4ca7-5b09-c411e0e1ed00/public" alt="" className='w-16 md:w-20 mx-auto' />
                    </div>
                    <div className="">
                        <div className="flex items-center gap-1">
                            <div className="fontPoppins uppercase text-yellow-500 md:text-xl text-md font-semibold">
                                BullRider Capsule
                            </div>
                            <img src="/main/home_images/verify.svg" alt="" className='w-4' />
                        </div>
                        <div className="fontPoppins text-white text-[0.7rem]">
                            THE GOOD MEN SECRET
                        </div>
                    </div>
                </div>

                {/* 
            <hr className='my-3 w-1/2 mx-auto' /> */}


                <div className="text-white text-center text-[0.7rem] md:text-[0.9rem] py-3 px-2">
                    Bullrider Capsule is the best Ayurvedic Capsules which helps to increase the size of P and it leads to increase E time. It has ayurvedic ingredients like Withania, Somnifera, Asparagus, Racemosus, Asparagus, Adscendens Myristica Fragrans etc.
                </div>

                <div className="text-white text-center text-[0.7rem] md:text-[0.9rem] py-3 px-2">
                    which provides the good amount of energy and facilitate the absorption of blood flow to the cavernous body of the P. Bullrider Capsule is a first choice.
                </div>

                <div className="">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d7a611cf-2eae-4586-7527-94f98908f100/public" alt="" className='w-22 mx-auto' />
                </div>

                <div className="text-white py-5">
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


                <div className="text-center text-blue-500 mb-16 md:mb-4 text-sm">
                    © 2024 bullrider capsule | All Rights Reserved.
                </div>




            </div>


        </section>
    )
}

export default bra_footer