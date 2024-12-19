import React from 'react'

const Section3 = () => {

    const reasons = (arr) => {
        return arr?.map((e, key) => {
            return <div key={key} className='sm:py-5 py-2 px-1 mx-2 '>
                <img src={e.reason_img} className='mx-auto md:w-16 w-12 pt-2' alt='reason_img' loading="lazy" />
                <div className='md:text-xl text-sm font-extrabold text-center text-black pt-3'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.reason_title }}
                    />
                </div>
            </div >
        })
    }


    return (
        <div className='bg-white py-5 sm:py-10 px-3'>


            <h1 className='text-3xl sm:text-4xl font-bold  sm:py-10 text-center'>Reason to Trust</h1>






            <div className=" rounded-md mx-3 mt-2 rsn" >
                <div className=' grid md:grid-cols-3 grid-cols-3 md:gap-2 sm:w-[70%] bg-[#faf0d8] mx-auto  mx-1'>
                    {
                        reasons([
                            // {
                            //     reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1091ddec-5aac-4edc-9cf7-748af296a400/public",
                            //     reason_title: "100% मनी<br/> बैक गारंटी "
                            // },
                            {
                                reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b2e4e47e-6d1f-4c84-c85b-3f2a3512f600/public",
                                reason_title: "20 लाख+<br/> संतुष्ट ग्राहक "
                            },
                            {
                                reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77613456-74cc-497e-c30f-fdc2667ca900/public",
                                reason_title: "COD पेमेंट<br/> उपलब्ध "
                            },
                            {
                                reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3f2dca83-5221-43cc-8919-28b35c924300/public",
                                reason_title: "Flipkart, Amazon<br/> पर लिस्टेड"
                            }
                        ])
                    }
                </div>

                {/* <div className='col-span-4 sm:col-span-2 text-center'>

                    <div>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/41f7b2c8-40c0-400f-e1ed-43366ad8b400/public" alt="asd" loading='lazy' className='w-[60px] mx-auto' />

                    </div>

                    <div>
                        <p className='font-bold pt-4'>100% मनी बैंक गारंटी </p>
                    </div>


                </div>



                <div className='col-span-4 sm:col-span-2 text-center'>

                    <div>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b5ae8f04-bd29-42d7-cb0d-e1f28cc5c800/public" alt="asd" loading='lazy' className='w-[60px] mx-auto' />

                    </div>

                    <div>
                        <p className='font-bold pt-4'>+20 लाख संतुष्ट ग्राहक </p>
                    </div>


                </div>


                <div className='col-span-4 sm:col-span-2 text-center'>

                    <div>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b012ed33-3901-455b-573a-fbba7d79c200/public" alt="asd" loading='lazy' className='w-[60px] mx-auto' />

                    </div>

                    <div>
                        <p className='font-bold pt-4'> COD पेमेंट उपलब्ध </p>
                    </div>


                </div>



                <div className='col-span-4 sm:col-span-2 text-center'>

                    <div>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0daf5bc8-5efe-4bd8-513e-94e0a0fa7e00/public" alt="asd" loading='lazy' className='w-[60px] mx-auto' />

                    </div>

                    <div>
                        <p className='font-bold pt-4'> Flipkart, Amazon पर लिस्टेड</p>
                    </div>



                </div> */}

            </div>

            {/* //------------------------------------------- */}


            {/* --------------------------------------------- */}


            <h1 className='text-3xl sm:text-5xl font-black pt-10 pb-7 text-center'>सेवन करने का सही तरीका</h1>


            <div className='relative grid grid-cols-4 sm:w-[70%] mx-auto items-center sm:min-h-[550px]  rounded-xl overflow-hidden'>

                <div className='absolute'>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/32c27292-bc64-42e6-653f-55234584df00/public" alt="sdsd" loading='lazy' className='hidden sm:block' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/72f7ee99-f423-426a-6798-317b35be4600/public" alt="sdsd" loading='lazy' className='bg-cover bg-no-repeat sm:hidden block' />

                </div>


                <div className='col-span-4 sm:col-span-2 h-[200px]'>

                </div>

                <div className='col-span-4 sm:col-span-2  relative '>

                    <h1 className='text-3xl sm:text-5xl text-[#c28c25] font-bold text-center  sm:text-start px-3 sm:mb-8 ' >सेक्स पावर बढ़ाने के लिए</h1>

                    <h1 className='text-white text-xl sm:text-3xl my-4 px-3 sm:my-4'> &#x2728; 1 कैप्सूल सुबह शाम भोजन के बाद</h1>

                    <h1 className='text-white text-xl sm:text-3xl my-4 px-3 sm:my-6'>&#x2728; 1 गिलास गुनगुने दूध या पानी के साथ</h1>

                    <h1 className='text-white text-xl sm:text-3xl my-4 px-3 sm:my-6 flex gap-2'> <div>&#x2728;</div> बेहतर परिणाम के लिए दूध के साथ अनुमोदित</h1>


                </div>


            </div>



            {/* ------------------------------- */}


            <div className='bg-[#d79b2b] mt-8 sm:mt-16 rounded-md'>
                <div className='grid grid-cols-6 items-center  sm:w-[60%] mx-auto py-5 gap-5 px-3'>


                    <div className='col-span-6 sm:col-span-2 flex items-center gap-5 py-2 sm:py-10'>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4366f101-04a6-4a72-3a72-6a63bf76dd00/public" alt="dssd" loading='lazy' />
                        </div>



                        <div>
                            <h1 className='text-lg sm:text-xl font-semibold'>Free Shipping & Return</h1>

                            <p className='text-sm'>Free shipping across india with discreet packaging.
                            </p>
                        </div>


                    </div>



                    <div className='col-span-6 sm:col-span-2 flex items-center gap-5 py-2'>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3877e9bd-0027-4ff4-0b3e-e51406188d00/public" alt="dssd" loading='lazy' />
                        </div>


                        <div>

                            <h1 className='text-xl font-semibold'>24/7 Support </h1>

                            <p className='text-sm'>

                                24/7 support for better customer convenience

                            </p>

                        </div>


                    </div>




                    <div className='col-span-6 sm:col-span-2 flex items-center gap-5 py-2'>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/171ac4ab-a253-4eb9-f4d0-3a601a330e00/public" alt="dssd" loading='lazy' />
                        </div>



                        <div>

                            <h1 className='text-xl font-semibold'>100% Secure Payments</h1>

                            <p className='text-sm'>Your transactions are protected with advanced encryption.
                            </p>

                        </div>


                    </div>


                </div>

            </div>


        </div>
    )
}

export default Section3
