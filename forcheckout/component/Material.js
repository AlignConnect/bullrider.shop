import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Material = () => {


    const [sell, setsell] = useState(70)

    useEffect(() => {

        setInterval(() => {
            const total = (new Date().getMinutes() * 60) + (new Date().getSeconds());
            setsell(() => {
                const log = Math.ceil((total * 87) / 3600)
                return log + 70
            })

        }, 1000);

        return () => {

            clearInterval();

        }

    }, [])



    return (

        <section className='px-2'>
            <div className='bg-[#eae09b] p-2 rounded-sm'>

                <div className='font-bold text-xl'>Offers</div>
                <ul className='list-disc save_extra'>
                    <li className='text-sm'>Save Extra 10% with Online Payment</li>
                    <li className='text-sm'>COD Available</li>
                </ul>

            </div>

            <section>
                <div className='text-center my-3 flex justify-center items-center'>
                    <Image src="/checkout_images/sharebazzer.webp" alt="no" width={21} height={21} />
                    <div style={{ fontWeight: 700 }}>
                        &nbsp;{sell} People Ordered Online in Last 1 Hour
                    </div>
                </div>

                <div className='m-3'>
                    <Image src="/checkout_images/offers.webp" height={300} width={300} alt='no' className='mx-auto' />
                </div>

                {/* <div className='w-full md:w-3/4 mx-auto my-3'>
                    <iframe width="100%" height="200px" src="https://www.youtube.com/embed/fC9s9TOf9pg?si=qr3N71uBiDG4Mc8G" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div> */}

                <div className='mx-auto'>
                    <Image src={"/checkout_images/diwali_offer.webp"} height={100} width={1000} alt='no' />
                </div>
            </section>


        </section>

    )



}

export default Material