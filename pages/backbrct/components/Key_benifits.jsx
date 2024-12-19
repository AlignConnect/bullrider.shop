import React from 'react'
import Ordernow from './Ordernow'

const Key_benifits = () => {

    const why_trust = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center justify-start  gap-3 sm:py-4 py-2 px-3' key={key}>
                <div className="">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d7f3adfb-1b2c-4e65-683d-db03de8d2300/public" className=" md:w-10 w-6" alt="icons" />
                </div>
                <div className='uppercase text-black fontNoto font-extrabold sm:text-[1.3vw] text-xl text-left'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }

    return (
        <section>
            <div className="bg-[#fffaee]">

                <div className="sm:max-w-[70%] mx-auto pt-3">

                    <Ordernow />

                    <p className='fontNoto sm:text-[1.2vw] text-lg text-justify sm:px-16 px-2 sm:text-center py-3  sm:py-3'>
                        अश्वगंधा, शिलाजीत, केसर, सफ़ेद मूसली और गोक्षुरा जैसे 13 शक्तिशाली और ऊर्जावर्धक जड़ीबूटियों से बना Bull rider capsule एक आयुर्वेदिक रिवाइटल है जो शरीर में एनर्जी को रिस्टोर करने का काम करता है। यह जिम करने वाले युवाओं के लिए भी उपयोगी है क्योंकि इसके इंग्रेडिएंट्स मसल रिकवरी और मसल ग्रोथ में मदद करते है।
                    </p>



                    <div className="grid sm:grid-cols-12 items-center justify-center ">

                        <div className=" sm:col-span-6">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2f7126b2-94f6-44d3-b8fe-951d0a7ec100/public" alt="" className='sm:w-5/6 mx-auto px-2' />
                        </div>


                        <div className="sm:col-span-6">

                            <div className="">



                                <div className="fontPoppins uppercase sm:text-[2.2vw] text-[1.8rem] py-2 font-semibold sm:text-left text-center leading-tight  bg-white sm:bg-inherit">
                                    Key Benefits of <br /><span className='uppercase text-[#d5962d] font-extrabold '> Bull Rider Capsule</span>
                                </div>

                            </div>


                            <div className="py-2">
                                {
                                    why_trust([
                                        {
                                            title: "रोग प्रतिरोधक (immunity) बढ़ाये"
                                        },
                                        {
                                            title: "जोश और एनर्जी लेवल बढाए"
                                        },
                                        {
                                            title: "मसल रिकवरी और ग्रोथ करे "
                                        },
                                        {
                                            title: "पुरे दिन एक्टिव और जोशीला रखे"
                                        },
                                    ])
                                }
                                {/* <Ordernow /> */}

                            </div>

                        </div>



                    </div>

                </div>

            </div>

        </section>
    )
}

export default Key_benifits