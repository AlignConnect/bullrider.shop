import Link from 'next/link'
import React from 'react'



const Header = () => {
    return (
        <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/09351cbf-7213-4694-9def-fbe2164ab500/public)]  bg-no-repeat bg-cover sm:bg-contain bg-[#0f1011]'>
            <div className='grid grid-cols-7 w-full px-2 sm:w-[90%] mx-auto items-center sm:pt-10 pt-5'>

                <div className='col-span-7 sm:col-span-3 text-center'>


                    <div className='border-2 rounded-full text-center inline-block pt-2 sm:pt-4 px-4 sm:px-8 text-xl sm:text-4xl font-bold bg-[#f4de88]'>
                        INDIA'S MOST TRUSTED
                    </div>


                    <h1 className='text-white text-2xl sm:text-4xl pt-5 sm:pt-10  font-black'>Unleash your inner bull power with</h1>

                    <h1 className='text-4xl sm:text-6xl sm:pb-4 font-bold fontPoppins text-[#f4de88]'>Bull Rider Capsule</h1>


                    <h1 className='text-white text-xl sm:text-3xl pt-5 sm:pt-10 font-semibold fontPoppins'>Blend of Premium Ayurvedic</h1>

                    <h2 className='text-white text-xl sm:text-3xl pb-5 font-semibold fontPoppins'>Formulation for Men</h2>



                    <div>

                        <h2 className='font-bold text-[#aa651a] text-2xl sm:text-5xl fontPoppins'>GET UPTO  <span className='font-black'>55% OFF</span></h2>

                    </div>

                    <div className='my-5 sm:my-10'>
                        <Link href={"#buynow"} className='uppercase bg-white px-10 py-2 my-5 sm:my-10 text-xl sm:text-3xl font-bold rounded-md fontPoppins'>
                            order now
                        </Link>
                    </div>


                </div>

                <div className='col-span-7 sm:col-span-4'>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3f795302-afc8-404f-2a34-1fd9c1d65c00/public" alt="sdf" loading='lazy' />

                </div>

            </div>
        </div>
    )
}

export default Header
