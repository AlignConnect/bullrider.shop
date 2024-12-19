import dynamic from 'next/dynamic'
import React from 'react'
import { useSelector } from 'react-redux';


const Header = dynamic(() => import('./component/Header'));
const Section1 = dynamic(() => import('./component/Section1'));
const Section2 = dynamic(() => import('./component/Section2'));
const Section3 = dynamic(() => import('./component/Section3'));

const Reasontotrust = dynamic(() => import('./component/SelectProduct'));

const BullriderOrderNow = dynamic(() => import('./component/Ordernow'));

const Foo = dynamic(() => import('../brf/components/bottompopup/BottomHandler'))

const index = () => {


    const productInfo = useSelector((state) => state.productInfo);

    const products = productInfo?.productsdata;


    // const v = "sdfsdf'dgfdfg"

    return (
        <div className='mx-auto'>


            <Header />
            <Section1 />

            <Section2 />
            {/* <BullriderOrderNow /> */}

            <Reasontotrust />

            <Section3 />

            <div className="text-center mt-3 sm:pb-5 pb-16 bg-zinc-100">
                <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/beba635f-ed41-4131-6f07-3aa09a652500/public"
                    alt="Logo"
                    className="w-28 mx-auto"
                    width="100%"
                    height="100%"
                    loading="lazy"
                />
                <p className="text-md mt-2 font-semibold fontPoppins">
                    {products?.vendor} Private Limited
                </p>
                <p className="text-sm mt-1 fontPoppins">
                    FF 14, Ujala Avenue, Sarkhej Road, Vishala, Ahmedabad Gujarat
                    (INDIA) - 380055
                </p>
            </div>

            <Foo />

        </div>
    )
}

export default index
