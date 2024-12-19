import React from 'react'

const Header = () => {
    return (
        <section className='bg-[#EEF4ED] fontNoto'>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/34a31eb2-334b-490d-2ad1-8099b4063d00/public" alt="" className='w-full sm:h-5/6' fetchPriority='high' />



            <div className="text-center pt-5 pb-2 fontKalnia sm:text-xl text-sm font-semibold">

                #INDIA'S NO.1 MALE WELLNESS PRODUCT

            </div>


            <div className={`text-center py-3 fontPoppins`} >
                <a className='decoration-0 text-white uppercase bg-gray-900 text-3xl font-bold px-10 py-2 rounded-full inline-block '>Order now</a>
            </div>

            <div className=' text-black md:py-10 py-7'>
                <div className='text-center'>
                    <h1 className="fontNoto text-[red] text-5xl font-extrabold leading-[53%] md:leading-[45%] md:text-7xl">ध्यान दें</h1>
                    <h3 className={`text-2xl text-[#d69c52] font-bold md:text-4xl fontPoppins uppercase`}>Bull Rider Capsule</h3>
                    <h2 className="fontNoto text-black mt-2 font-extrabold text-3xl md:text-4xl">ही क्यों?</h2>
                </div>
            </div>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3484a926-850d-4bfc-cfed-55ef7c233800/public" alt="" className='w-full' />


        </section>
    )
}

export default Header