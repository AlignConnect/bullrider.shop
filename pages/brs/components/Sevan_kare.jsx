import React from 'react'
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbMoneybag, TbTruckDelivery } from "react-icons/tb";
import { CiPercent } from 'react-icons/ci';
import Ordernow from './Ordernow';


const Sevan_kare = () => {

    const sevan_kare = (arr) => {
        return arr?.map((e, key) => {
            return <div className='fontNoto  border-2 border-solid border-[#d5962d] rounded-lg md:mx-10 m-2' key={key}>
                <img src={e.sevan_img} className='sm:w-full w-full  mx-auto' alt='imgs' />
                <div className="bg-[#faf0d8] rounded-lg px-2 md:p-10 p-5">
                    <div className="font-extrabold sm:text-[2vw] text-[2rem] text-[#d19326] ">{e.sevan_title}</div>
                    <div className=" font-semibold md:text-[1.1vw] text-md text-justify">
                        <div
                            dangerouslySetInnerHTML={{ __html: e.sevan_content }}
                        >
                        </div>
                    </div >

                </div>
            </div >

        })
    }

    const delivery_options = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center md:justify-center gap-2 md:py-3 py-1 ' key={key}>
                <div className="">{e.icons}</div>
                <div className="fontPoppins">
                    <div className='md:text-xl text-md font-semibold uppercase '>
                        {e.title}
                    </div>
                    <div className='text-sm fontPoppins'>{e.content}</div>
                </div>
            </div >
        })
    }
    return (

        <section>

            <div className="bg-white">

                <div className="sm:max-w-[70%] mx-auto fontNoto md:py-3 py-2">

                    <div>
                        <div className=" text-black font-extrabold sm:text-[3vw] text-[2rem] w-full text-center md:py-3">
                            सेवन करने का सही तरीका
                        </div>

                        <div className="grid md:grid-cols-2 items-center gap-2">
                            {
                                sevan_kare([
                                    {
                                        sevan_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/de738c79-56ff-489e-325d-1d4ad553f000/public",
                                        sevan_title: "एनर्जी बढ़ाने के लिए:",
                                        sevan_content: "&#x2022; 1 कैप्सूल सुबह शाम भोजन के बाद<br/>&#x2022; 1 गिलास गुनगुने दूध या पानी के साथ <br/>&#x2022; बेहतर परिणाम के लिए दूध के साथ अनुमोदित"
                                    },
                                    {
                                        sevan_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1c53880f-9083-4601-8419-72c4cd9ae000/public",
                                        sevan_title: "मसल ग्रोथ के लिए:",
                                        sevan_content: "&#x2022; 1 कैप्सूल जिम वर्कआउट के 15-30 मिनट बाद <br/>&#x2022; 1 पहले की तरह भोजन पश्चात 1 गिलास गुनगुने दूध के साथ लें।<br/> &#x2022; कुछ ही दिनों में स्टैमिना और मसल ग्रोथ में बृद्धि अनुभव करें।"
                                    }
                                ])
                            }
                        </div>

                    </div>

                    <Ordernow />


                </div>

                <div className="bg-[#e5a939]">
                    <div className="sm:max-w-[90%] mx-auto">


                        <div className="grid md:grid-cols-3 items-center gap-2 py-4 px-2">
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
                                    // {
                                    //     icons: <TbMoneybag size={50} />,
                                    //     title: "Money Back Guarantee",
                                    //     content: "10 days money back guarantee"
                                    // },
                                    {
                                        icons: <CiPercent size={50} />,
                                        title: "Prepaid Offer",
                                        content: "Save extra 10% on prepaid orders"
                                    },
                                ])
                            }
                        </div>
                    </div>

                    <div className="sm:hidden block">

                        <Ordernow />
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Sevan_kare