"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import dayjs from 'dayjs';
import { useSearchParams } from 'next/navigation';
import { useFetchOrdersQuery } from '@/redux/services/products';


const page = () => {



    return (

        <section className='sm:max-w-2xl w-full mx-auto bg-white fontPoppins'>

            <div className="p-2 sm:p-4">

                <div className='relative '>

                    <div className="relative z-10 py-1">

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c85f118d-529b-471f-85b5-f934d34bba00/public" alt="order-status" loading='lazy' className='sm:w-52  w-36 mx-auto pt-5' width={"100%"} height={"100%"} />


                        <div className="text-white text-center py-1 sm:py-5">
                            <div className="sm:text-3xl text-[1.4rem] text-center font-semibold uppercase">
                                Thank You!
                            </div>

                            <div className="sm:text-2xl text-md text-center py-1">
                                YOUR ORDER IS CONFIRMED
                            </div>

                            <small className="">
                                <div className=''>Estimated Delivery Date is {dayjs().add(4, 'days').format('MMM DD, YYYY')}</div>
                            </small>

                        </div>



                    </div>

                    <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a361c211-39c3-48d6-082b-1d6f3745a300/public' fill loading='lazy' alt='image' />

                </div>

            </div>




        </section >
    )
}

export default page