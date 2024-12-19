import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer';
import Ordernow from './Ordernow';


const middle_content = () => {


    const why_bull_rider = (arr) => {
        return arr?.map((e, key) => {
            return <div className="sm:py-5 py-2" key={key}>
                <div className="">
                    <img src={e.why_bull_rider_img} alt="" className="w-full h-full" fetchPriority='high' />
                </div>
                <div className="fontJosefin text-black font-semibold text-center text-md sm:text-[1.3rem] pt-2 leading-tight ">
                    {e.text_conent}
                </div>
            </div>
        })
    }


    const [startOffset, setStartOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            setStartOffset(scrollPercent * 70);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section className='bg-white max-w-8xl mx-auto !fontPoppins'>
            <div>
                <div className='sm:pt-7 pt-3 pb-4'>


                    <div className="max-w-6xl mx-2 sm:mx-auto sm:py-7 py-5 border border-dotted border-black ">
                        <div className="grid sm:grid-cols-4 grid-cols-2 items-center justify-center gap-3">

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0f93c5ca-7f6c-4bc7-6b62-633bf39c1f00/public" alt="" className="w-1/2 mx-auto" fetchPriority='high' />
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cb9f2c49-ce91-4b5b-320c-9c27c73a8200/public" alt="" className="w-1/2 mx-auto" fetchPriority='high' />
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/73dd26c9-2fc3-4fb6-1839-cdd92bd74f00/public" alt="" className="w-8 mx-auto" fetchPriority='high' />
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/32e99f49-047a-4274-fcbe-1d33a01a7500/public" alt="" className="w-1/2 mx-auto" fetchPriority='high' />


                        </div>
                    </div>



                </div>


                <div className="hidden sm:block">
                    <svg width="100%" viewBox="-50 -8 1098.72 99.55" className="py-10">
                        <path
                            id="curve"
                            fill="transparent"
                            d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"
                        />
                        <text width="100%" style={{ transform: "translate3d(0,0,0)" }}>
                            <textPath
                                className="curvingText sm:text-2xl text-[1.5rem]"
                                id="text-path"
                                href="#curve"
                                startOffset={`${startOffset}`}
                                style={{ transform: 'translate3d(0,0,0)', fill: '#dbae00', fontWeight: 'bold' }}
                            >
                                Tired | Sick | Stressed Out | Distracted | Weakness | Mood swings | Bad sleep | Lazy
                            </textPath>
                        </text>
                    </svg>
                </div>

                <div className="sm:hidden block">
                    <div >
                        <svg width="100%" viewBox="-90 -23 1098.72 99.55" className="py-3">
                            <path
                                id="curve"
                                fill="transparent"
                                d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"
                            />
                            <text width="100%" style={{ transform: "translate3d(0,0,0)" }}>
                                <textPath
                                    className="curvingText text-5xl"
                                    id="text-path"
                                    href="#curve"
                                    startOffset={`${startOffset}`}
                                    style={{ transform: 'translate3d(0,0,0)', fill: '#dbae00', fontWeight: 'bold' }}
                                >
                                    Tired | Sick | Stressed Out | Distracted |
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div >
                        <svg width="100%" viewBox="-70 -23 1098.72 120.55" className="py-3">
                            <path
                                id="curve"
                                fill="transparent"
                                d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"
                            />
                            <text width="100%" style={{ transform: "translate3d(0,0,0)" }}>
                                <textPath
                                    className="curvingText text-[2.8rem]"
                                    id="text-path"
                                    href="#curve"
                                    startOffset={`${startOffset}`}
                                    style={{ transform: 'translate3d(0,0,0)', fill: '#dbae00', fontWeight: 'bold' }}
                                >
                                    Weakness | Mood swings | Bad sleep | Lazy

                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
                <Ordernow />

            </div>


            <div className="fontPoppins flex items-center justify-center gap-3 py-4 px-2">


                <div className=" relative">

                    <div className=" ">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80d0fbc3-8c40-47bf-0953-38b03dec6b00/public" alt="" fetchPriority='high' />
                    </div>

                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 fontPoppins text-white font-extrabold sm:text-3xl text-2xl w-full text-center ">
                        Why Bull Rider?
                    </div>

                </div>

            </div>


            <div className="text-center text-sm sm:text-xl pb-3">
                Whether you are feeling tired or need an energy boost, <span className="font-semibold">Bull Rider, will keep you charged!</span>
            </div>

            <div className="max-w-5xl mx-auto">

                <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-4  items-center justify-center mx-2">
                    {
                        why_bull_rider([
                            {
                                why_bull_rider_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/27a6d151-98a0-4d7c-8a42-9a24d9974d00/public",
                                text_conent: "Strength,Stamina & Energy"
                            },
                            {
                                why_bull_rider_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d2231677-7e56-44d9-0771-92851000db00/public",
                                text_conent: "Relieves stress & anxiety"
                            },
                            {
                                why_bull_rider_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/020c59e1-9d53-40f0-df5e-7c332a87e400/public",
                                text_conent: "Improves mental alertness"
                            },
                            {
                                why_bull_rider_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7bd3f44d-7b52-444f-1de7-2bc2340cb200/public",
                                text_conent: "Improves your Performance"
                            }
                        ])
                    }
                </div>
            </div>

            <Ordernow />


            <div className="hidden sm:block" id='video'>
                <VideoPlayer
                    videoId="pTE4dr5C_Bo?si=Z6FXVUKE4waUdmcU"
                    thumbnail="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/68eeffe2-73e8-45e8-e992-9db54a285900/public"
                />
            </div>

            <div className="sm:hidden block" id='video'>
                <VideoPlayer
                    videoId="pTE4dr5C_Bo?si=Z6FXVUKE4waUdmcU"
                    thumbnail="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b41de036-b449-40c4-dd29-7fef15c1cf00/public"
                />
            </div>



        </section>
    )
}

export default middle_content