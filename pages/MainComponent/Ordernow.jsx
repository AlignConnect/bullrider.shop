"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Ordernow = () => {

    const router = useRouter();

    const handleOrderClick = () => {
        router.push('/checkouts');
    };

    return (
        <div className='text-center'>

            <button onClick={handleOrderClick} className="cursor-pointer fontPoppins px-8 py-1 bg-black inline-block  text-white sm:text-xl text-[1rem] font-semibold rounded hover:bg-gray-600 my-3 ">
                ORDER NOW
            </button>

        </div>
    )
}

export default Ordernow