"use client"
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Ordernow = () => {

    const router = useRouter();
    const searchParams = useSearchParams();


    const exoclick_tracking = searchParams.get('bullriderorders');
    // console.log('exoclick_tracking: ', exoclick_tracking);

    return (
        <div className='flex justify-center items-center'>
            <Link href="#buynow"
                className='cursor-pointer order-now fontPoppins px-10 py-1 bg-green-700 text-white sm:text-2xl text-[1.2rem] font-semibold rounded hover:bg-gray-600 my-3 flex items-center'>
                BUY NOW
                <img src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/upi_options.svg" alt="" className="ml-2" />
                <img
                    src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/right_arrow.svg"
                    className="ml-2"
                    alt="right_arrow"
                />
            </Link>
        </div>
    )
}

export default Ordernow