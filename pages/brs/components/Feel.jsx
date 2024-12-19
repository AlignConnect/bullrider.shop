import React from 'react'
import Ordernow from './Ordernow'

const Feel = () => {

    const Feeling = (arr) => {
        return arr?.map((e, key) => {
            return <div className='grid grid-cols-12 justify-center  items-center mx-3 gap-3 border border-dashed border-gray-500 rounded-lg my-2 px-2' key={key}>
                <div className="sm:col-span-4 col-span-4 sm:my-3 my-2">
                    <img src={e.img} className="sm:w-2/5 ms-auto" alt="" />
                </div>

                <div className='sm:col-span-8 col-span-8 fontNoto flex items-center sm:gap-3 gap-1 md:text-[1.3vw] text-[1.2rem] font-bold '>
                    <div className="fontPoppins sm:text-[2vw] text-[2rem] ">
                        {key + 1}.
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>

            </div >
        })
    }

    return (
        <section>

            <div className="bg-white">

                <div className="sm:max-w-[70%] mx-auto">
                    <div className="fontNoto grid sm:grid-cols-2 items-center justify-center sm:py-8 py-5">

                        <div className=" ">
                            <div className="font-extrabold sm:text-[3.4vw] text-[1.8rem] leading-tight sm:text-left text-center px-2 py-2 sm:py-5">
                                क्या आप भी ये महसूस करते है?
                            </div>
                            <p className='sm:text-[1.1vw] text-lg text-justify sm:text-left px-2'>
                                आजकल की व्यस्त जीवनशैली में कई लोग जोश, ऊर्जा और स्टैमिना की कमी का अनुभव करते हैं। दिन भर थका हुआ महसूस करना, कमजोरी और आलस जैसी समस्याएं आम हो गई हैं। ये समस्याएं न केवल व्यक्तिगत जीवन बल्कि कार्यक्षमता को भी प्रभावित करती हैं।
                            </p>

                            <Ordernow />

                        </div>


                        <div className="">
                            {
                                Feeling([
                                    {
                                        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/90e6f337-bb82-4b40-ab2b-cd6d5572ec00/public",
                                        title: "जोश और ऊर्जा की कमी "
                                    },
                                    {
                                        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0d4e3aea-21f3-4948-84d2-512a23b58c00/public",
                                        title: "लो स्टैमिना एवं इम्युनिटी "
                                    },
                                    {
                                        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/166880ad-05dd-4703-c0da-89c1baed0700/public",
                                        title: "दिन भर थका हुआ लगना"
                                    },
                                    {
                                        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7bffb537-6fc7-4f16-8b33-e8e1de839500/public",
                                        title: "कमजोरी और आलस"
                                    },
                                ])
                            }
                        </div>

                    </div>
                </div>

            </div>

        </section>

    )
}

export default Feel