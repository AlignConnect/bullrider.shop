import React from 'react'
import Accordion from './Accordion';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbMoneybag, TbTruckDelivery } from 'react-icons/tb';
import { CiDiscount1, CiPercent } from 'react-icons/ci';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSection from '../MainComponent/ReviewSection'
import Ordernow from './Ordernow';


const third_content = () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [

            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            }
        ]
    };

    const items_faqs = [
        {
            title: 'How many Capsules are in Bull Rider?',
            content: `Bull Rider is a pack of 60 capsules for 30 days course. Each Capsule prepared by premium quality herbs.`,
        },
        {
            title: 'What is the benefits of Bull rider Capsule?',
            content: `Bull rider a Premium ayurvedic formula which helps to increase strength, stamina and vitality. Herbs contained in it known to improve physical.`,
        },
        {
            title: 'How to use Bull rider capsule?',
            content: `Take it twice a day with lukewarm milk or water after meal. Our experts recommend taking it with milk for better results.`,
        },
        {
            title: 'Can women consume it?',
            content: `No, Women should not use it. It is formulated on the basis of male hormonal system. We formulated Kamini Capsule for female wellness.`,
        },
        {
            title: 'Does it have any side effects?',
            content: `No, it is a pure Ayurvedic product made from premium quality natural ingredients. It contains no harmful substances. Bull rider Capsule is not known to have any side effects when used in the recommended dosage.`,
        },
        {
            title: 'Can I take this after consuming alcohol?',
            content: `For better and most sustainable results, we recommended to avoid drinking alcohol during Bull rider capsule’s course.`,
        },
    ];

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
        <section className='bg-white max-w-8xl mx-auto !fontPoppins '>

            <div className="fontPoppins flex items-center justify-center gap-3 py-4 px-2">


                <div className=" relative">

                    <div className=" ">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80d0fbc3-8c40-47bf-0953-38b03dec6b00/public" alt="" />
                    </div>

                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 fontPoppins text-white font-extrabold sm:text-3xl text-2xl w-full text-center ">
                        FAQS
                    </div>

                </div>

            </div>


            <div className="max-w-5xl mx-auto mb-3" id='faqs'>

                <div className="pt-5">
                    <Accordion items={items_faqs} />
                </div>
                <Ordernow />

            </div>

            <div className="">
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6f91c1e1-1959-4b41-5124-d4630b588400/public" alt="" className='w-full sm:block hidden' fetchPriority='high' />
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ac85be57-cc94-4e93-1dcf-af87a03dbc00/public" alt="" className='w-full sm:hidden block' fetchPriority='high' />
            </div>


            <div className="fontPoppins flex items-center justify-center gap-3 py-5 px-2">


                <div className=" relative">

                    <div className=" ">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80d0fbc3-8c40-47bf-0953-38b03dec6b00/public" alt="" fetchPriority='high' />
                    </div>

                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 fontPoppins text-white font-extrabold sm:text-3xl text-xl w-full text-center uppercase">
                        What Our Customer's Say
                    </div>

                </div>



            </div>


            <div className="max-w-full mx-auto">

                <ReviewSection />
                <Ordernow />
            </div>



            <div className="fontPoppins flex items-center justify-center gap-3 py-4 px-2">


                <div className=" relative">

                    <div className=" ">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80d0fbc3-8c40-47bf-0953-38b03dec6b00/public" alt="" fetchPriority='high' />
                    </div>

                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 fontPoppins text-white font-extrabold sm:text-3xl text-xl w-full text-center ">
                        WHAT THEY'VE SAID ABOUT US
                    </div>

                </div>

            </div>

            <div className="max-w-5xl mx-auto">

                <div className="px-5 py-2">
                    <Slider {...settings}>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/675ef19a-f26c-4e3b-06c4-83478f075900/public" alt="" className='w-full' fetchPriority='high' />
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ef563baa-63c7-44ca-7c6b-9a250e3b1500/public" alt="" className='w-full' fetchPriority='high' />
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/db26ceaf-52ea-4aca-09b2-362ca6b9c100/public" alt="" className='w-full' fetchPriority='high' />
                    </Slider>
                </div>

                <Ordernow />


            </div>





            <div className="max-w-7xl mx-auto py-7 ">

                <div className="bg-white text-black shdw mx-3  rounded-md my-2">
                    <div className="grid md:grid-cols-4 items-center gap-2 py-4 px-2">
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

        </section>
    )
}

export default third_content