import dynamic from 'next/dynamic'
import React from 'react'
import { useEffect } from 'react';

const Header = dynamic(() => import('./component/Header'));
const BigBillion = dynamic(() => import('@/pages/commonUse/bigbillion/Big'));

const Sec1 = dynamic(() => import('./component/Sec1'))
const Sec2 = dynamic(() => import('./component/Sec2'));
const Sec3 = dynamic(() => import('./component/Sec3'))
const Sec4 = dynamic(() => import('./component/Sec4'));



const Footer = dynamic(() => import('@/pages/commonUse/Footer'))
const Footerpop = dynamic(() => import('@/pages/commonUse/bottompopup/BottomHandler'))

const OrderNow = dynamic(() => import('./component/Ordernow'));

const index = () => {

    useEffect(() => {

        localStorage.setItem("PATH", "bullrider.shop/brx")

    }, [])



    return (

        <section className='w-full mx-auto sm:w-[580px]'>

            <Header />
            <BigBillion />
            {/* <OrderNow /> */}
            <Sec1 />
            <OrderNow />
            <Sec2 />
            <OrderNow />
            <Sec3 />
            <OrderNow />
            <Sec4 />

            {/* <Form /> */}

            <Footer />
            <Footerpop />

        </section>

    )
}

export default index