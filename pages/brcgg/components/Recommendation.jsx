import React from 'react'

const Recommendation = () => {


    const why_recommendation = (arr) => {
        return arr?.map((e, key) => {
            return <div className='sm:flex  items-center justify-center gap-2 py-2 ' key={key}>
                <div className="">
                    <img src={e.icon} className=" sm:w-full w-14 mx-auto" alt="icons" />
                </div>
                <div className=' text-black fontPoppins font-semibold sm:text-[1.1vw] text-sm sm:text-left text-center leading-tight pt-2 sm:pt-0'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }


    return (
        <div>

            <div className="bg-[#e5a939]">
                <div className="sm:max-w-[90%] ">


                    <div className="grid sm:grid-cols-3 grid-cols-3 items-center sm:py-5 py-2">
                        {
                            why_recommendation([
                                {
                                    icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/628d4e13-d6fa-46b8-e08e-db17e9efea00/public",
                                    title: "Satisfied<br/> Customers"
                                },

                                {
                                    icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/62b110ca-32de-4431-ab67-105631b69700/public",
                                    title: "COD <br/> Available"
                                },
                                {
                                    icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/41da6722-8cfa-4308-5476-8a246781b000/public",
                                    title: "Men's <br/>first choice"
                                },


                            ])
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Recommendation