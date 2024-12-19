"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import dayjs from 'dayjs';
import { useSearchParams } from 'next/navigation';
import { useFetchOrdersQuery } from '@/redux/services/products';


const page = () => {


    const [orderData, setOrderData] = useState(null)



    const searchParams = useSearchParams()

    const orderId = searchParams.get('orderId')


    // console.log('orderId: ', orderId);


    //------------------------------------------------------------

    const { data } = useFetchOrdersQuery({ id: orderId });



    //-----------------------------------------------------------


    const getOrderIdData = async (orderId) => {
        const order_status_info = await fetch(`${process.env.NEXT_APP_API_URL}order/unique/${orderId}`, { method: "GET" })
        const data = await order_status_info.json()
        if (data.message === "success") {

            // console.log(new Date().toISOString())

            const originalDate = new Date(data?.Orders?.[0]?.created_at);

            const newDate = new Date(originalDate.getTime() + 12 * 60 * 60 * 1000);

            // console.log('newDate <= new Date(): ', newDate <= new Date());
            if (newDate <= new Date()) {
                // return window.location.href = `/checkout`
            }
            setOrderData(data?.Orders?.[0])
        } else {
            // return window.location.href = `/checkout`
        }
    }




    useEffect(() => {
        if (orderId) {
            getOrderIdData(orderId)
        } else {
            // return window.location.href = `/checkout`
        }

    }, [orderId])

    // console.log(orderData)

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


            <div className="bg-[#e9eaec] font-semibold text-black uppercase sm:text-xl text-[1.1rem] py-2 my-2 text-center">
                Order Details
            </div>

            <div className="p-3 sm:p-6 text-[1rem] sm:text-xl">

                <div className="grid grid-cols-2 items-center justify-between gap-2 pb-3">

                    <div className=' uppercase font-semibold'>
                        order id
                    </div>

                    <div className='text-end '>
                        #{data?.order?.id}
                    </div>

                    <div className=' text-[0.9rem] sm:text-[1rem] '>
                        Order Date
                    </div>

                    <div className='text-end text-[0.9rem] sm:text-[1rem]'>
                        <div className=''>{dayjs(data?.order?.created_at).format('MMM DD, YYYY')}</div>
                    </div>

                    <div className=' text-[0.9rem] sm:text-[1rem] '>
                        Product Name
                    </div>

                    <div className='text-end text-[0.8rem] sm:text-[1rem] uppercase '>
                        <div className='line-clamp-1'>{data?.order?.line_items[0]?.name}</div>
                    </div>

                    <div className=' text-[0.9rem] sm:text-[1rem] '>
                        Payment Mode
                    </div>

                    <div className='text-end text-[0.9rem] sm:text-[1rem] uppercase'>
                        <div className=''>{data?.order?.payment_gateway_names[0]?.includes('COD') ? 'cod' : data?.order?.payment_gateway_names[0]}</div>

                    </div>

                </div>

                <hr />


                <div className=' uppercase font-semibold pt-3'>
                    Address
                </div>


                <small className="">
                    <div className='py-2 '>
                        {
                            data?.order?.shipping_address?.address1 || data?.order?.shipping_address?.address2
                        }, {data?.order?.shipping_address?.city}, {data?.order?.shipping_address?.province}-{data?.order?.shipping_address?.country}
                    </div>
                </small>

                <hr />



                <div className=' uppercase font-semibold pt-3'>
                    order Summary
                </div>

                <div className="grid grid-cols-2 items-center justify-between gap-1 py-4">

                    <div className=' text-[0.9rem] sm:text-[1rem] '>
                        Sub Total
                    </div>

                    <div className='text-end text-[0.9rem] sm:text-[1rem]'>
                        Rs. {data?.order?.total_line_items_price}
                    </div>


                    <div className=' text-[0.9rem] sm:text-[1rem] '>
                        Discount
                    </div>

                    <div className='text-end text-[0.9rem] sm:text-[1rem]'>
                        Rs. {data?.order?.total_discounts === "0.00"
                            ? "" : '-'}{data?.order?.total_discounts}
                    </div>

                    <hr />
                    <hr />

                    <div className=' text-[0.9rem] sm:text-[1rem] '>
                        Total amount
                    </div>

                    <div className='text-end font-semibold text-[0.9rem] sm:text-[1rem]'>
                        Rs. {data?.order?.total_price}
                    </div>

                </div>


                <div className='bg-[#1e9f66] text-center text-white text-xl py-2 rounded-lg '>
                    <button onClick={()=> window.location.href = "/"}>Done</button>
                </div>


            </div>


        </section >
    )
}

export default page