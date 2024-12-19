import React from 'react'
import { CiPercent } from 'react-icons/ci';
import { FaHandPointRight, FaPercentage } from "react-icons/fa";
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbMoneybag, TbTruckDelivery } from "react-icons/tb";
import VideoPlayer from '../../MainComponent/VideoPlayer';
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
        <section className='text-black fontPoppins  bg-[#F8F4E1] '>


            <div className="px-3">
                <p className="py-1 text-justify">
                    <span className="fontPoppins text-red-500">Bull Rider Capsule </span>एक श्रेष्ठ शक्ति वर्धक उत्पाद है जिसे आयुर्वेद की प्रीमियम क्वालिटी और शक्तिशाली जड़ीबूटियों के अनोखे मिश्रण से बनाया गया है। इसमें शिलाजीत, अश्वगंधा और गोक्षुरा जैसे श्रेष्ठ टेस्टोस्टेरोन बूस्टर हर्ब्स समाहित है।
                </p>


                <p className="py-1 text-justify">
                    13 बेशकीमती जड़ीबूटियों से बना <span className="fontPoppins text-red-500">Bull Rider Capsule </span> कमजोरी मिटाकर, स्टैमिना, जोश और उत्तेजना बढ़ाने में मदद करता है।
                </p>





                <div className="bg-white rounded-md my-4 shdw">

                    <div className="md:grid grid-cols-2 items-center justify-center gap-4 py-3">

                        <div>
                            <div className="grid justify-center">
                                <div className="fontNoto text-black font-extrabold text-2xl md:text-3xl pt-5 px-2">
                                    <span className='fontPoppins text-red-600 md:text-3xl text-2xl'>Bull Rider </span>से होने वाले फायदे
                                </div>

                                <div className="px-3 my-2 ">
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

                        </div>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/61b7bb8e-d0e1-46b1-ff0d-552f74fd9c00/public" alt="" className='w-full py-3 mx-auto' />
                        </div>

                    </div>

                </div>

                <OrderBtn />



                <div className="fontPoppins font-semibold text-center text-xl">
                    As seen in:-
                </div>

                <div className="grid md:grid-cols-4 grid-cols-2 items-center md:gap-4 gap-2 mx-5">
                    <div className="border border-solid border-black my-3">
                        <a href="https://www.aninews.in/news/business/business/healthy-foods-for-erectile-dysfunction-and-diet-guide20221014122830/">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fb6856e9-15fc-422b-cc2c-11416e4ea900/public" alt="" className='md:w-1/2 w-44 mx-auto' />
                        </a>
                    </div>
                    <div className="border border-solid border-black my-3">
                        <a href="https://www.mid-day.com/brand-media/article/why-hammer-of-thor-ayurvedic-medicine-demand-increases-23255059">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3a7b695e-1757-4926-8dee-bc7db1052000/public" alt="" className='md:w-1/2 w-44 mx-auto' />
                        </a>
                    </div>
                    <div className="border border-solid border-black my-3">
                        <a href="https://up18news.com/exercises-to-increase-your-stamina-in-bed-why-people-use-hammer-of-thor/">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2c1190d1-4193-40b1-d17f-84a4b4269600/public" alt="" className='md:w-1/2 w-44 mx-auto' />
                        </a>
                    </div>
                    <div className="border border-solid border-black my-3">
                        <a href="https://news.webindia123.com/news/articles/Business/20221014/3993082.html">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/da3dc6a9-96c4-490c-97ac-7566f3d1b200/public" alt="" className='md:w-1/2 w-44 mx-auto' />
                        </a>
                    </div>
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







            <div className="px-2">

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

                <OrderBtn />


                <div className="text-center py-2 font-semibold">
                    Why more than 100000+ satisfied customer's just ❤️ the bull rider capsule
                </div>


                <div className="grid md:grid-cols-2 items-center md:gap-4 gap-2 pb-7 pt-3 mx-2 md:mx-6">

                    <div className="border-dotted border  border-black py-2">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/50a6e5dd-3128-4a5a-c260-ce6a44302100/public" alt="" className='md:w-5/6 w-full mx-auto' />
                    </div>

                    <div className="border-dotted border  border-black py-2">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7f002675-76e7-44cd-fbc1-a841349d2b00/public" alt="" className='md:w-5/6 w-full mx-auto' />
                    </div>

                    <div className="border-dotted border  border-black py-2">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f05bc1a5-f919-40f8-1e48-f669ea98b900/public" alt="" className='md:w-5/6 w-full mx-auto' />
                    </div>

                    <div className="border-dotted border  border-black py-2">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f556889c-c84f-4026-e445-6efc1a0ca400/public" alt="" className='md:w-5/6 w-full mx-auto' />
                    </div>
                </div>

            </div>


            <div className="pb-5">
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1503d66b-2184-4abf-d016-49b1ee33a600/public" alt="" className='w-full' />
            </div>


            <OrderBtn />


            <div className="pb-5 pt-5">
                <div className="bg-black text-gray-400 py-4  rounded-lg">

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c171c513-144b-4bf9-9962-a66149592100/public" alt="" className='md:w-36 w-1/2 mx-auto my-2' />

                    <div className="text-center md:text-[1.1rem] text-[0.7rem] fontPoppins px-2">
                        Niraj Patel, Rohan Yadav and <span className='text-white'>1022 others </span>
                        already Reviewed bull rider capsule, read their stores
                    </div>

                </div>
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



        </section>
    )
}

export default second_content