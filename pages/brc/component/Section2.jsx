import YoutubeFrame from '@/pages/components/YoutubeFrame'
import dynamic from 'next/dynamic'
import React from 'react'


const Order = dynamic(() => import('./Ordernow'));

const Section2 = () => {


    // const arr = [1, 2, 4, 6, 3, 7, 8];
    // // const arr = [1, 2, 3, 4, 5, 7];
    // let n = 8;





    // function checker() {

    //     const y = new Array(n);
    //     // let y = arr.sort()
    //     // for (let i = 0; i < y.length; i++) {
    //     //     if ((i + 1) !== arr[i]) {
    //     //         return i + 1
    //     //     }
    //     // }
    //     let v = [];
    //     for (let x = 0; x < y.length; x++) {
    //     }
    //     return v
    // }
    // console.log(checker())




    return (
        <div>


            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8306cf47-b4de-4e50-a82e-fc5f3b6a4a00/public)] bg-no-repeat bg-cover'>

                <div>
                    <div className="sm:w-[900px] px-5 py-20 mx-auto">
                        {/* <YoutubeFrame vid='pTE4dr5C_Bo?si=Z6FXVUKE4waUdmcU' /> */}
                        <iframe
                            className='md:h-[510px]  w-full h-[190px] !mx-auto rounded-md'
                            src={`https://www.youtube.com/embed/pTE4dr5C_Bo?si=Z6FXVUKE4waUdmcU`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                            allowFullScreen
                        ></iframe>

                    </div>
                </div>

            </div>



            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5316fbce-e0eb-4c04-4f36-11ad716bd700/public)] bg-no-repeat bg-cover text-center pt-8'>

                <h1 className='font-bold text-4xl sm:text-5xl sm:pt-10'>Key Herbs of</h1>

                <h1 className='font-bold text-3xl sm:text-5xl'>Bull Rider Capsule</h1>


                <div className='grid grid-cols-6 mx-auto w-full items-center'>
                    <div className='col-span-6 sm:col-span-2 sm:text-end order-2 sm:order-1 gap-3 my-5 flex sm:block justify-center items-center w-full px-2'>

                        <div className=' border sm:border-0 border-dashed p-3 border-black w-full'>
                            <h1 className='text-[#c66e2d] text-3xl sm:text-5xl font-bold border-b border-black sm:border-0'>अश्वगंधा</h1>
                            <p className='text-xl sm:text-3xl py-3'>
                                स्ट्रेस कम करे और <br /> स्टैमिना बढाए
                            </p>
                        </div>


                        <div className=' border sm:border-0 border-dashed p-3 border-black w-full'>
                            <h1 className='text-[#c66e2d] text-3xl sm:text-5xl font-bold border-b border-black sm:border-0'>सफ़ेद मूसली</h1>
                            <p className='text-xl sm:text-3xl py-3'>
                                एनर्जी और सेक्स <br /> टाइमिंग बढ़ाए
                            </p>
                        </div>

                    </div>


                    <div className='col-span-6 sm:col-span-2 pt-10 sm:pt-20  order-1 sm:order-2 '>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/300ac476-3e03-4975-74a5-f20bfdd2d400/public" alt="asd" loading='lazy' />
                    </div>



                    <div className='col-span-6 sm:col-span-2 sm:text-start order-3 gap-3 mb-5 flex sm:block justify-center items-center px-2'>

                        <div className=' border sm:border-0 border-dashed p-3 border-black'>
                            <h1 className='text-[#c66e2d] text-3xl sm:text-5xl font-bold border-b border-black sm:border-0'>शिलाजीत</h1>
                            <p className='text-xl sm:text-3xl py-3'>
                                टेस्टोस्टेरोन व लिंग की
                                <span className='sm:block inline'> सख्ती बढ़ाए</span>
                            </p>
                        </div>


                        <div className=' border sm:border-0 border-dashed p-3 border-black'>
                            <h1 className='text-[#c66e2d] text-3xl sm:text-5xl font-bold border-b border-black sm:border-0'>गोक्षुरा</h1>
                            <p className='text-xl sm:text-3xl py-3'>
                                लिंग की नसों मसल्स
                                <span className='sm:block inline'> को रिलैक्स करे</span>
                            </p>
                        </div>



                    </div>
                </div>

                <div className='py-5'>
                    <Order />

                </div>
            </div>



            {/* ----------------------------------------------------------------- */}



            {/* ---------------------------------- */}


            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/83fe8717-16b0-460d-0f7f-af5b5d334a00/public)] bg-no-repeat bg-cover'>

                <h3 className='text-white sm:text-center px-2 text-start sm:w-[70%] mx-auto py-10 text-xl sm:text-2xl'>
                    अश्वगंधा, शिलाजीत, केसर, सफ़ेद मूसली और गोक्षुरा जैसे 13 शक्तिशाली और ऊर्जावर्धक जड़ीबूटियों से बना Bull Rider Capsule एक प्रीमियम क्वालिटी आयुर्वेदिक सेक्सवर्धक है। यह नैचुरल तरीके से खोई हुई मर्दाना शक्ति को रिस्टोर करने का काम करता है। साथ ही इसमें शामिल पावरफुल हर्ब्स शरीर को एक्टिव रखते है और जिससे दैनिक जीवनशैली में भी सुधार होता है।
                </h3>


                <div className='grid grid-cols-4 items-center sm:w-[70%] mx-auto'>

                    <div className='col-span-4 sm:col-span-2'>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b615040b-0b26-4cd8-849a-f47beafd6500/public" alt="dsf" loading='lazy' className='w-[70%] mx-auto' />

                    </div>


                    <div className='col-span-4 sm:col-span-2 text-center sm:text-start'>

                        <h3 className='text-3xl sm:text-4xl font-bold text-white py-2'>Key Benefits of</h3>
                        <h3 className='text-3xl sm:text-4xl font-bold  sm:py-2 text-[#d09727]'>Bull Rider Capsule</h3>


                        <div>

                            <div className='flex items-center gap-3 my-5 px-3'>

                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9376c896-9d3e-48e5-854e-384c134fe000/public" alt="sdsdf" loading='lazy' className='w-[70px]' />
                                </div>

                                <div className='text-xl sm:text-3xl text-white font-semibold'>
                                    सेक्स टाइमिंग में जोरदार बृद्धि
                                </div>

                            </div>


                            <div className='flex items-center gap-3 my-5 px-3'>

                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d59e0f6e-8a64-4ec6-4a85-81aa13902d00/public" alt="sdsdf" loading='lazy' className='w-[70px]' />
                                </div>

                                <div className='text-xl sm:text-3xl text-white font-semibold'>
                                    जोश और एनर्जी लेवल बढाए
                                </div>

                            </div>


                            <div className='flex items-center gap-3 my-5 px-3'>

                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a89e78f8-166c-4854-d91c-0d1b77e47800/public" alt="sdsdf" loading='lazy' className='w-[70px]' />
                                </div>

                                <div className='text-xl sm:text-3xl text-white font-semibold'>
                                    लिंग कमजोरी मिटाए/आकार सुधारे

                                </div>

                            </div>


                            <div className='flex items-center gap-3 my-5 px-3'>

                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8561b43a-7b98-424e-afe4-3e7af2b7b200/public" alt="sdsdf" loading='lazy' className='w-[70px]' />
                                </div>

                                <div className='text-xl sm:text-3xl text-white font-semibold'>
                                    डिस्चार्ज पश्चात तुरंत कड़कपन पाएं
                                </div>

                            </div>


                        </div>


                    </div>






                </div>


            </div>





        </div>
    )
}

export default Section2
