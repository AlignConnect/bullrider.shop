import React from 'react'
import { FaHandPointRight } from 'react-icons/fa6'
import VideoPlayer from '../../MainComponent/VideoPlayer';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbMoneybag, TbTruckDelivery } from "react-icons/tb";
import { CiPercent } from 'react-icons/ci';

import OrderBtn from '../../commonUse/OrderBtn/OrderBtn';

const second_content = () => {


    const work_benifits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-2' key={key}>
                <FaHandPointRight size={20} color='black' />
                <div className='fontNoto md:text-2xl text-xl  text-black py-1 '>{e.work_benifits_content}</div>
            </div >

        })
    }

    const delivery_options = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center md:justify-center gap-2 py-2 ' key={key}>
                <div className="">{e.icons}</div>
                <div className="fontPoppins">
                    <div className='md:text-md text-md font-semibold uppercase '>
                        {e.title}
                    </div>
                    <div className='text-sm fontPoppins'>{e.content}</div>
                </div>
            </div >
        })
    }


    return (
        <section className='bg-[#EEF4ED] fontNoto '>


            <OrderBtn />

            <p className='py-4 text-justify indent-10 px-2'>
                <span className='text-2xl text-red-500 font-extrabold'>दोस्तों,</span> <span className='font-semibold fontPoppins'>Bull Rider Capsule</span> एक श्रेष्ठ शक्ति वर्धक उत्पाद है जिसे आयुर्वेद की प्रीमियम क्वालिटी और शक्तिशाली जड़ीबूटियों के अनोखे मिश्रण से बनाया गया है। इसमें शिलाजीत, अश्वगंधा और गोक्षुरा जैसे श्रेष्ठ टेस्टोस्टेरोन बूस्टर हर्ब्स समाहित है।
            </p>

            <p className='py-4 text-justify px-2'>
                13 बेशकीमती जड़ीबूटियों से बना <span className='font-semibold fontPoppins'>Bull Rider Capsule</span> कमजोरी मिटाकर, स्टैमिना, जोश और उत्तेजना बढ़ाने में मदद करता है।
            </p>




            <div className="bg-white rounded-md py-4 mx-2 shdw">


                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/97d0691b-90d1-40f5-e515-caa71d254b00/public" alt="" className='w-full py-3 pl-3' />


                <h2 className="text-black text-center mt-2 font-extrabold text-3xl md:text-4xl">की क्यों है जरूरत?</h2>

                <div className="px-3 py-2 ">
                    {
                        work_benifits([
                            {
                                work_benifits_content: "टेस्टोस्टेरोन हॉर्मोन बढाए"
                            },
                            {
                                work_benifits_content: "अंग-अंग में रक्त संचार बेहतर करे"
                            },
                            {
                                work_benifits_content: "एनर्जी, स्टैमिना और जोश में बृद्धि करे"
                            },
                            {
                                work_benifits_content: "जोश, शक्ति और स्टैमिना मे अद्भुत वृद्धि"
                            }
                        ])
                    }
                </div>
            </div>



            <div className="hidden sm:block py-2">
                <VideoPlayer
                    videoId="RS7WUn-iJPk"
                    thumbnail="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/32d117d5-5cd9-4e8e-8c50-3beb9f228900/public"
                />
            </div>

            <div className="sm:hidden block py-2">
                <VideoPlayer
                    videoId="RS7WUn-iJPk"
                    thumbnail="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f006656b-57f8-4adc-6e14-7d35d57bc400/public"
                />
            </div>

            <OrderBtn />


            <div className="px-3">

                <div className="bg-white text-black shdw  rounded-md my-4">
                    <div className="grid md:grid-cols-2 items-center gap-2 py-4 px-2">
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
                                {
                                    icons: <TbMoneybag size={50} />,
                                    title: "Money Back Guarantee",
                                    content: "10 days money back guarantee"
                                },
                                {
                                    icons: <CiPercent size={50} />,
                                    title: "Prepaid Offer",
                                    content: "Save extra 10% on prepaid orders"
                                },
                            ])
                        }
                    </div>
                </div>
            </div>



            <div className="py-5">
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1503d66b-2184-4abf-d016-49b1ee33a600/public" alt="" className='w-full' />
            </div>

            <OrderBtn />


            <p className='py-4 text-justify px-2'>
                <span className='font-semibold fontPoppins'>Bull Rider Capsule</span>  एक प्रीमियम क्वालिटी उत्पाद है। यह अन्य उत्पादों से ज्यादा प्रभावशाली और भरोसेमंद है। यह समस्या को जड़ से मिटाने पर काम करता है। <span className='font-semibold fontPoppins'>Bull Rider Capsule</span> सभी लैब रिसर्चो में सफल रहा है और पाया गया की इसके सभी तत्व कमजोरी मिटाकर  स्टैमिना, जोश और उत्तेजना बढ़ाने में उपयोगी है।
            </p>


            <div className="py-5">
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4d019ab3-edfb-471b-aad6-3e09ff814b00/public" alt="" className='w-full' />
            </div>


            <div className="px-3 py-4 ">
                {
                    work_benifits([
                        {
                            work_benifits_content: "यह 100% सुरक्षित और आयुष मंत्रालय भारत सरकार से प्रमाणित है।"
                        },
                        {
                            work_benifits_content: "आप इसको COD पेमेंट सुविधा के साथ आर्डर कर सकते है।"
                        },
                        {
                            work_benifits_content: "दस दिनों की मनी बैक गारंटी सुविधा उपलब्ध है।"
                        },
                        {
                            work_benifits_content: "समस्या ज्यादा गंभीर होने पर कस्टम प्रोडक्ट तैयार किया जाता है।"
                        },
                        {
                            work_benifits_content: "भारत का भरोसेमंद उत्पाद जिसका खुद का ऑफिसियल वेबसाइट है।"
                        }
                    ])
                }
            </div>



            <div className='bg-black'>
                <div className='w-full max-w-7xl mx-auto'>
                    <div className="pt-2 pb-1 flex " >
                        <div className='fontNoto flex gap-1 items-center font-semibold text-md md:text-xl px-2 text-yellow-300'>
                            सूचना:
                        </div>
                        <marquee className='fontNoto text-md md:text-xl text-white' direction="left">बुलराइडर कैप्सूल की बढती लोकप्रियता को देखते हुए आजकल मार्केट में नकली प्रोडक्ट आ गए है तो ध्यानपूर्वक <span className="fontPoppins text-red-600 font-semibold">AR Ayurveda</span> ब्रांड देखकर ही आर्डर करें!</marquee >
                    </div>
                </div>
            </div>



        </section >
    )
}

export default second_content