"use client"
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Ordernow = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const taboola_tracking = searchParams.get('tbclid');

    const handleOrderClick = () => {
        router.push('/checkouts');
    };

    return (
        <div className='text-center'>

            <Link href={{ pathname: "/checkouts/", query: { "tbclid": taboola_tracking } }}
                className='cursor-pointer fontPoppins px-8 py-1 bg-black inline-block  text-white sm:text-xl text-[1rem] font-semibold rounded hover:bg-gray-600 my-3 '>
                ORDER NOW
            </Link>


        </div>
    )
}

export default Ordernow