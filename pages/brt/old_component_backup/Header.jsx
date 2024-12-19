import { Anton } from 'next/font/google'
import React from 'react'


const anton = Anton({
    display: "swap",
    weight: ["400"],
    subsets: ["latin"]

})


const Header = () => {




    return (
        <section className='border'>



            <div className='relative'>

                <div className='absolute z-10 transform translate-x-[-50%] left-[50%] sm:py-2 w-full text-center'>

                    <div className='text-xl py-3 px-5 sm:mt-7 bg-white font-bold fontPoppins sm:w-[75%] mx-auto'>
                        POWER OF 13 PREMIUM HERBS
                    </div>

                    <div className={anton.className}>

                        <div className='font-bold text-4xl sm:text-6xl py-3 sm:py-5'>
                            BULL RIDER CAPSULE
                        </div>

                        <div className={anton.className}>
                            <h2 className='sm:text-2xl'> Increase your Strength, Stamina, and Vitality!</h2>
                        </div>

                    </div>

                </div>

                <div className='w-full relative'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/18b22c65-d11b-4ddd-9a0f-74afc61bd300/public" alt="sdf" loading='lazy' className='w-full' />
                </div>

            </div>


        </section>
    )
}

export default Header