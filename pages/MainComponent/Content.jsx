import React, { useState } from "react";
import Ordernow from "./Ordernow";



const Content = () => {



    const herbsData = [
        {
            name: "Shilajit",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8e98fa5c-0a83-46e6-2d17-12980e38ba00/public",
            content: "Shilajit contains fulvic acid and more than 84 minerals. It offers numerous health benefits. This helps manage fatigue and lethargy and enhances strength & male vitality. It boosts immunity and energizes the body.",
        },
        {
            name: "Ashwagandha",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/92addcce-ceb6-4d6d-ad25-b2533972f700/public",
            content: "Ashwagandha helps in increasing testosterone levels, reducing stress, and making you physically & mentally active and strong.",
        },
        {
            name: "Kaucha ghana",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4da543af-d8a6-48c2-ce9f-f7d8c6f7ac00/public",
            content: "Kaucha contains antioxidants that help in increasing libido power and stimulation. It's also very beneficial for overall health.",
        },
        {
            name: "Shwet Musli",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d2c4c5e3-3c4c-4fbb-59af-a1fc05ac2800/public",
            content: "Safed Musli has multi nutrients that help in increasing the level of the testosterone hormone and immune power. It boosts strength, stamina, and Immunity.",
        },
        {
            name: "Gokshura Ghana",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9502c6fa-ab15-43a8-72a9-8ad63b506d00/public",
            content: "Gokshura is broadly used for the treatment and management of male problems due to its aphrodisiac, libido-stimulant, and androgenic properties. It is the best medicine to increase enthusiasm, stamina, and physical strength.",
        },
        {
            name: "Kesar",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77d6a5d4-517d-4526-a83a-87def1894d00/public",
            content: "Kesar has numerous properties like invigorating and increasing male power. Especially it is rich in carotenoids, which help in fighting against diseases and improve immunity.",
        },
    ];


    const [selectedHerb, setSelectedHerb] = useState(herbsData[1]);


    return (



        <section className='bg-white max-w-8xl mx-auto'>




            <div className="">
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c710036f-4ec9-4a7c-9a4d-9c600945ae00/public" alt="" loading='lazy' className='w-full sm:block hidden' fetchPriority='high' />

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c81317e4-f5c0-4700-91f0-6c270af7fe00/public" alt="" loading='lazy' className='w-full sm:hidden block' fetchPriority='high' />

            </div>








            <div className="pb-4 sm:-mt-[4.5vw] -mt-[12vw] z-20 relative" >
                <div className="max-w-7xl w-full mx-auto fontPoppins ">
                    <div className="grid sm:grid-cols-12 bg-white items-center justify-center gap-4 herbs_card_shaddow sm:m-0 m-3">
                        <div className="sm:col-span-6">
                            <div className="grid grid-cols-2  justify-center items-center bg-[#daaf01]">
                                <img src={selectedHerb.image} alt={selectedHerb.name} className=" w-full  h-full" fetchPriority="high" />
                                <ul className="text-sm  sm:text-[1rem] bg-[#daaf01]">
                                    {herbsData.map((herb, index) => (
                                        <li
                                            key={index}
                                            className={`cursor-pointer sm:py-3 py-1 px-3 ${selectedHerb.name === herb.name ? 'bg-black text-white' : 'text-black'}`}
                                            onClick={() => setSelectedHerb(herb)}
                                        >
                                            {herb.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="sm:col-span-6 ">
                            <div className="flex items-center">
                                <span className="text-7xl font-bold text-black pl-2">13</span>
                                <div className="ml-2">
                                    <span className="block text-2xl font-bold text-yellow-600">AYURVEDIC</span>
                                    <span className="block text-2xl font-bold text-yellow-600">HERBS</span>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold px-2 pt-3 ">{selectedHerb.name}</h1>
                            <div className="py-3 px-2 text-sm">{selectedHerb.content}</div>
                            <a href="#buynow"><button className="mt-2 px-4 py-2 mx-2 mb-3 bg-black text-sm text-white uppercase ">Inquiry Now</button></a>
                        </div>
                    </div>
                </div>
            </div>


            <Ordernow />



        </section>
    )
}

export default Content