import dynamic from 'next/dynamic';
import React from 'react'
import { Image } from 'react-bootstrap';
import Ordernow from './Ordernow';


const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>load</p>
});



const Herbs_list = ([

    {
        name: "अश्वगंधा",
        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/161e3a68-f70a-40b8-1e05-e9bc46eb4e00/public",
        content: "यह एक एनर्जी बूस्टर टॉनिक की तरह काम करता है, मसल ग्रोथ करता है । "
    },
    {
        name: "सफ़ेद मूसली",
        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/41d001cd-cdee-4444-aad9-d5e61d3b9900/public",
        content: "इसमें फ्लेवेनोएड कंपाउड होता है जो इम्यूनिटी को बूस्ट करने में मददगार है।"
    },
]);

const Herbs_list_2 = ([
    {
        name: "शिलाजीत",
        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/298e7a95-f5ab-4cd3-7627-4fa78a4a2700/public",
        content: "जोश, स्टैमिना और ताकत वर्धक है कमजोरी और थकान दूर करता है। "
    },
    {
        name: "केसर",
        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/09a1beb7-c99b-4e4f-71de-15b614815000/public",
        content: " इसमें बहुत सारे मिनरल्स होते है जो जोश, ऊर्जा और इम्यूनिटी बढ़ाते है। "
    },
])



const Active_Life = () => {
    return (
        <section>

            <div className="bg-white">

                <div className="sm:max-w-[70%] mx-auto">


                    <div className="fontNoto flex items-center justify-center gap-3 sm:py-6 px-2">


                        <div className="relative">

                            <div className=" ">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/752b1bd9-cfb1-4f49-e9a8-232372aa4200/public" alt="" fetchPriority='high' />
                            </div>

                            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-black font-extrabold sm:text-[3vw] text-[1.8rem] w-full text-center sm:pt-6 pt-4 ">
                                एक्टिव लाइफ का फार्मूला
                            </div>

                        </div>

                    </div>

                    <p className='fontNoto sm:text-[1.2vw] text-lg text-justify sm:px-16 px-2 sm:text-center py-4 sm:py-8'>
                        Bull rider capsule एक प्रीमियम आयुर्वेदिक उत्पाद है जो शरीर को ऊर्जावान, फिट और दिन भर एक्टिव रखने में मदद करता है। अगर आप ऑफिस के हार्डवर्क से थकान महसूस करते है या सामान्य रूप से शरीर में लो एनर्जी महसूस करते है ऐसे Bull rider capsule की नियमित एक गोली एनर्जी बूस्ट करेगी और आपको दिन भर ताजगी और स्फूर्ति का एहसास दिलाएगी।
                    </p>


                    <Ordernow />

                </div>

                <div className="">


                    <div className="">
                        <div className="">
                            <div className="brc_bg pb-20">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/21499087-6e3c-4550-b9b2-564edb68b000/public" alt="" className='sm:w-2/5 mx-auto py-2 ' />



                            </div>

                            <div className="relative -mt-[15vw]">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c141dcbf-d90f-4251-4931-ce28f1379700/public" alt="pic" loading='lazy' className='w-full md:block hidden' />
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3aa9ddb6-4015-406a-d631-ca9dddac6100/public" alt="pic" loading='lazy' className='w-full md:hidden block ' />

                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                                    <div className='w-[90vw] md:w-[45vw] mx-auto sm:pt-14 '>
                                        <div className="">
                                            <YoutubeFrame vid='pTE4dr5C_Bo?si=Z6FXVUKE4waUdmcU' />
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="brc_herbs_bg -mt-[12vw]">

                                <div className="sm:max-w-[75%] mx-auto md:pt-24 pt-16">
                                    <div className="fontPoppins text-white sm:text-[2.4vw] text-[2rem] py-2 font-semibold text-center leading-tight ">
                                        Key Herbs of <br /><span className='uppercase text-[#d5962d] font-extrabold '> Bull Rider Capsule</span>
                                    </div>


                                    <div className="grid sm:grid-cols-3 items-center justify-center sm:gap-8 md:gap-2 fontNoto sm:py-10">



                                        <div className="">
                                            {Herbs_list.map((e, key) => {
                                                return <div className="  md:my-3 mx-2 rounded-xl py-2 sm:py-3 px-3" key={key}>
                                                    <div className="flex  items-center justify-left gap-3">
                                                        <img src={e.img} alt="" className=' md:w-28 w-20' />
                                                        <div className="md:py-3 py-2">
                                                            <div className="fontPoppins sm:text-[1.8vw] text-[1.5rem] text-[#d5962d] font-semibold  ">
                                                                {e.name}
                                                            </div>
                                                            <p className='sm:text-lg text-sm text-white  text-justify '>
                                                                {e.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                        </div>

                                        <div className="">
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/895a2d3c-fdb2-407b-a3f2-6bfdbaec4300/public" alt="" className='w-full ' />

                                        </div>



                                        <div className="">
                                            {Herbs_list_2.map((e, key) => {
                                                return <div className="  md:my-3 mx-2 rounded-xl py-2 sm:py-3 px-3" key={key}>
                                                    <div className="flex  items-center justify-left gap-3">
                                                        <img src={e.img} alt="" className=' md:w-28 w-20' />
                                                        <div className="md:py-3 py-2">
                                                            <div className="fontPoppins sm:text-[1.8vw] text-[1.5rem] text-[#d5962d] font-semibold  ">
                                                                {e.name}
                                                            </div>
                                                            <p className='sm:text-lg text-sm text-white  text-justify '>
                                                                {e.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>





            </div >
        </section >
    )
}

export default Active_Life