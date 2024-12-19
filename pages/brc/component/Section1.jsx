import dynamic from 'next/dynamic'
import React from 'react'

const Order = dynamic(() => import('./Ordernow'));

const Section1 = () => {
    return (
        <div>
            <div className=' bg-[#dead51]'>
                <div className='sm:w-[80%] mx-auto grid grid-cols-6 py-5'>

                    <div className='flex flex-col sm:flex-row items-center gap-4 col-span-2 mx-auto my-5'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c228b1a9-1f71-45b9-c325-26f1eba06a00/public" alt="asd" loading='lazy' className='w-[70px] sm:w-[100px]' />
                        </div>
                        <div className='text-lg sm:text-2xl sm:text-start text-center'>
                            Satisfied <br /> Customers
                        </div>
                    </div>


                    <div className='flex flex-col sm:flex-row items-center gap-4 col-span-2 mx-auto my-5'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e19c82e2-c7e3-4181-de5d-d1360a7b4700/public" alt="asd" loading='lazy' className='w-[70px] sm:w-[100px]' />
                        </div>

                        <div className='text-lg sm:text-2xl sm:text-start text-center'>
                            COD <br /> Available
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center gap-4 col-span-2 mx-auto my-5'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/12a81be4-e97f-42df-fc74-cd56b90bc300/public" alt="asd" loading='lazy' className='w-[70px] sm:w-[100px]' />
                        </div>

                        <div className='text-lg sm:text-2xl sm:text-start text-center'>
                            Men's <br /> First Choice
                        </div>
                    </div>


                </div>


            </div>




            {/* ------------------------------------------------------------------------------------------------- */}


            <div className='bg-white sm:bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/de39fa24-69de-415f-c8de-1747a2271a00/public)] bg-no-repeat bg-cover sm:-ml-5 py-5'>

                <div className=' mx-auto w-full sm:w-[80%] grid grid-cols-4 gap-5 items-center'>
                    <div className='col-span-4 sm:col-span-2 w-[85%] mx-auto'>

                        <h1 className='text-2xl sm:text-5xl font-black pt-4'>क्या आप भी सेक्स कमजोरी से परेशान है?</h1>

                        <p className='text-xl sm:text-2xl font-semibold sm:my-5'>
                            आजकल की व्यस्त जीवनशैली में पुरुष कम उम्र में ही जोश, ऊर्जा और स्टैमिना की कमी अनुभव करते हैं। ज्यादातर पुरुषों का दाम्पत्य जीवन या रिलेशनशिप उनके यौन कमजोरी और परफॉरमेंस प्रेशर की वजह से बेहाल है।
                        </p>



                    </div>

                    <div className='col-span-4 sm:col-span-2 sm:pt-10 px-3'>

                        <div className='flex items-center gap-4 my-6'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/96f5b3b4-216a-47fa-6df0-a9efe7580a00/public" alt="sdf" loading='lazy' className='w-[70px]' />
                            </div>
                            <div>
                                <p className='text-xl sm:text-3xl font-bold'>टाइमिंग की कमी जल्दी डिस्चार्ज </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 my-6'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cc6bdbf6-df0c-4fb1-bafa-26f5f76f6800/public" alt="sdf" loading='lazy' className='w-[70px]' />
                            </div>
                            <div>
                                <p className='text-xl sm:text-3xl font-bold'>जोश, ऊर्जा एवं स्टैमिना की कमी</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 my-6'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ef2bfb1b-eedc-4e43-b23c-5472244f4e00/public" alt="dsfds" loading='lazy' className='w-[70px]' />
                            </div>
                            <div>
                                <p className='text-xl sm:text-3xl font-bold'>कमजोर लिंग/ सख्ती की कमी</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 my-6'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/21f97cf4-7d75-4897-0f30-78d4d867b200/public" alt="das" loading='lazy' className='w-[70px]' />
                            </div>
                            <div>
                                <p className='text-xl sm:text-3xl font-bold'>डिस्चार्ज पश्चात इरेक्शन पाने में नाकाम</p>
                            </div>
                        </div>

                    </div>
                </div>


                <Order />

            </div>


            {/* ------------------------------------------------------------------------------ */}



            {/* ------------------------------------- */}

            <div className='bg-[#f1e3ce]'>
                <div className='relative grid grid-cols-4 items-center sm:min-h-[700px] w-full sm:w-[80%] mx-auto rounded-md overflow-hidden '>

                    <div className='hidden sm:block absolute w-full'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/433e656a-5e93-4c00-dd85-fc8da3138300/public" alt="dsfd" loading='lazy' className='w-full rounded-xl' />
                    </div>

                    <div className='col-span-4 sm:col-span-2 hidden sm:block'></div>
                    <div className='col-span-4 sm:col-span-2 z-10 w-[90%] mx-auto'>

                        <div className='text-center'>
                            <h1 className='bg-[#e7b151] inline-block pt-5 sm:pt-7 pb-2 sm:px-10 text-xl sm:text-4xl text-[#c36112] font-bold my-5 px-4 rounded-md'>सेक्स लाइफ रोमांचक बनाने का फार्मूला</h1>
                            <p className='text-lg sm:text-2xl sm:my-5 font-semibold text-start'>
                                Bull rider capsule एक प्रीमियम आयुर्वेदिक उत्पाद है जो पुरुष सेक्स हॉर्मोन टेस्टोस्टेरोन बढाकर शरीर को ऊर्जावान, फिट और दिन भर एक्टिव रखने में मदद करता है। अगर शीघ्रपतन, कमजोर स्टैमिना या ढीले लिंग से सेक्सुअल लाइफ निराशाजनक हो गई है तो Bull Rider Capsule नियमित लें। यह स्टैमिना बूस्ट करेगा लिंग को मजबूती देगा और टाइमिंग बढ़ाकर आपको नॉनस्टॉप सेक्स करने के काबिल बनाएगा।
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Section1
