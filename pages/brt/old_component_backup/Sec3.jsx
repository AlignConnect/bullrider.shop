import { Anton } from 'next/font/google'
import React from 'react'

const anton = Anton({
    display: "swap",
    weight: ["400"],
    subsets: ["latin"]

})

const Sec3 = () => {
    return (
        <section className='bg-white'>

            <div className='w-full'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a38b8d8b-26dc-4078-c033-f9b61073e700/public" alt="asd" loading='lazy' className='w-full' />
            </div>


            {/* <div className={anton.className}> */}
            <div className=''>

                <h1 className='text-[#b78737] font-bold text-[28px] text-center pt-3'>आज ही Bull Rider Capsule</h1>
                <h2 className='font-semibold sm:text-center  text-2xl px-3'>आज़माएं और एनर्जी लेवल को उच्च स्तर पर ले जाएँ </h2>
            </div>


            <div className="bg-[#fdf2e0]">

                <div className=" top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center  p-4 ">
                    <p className=" text-lg mt-4 leading-10">अगर लाइफ में खुशहाली बढ़ाना चाहते है पार्टनर के चेहरे <strong className='bg-[#e3951d] pt-2 px-2 rounded-md'> पर संतुष्टि भरी मुस्कान देखना </strong> &nbsp;  चाहते है तो <strong className='bg-[#e3951d] pt-2 px-2 rounded-md '>  Bull Rider Capsule </strong> को अपने जीवन में एक बार शामिल करके इसका कमाल देखे !</p>
                </div>
            </div>

            <div className='w-full'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4e96c721-fe79-471e-998b-5c19ce6ae000/public" alt="asd" loading='lazy' className='w-full' />
            </div>


            <div className='bg-[#dfb97c] text-center  pt-3  font-bold text-2xl'>
                <h1>Right Way of Consumption</h1>
            </div>



            {/* <div class="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
             
                <div class="text-center">
                    <h2 class="text-4xl font-bold text-black">13 HERBS</h2>
                </div>

              
                <div class="mt-4 space-y-4">
                    <div class="flex items-start">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mt-1"></span>
                        <p class="ml-3 text-lg text-gray-700">सुबह और राति भोजन के बाद एक कैप्सूल दूध/पानी के साथ</p>
                    </div>
                    <div class="flex items-start">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mt-1"></span>
                        <p class="ml-3 text-lg text-gray-700">बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें</p>
                    </div>
                    <div class="flex items-start">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mt-1"></span>
                        <p class="ml-3 text-lg text-gray-700">एक महीने के अंदर प्रदर्शन में सुधार अनुभव कर सकते है</p>
                    </div>
                </div>

                <div class="mt-6 text-center">
                    <img src="path-to-your-image.png" alt="Bull Rider Capsule" class="w-48 mx-auto" />
                </div>

                <div class="mt-6 text-center">
                    <p class="text-4xl font-bold text-yellow-600">37% off</p>
                </div>
            </div> */}



            <div className='grid grid-cols-4 px-2 py-5 gap-3'>

                <div className='col-span-4 sm:col-span-2 flex justify-center'>

                    <div className='text-center font-black text-4xl relative'>

                        <div className='flex sm:block gap-2 justify-center'>
                            <h1>13</h1>

                            <h1>HERBS</h1>
                        </div>

                        <div className='sm:absolute top-28  sm:w-[400px] -left-32'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b7413a96-0877-4d20-e52d-286783ef4700/public" alt="asd" loading='lazy' className='w-[250px] mx-auto' />
                        </div>

                    </div>

                </div>

                <div className='col-span-4 sm:col-span-2 py-3'>
                    <div className='flex items-center gap-3 py-4'>
                        <div className=''>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f9ec6dea-4ab6-44e6-62b9-1c37c1051700/public" alt="sdfdf" loading='lazy' className='w-[80px] rounded-full' />
                        </div>
                        <div className=''>
                            <p className='text-[17px]'>सुबह और रात्रि भोजन के बाद एक कैप्सूल दूध/पानी के साथ </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 py-4'>
                        <div className=''>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e3296fb3-cfa8-46f9-a5fa-4c9120e45d00/public" alt="sdfdf" loading='lazy' className='w-[80px] rounded-full' />
                        </div>
                        <div className=''>
                            <p className='text-[17px]'> बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 py-4'>
                        <div className=''>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f8dc7b3b-db20-480e-017e-daae77b62b00/public" alt="sdfdf" loading='lazy' className='w-[80px] rounded-full' />
                        </div>
                        <div className=''>
                            <p className='text-[17px]'>एक महीने के अंदर प्रदर्शन में सुधार अनुभव कर सकते है </p>
                        </div>
                    </div>

                </div>

            </div>


            <div className='hidden sm:block text-end bg-[#dfb97b] pt-4 text-5xl font-black px-5'>
                37% OFF
            </div>

        </section>)
}

export default Sec3