"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import Ordernow from './Ordernow'

const Header = () => {

    const router = useRouter();

    const handleOrderClick = () => {
        router.push('/checkouts');
    };

    return (
        <section className=''>

            <div className='head_bg'>

                <div className="bg-yellow-400 py-1 uppercase fontPoppins font-semibold text-sm text-black text-center">
                    <div className="flex items-center justify-center gap-1">

                        <div className="">
                            *विज्ञापन-संबंधी(Advertorial)
                        </div>
                    </div>
                </div>

                <div className="sm:max-w-[90%] w-full  mx-auto ">


                    <div className=" grid sm:grid-cols-2 items-center gap-3 sm:gap-0 sm:pt-16 ">
                        <div className=" ">

                            <div className="ind_most_trusted_bg sm:inline-block uppercase px-5 py-1 sm:mb-4  fontKalnia font-semibold sm:text-[1.3vw] sm:rounded-full text-center ">
                                india's most trusted
                            </div>

                            <div className="fontJosefin leading-tight font-extrabold py-4 sm:text-left text-center">
                                <div className='sm:text-[1.7vw] text-[0.9rem]'>Boost up Strength, Stamina, and Immunity with</div>
                                <div className='sm:text-[3.4vw] text-[1.8rem] uppercase fontPoppins'>Bull rider capsule</div>
                            </div>

                            <div className="fontJosefin leading-tight font-semibold py-2 sm:text-left text-center">
                                <div className='sm:text-[1.6vw] text-[1.2rem]'>Blend of Premium Ayurvedic </div>
                                <div className='sm:text-[1.8vw] text-[1.2rem]'>Formulation for Men</div>
                            </div>

                            <div className="fontPoppins leading-tight font-semibold uppercase text-[#cf7819] sm:py-5 py-1 sm:text-left text-center">
                                <div className='sm:text-[1.9vw] text-[1.2rem]'>Get upto <span className='sm:text-[2.8vw] text-[1.5rem] font-extrabold'>37% off</span></div>
                            </div>

                            <div className="sm:hidden block text-center">
                                <Ordernow />
                            </div>

                        </div>

                        <div className="">

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9508c4be-8f4f-4a9c-a971-158748832e00/public" alt="img" className='w-full ' />
                        </div>
                    </div>

                </div>

            </div>




        </section >
    )
}

export default Header