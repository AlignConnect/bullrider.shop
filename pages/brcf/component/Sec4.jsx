import dynamic from 'next/dynamic'
import React from 'react'
import { CiPercent } from 'react-icons/ci'
import { GiTakeMyMoney } from 'react-icons/gi'
import { TbMoneybag, TbTruckDelivery } from 'react-icons/tb'
import { IoMdEyeOff } from "react-icons/io";



const Form = dynamic(() => import('./Formdata'));

const Review = dynamic(() => import('./ReviewSection'))

const Sec4 = () => {


    const delivery_options = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center md:justify-center gap-2 py-2 ' key={key}>
                <div className="">{e.icons}</div>
                <div className="fontPoppins">
                    <div className='md:text-md text-md font-semibold uppercase text-[#c2995c]'>
                        {e.title}
                    </div>
                    <div className='text-sm fontPoppins'>{e.content}</div>
                </div>
            </div>
        })
    }

    return (
        <section className='bg-white'>

            <h2 className='text-2xl px-3 font-bold pt-5 text-center'>महसूस ना हो थकान, <span className='text-[#b78639]'>आयुर्वेदिक तरीके से सालों- साल रहें जवान </span> </h2>



            <div className='p-2'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/92a487f8-6b6a-46fd-2848-154252c47b00/public" alt="asd" loading='lazy' className='w-full  rounded-lg overflow-hidden' />
            </div>

            <Form />

            
            <h1 className='text-center text-xl font-bold pt-3 fontPoppins'>Heres what our Customer says</h1>

            <div className='w-[90%] mx-auto'>
                <Review />
            </div>


            <div className="max-w-7xl mx-auto py-7 ">

                <div className="bg-[#f8f8f8] text-black shdw mx-3  rounded-md my-2">
                    <div className="grid md:grid-cols-2 items-center gap-2 py-4 px-2">
                        {
                            delivery_options([
                                {
                                    icons: <TbTruckDelivery size={50} />,
                                    title: "Free Shipping",
                                    content: "Shipping on all prepaid orders"
                                },
                                {
                                    icons: <GiTakeMyMoney size={50} />,
                                    title: "Cash On delivery Available",
                                    content: "Pay after recieving your pack"
                                },
                                {
                                    icons: <IoMdEyeOff size={50} />,
                                    title: "Discreet Delivery",
                                    content: "Discreet Delivery all over India"
                                },
                                {
                                    icons: <CiPercent size={50} />,
                                    title: "Prepaid Offer",
                                    content: "Save extra 10% on prepaid orders"
                                },
                            ])
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Sec4