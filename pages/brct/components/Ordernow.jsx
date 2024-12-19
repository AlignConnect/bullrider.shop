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
        <div className='text-center '>

            <Link href="#buynow"
                className='cursor-pointer order-now  fontPoppins px-8 py-1 bg-red-700 inline-block  text-white sm:text-xl text-[1rem] font-semibold rounded hover:bg-gray-600 my-3 '>
                ORDER NOW
            </Link>


        </div>
    )
}

export default Ordernow