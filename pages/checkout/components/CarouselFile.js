import { useState, useMemo } from 'react'
import { useGlobalContext } from "@/statemanage/context";
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'



const CarouselFile = () => {

    const { AllProductData, FetchAllProductData, ActiveProduct, setActiveProduct, } = useGlobalContext();
    const [handleActive, sethandleActive] = useState(0)



    useMemo(() => {
        FetchAllProductData(process.env.NEXT_APP_API_URL, process.env.NEXT_APP_API_KEY, process.env.NEXT_APP_URL);
    }, [])


    useMemo(() => {
        setActiveProduct((ex) => ({ ...ex, ...AllProductData[0], img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b7854240-ed53-4414-ecaa-fe1904121500/public" }));
    }, [AllProductData])




    return (
        <div className='py-4 px-2'>




            <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false} showStatus={false} showArrows={false} selectedItem={handleActive}>

                <div>
                    <Image src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b7854240-ed53-4414-ecaa-fe1904121500/public"} width={1000} height={1000} alt='no' />
                </div>

                <div>
                    <Image src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a6d099ce-3c47-4db3-d374-c808b7faab00/public"} width={1000} height={1000} alt='no' />
                </div>
                <div>
                    <Image src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/25cd3f48-85f5-4340-6643-62e199740a00/public"} width={1000} height={1000} alt='no' />
                </div>

            </Carousel>




            <div className='mt-5'>

                {
                    ActiveProduct ? <div className='flex justify-start items-center gap-4 px-3'>

                        <p className='text-[#117b4b] text-2xl font-bold'> Rs.{ActiveProduct.price} </p>
                        <p className='text-md line-through text-[#ff0000] font-bold'>Rs.{ActiveProduct.reguler_price}</p>
                        <p className='bg-[#feb300] font-bold text-lg text-white px-3 py-1 rounded-2xl'>
                            SAVE {Math.round(100 - (ActiveProduct.price * 100) / ActiveProduct.reguler_price)}%
                        </p>
                    </div>
                        : <div>Please Wait</div>

                }


            </div>




            <section className='flex justify-center items-center gap-3 md:w-[85%] mx-auto'>
                {

                    AllProductData.map((ele, key) => {
                        return <label htmlFor={ele.id} className={`w-full md:w-3/4 mx-auto border text-center rounded-md overflow-hidden my-5 ${ActiveProduct?.id === ele?.id && 'active-data'}`} key={key}>
                            <input type='radio' id={ele.id} name='name' hidden onChange={(e) => {
                                sethandleActive(key === 0 ? 0 : 3)
                                setActiveProduct((ex) => ({ ...ex, ...ele, img: key === 0 ? 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b7854240-ed53-4414-ecaa-fe1904121500/public' : '/checkout_images/product2.jpg', discount: ActiveProduct?.online ? ele.discount : 0 }))
                            }} />

                            <div>
                                <div className='my-3 font-bold text-green-700'>{ele.title}</div>
                                <div className='font-bold w-4/5 md:w-2/3 mx-auto bg-[#0d7d4b] text-white rounded-md pt-1 pb-1'> Save Rs.{ele.reguler_price - ele.price} /-</div>
                                <div className='pt-3 pb-1 text-xl  text-[#006b38] font-black'> Rs.{ele.price} </div>
                                <div className='text-red-600 text-sm font-bold  line-through'> Rs.{ele.reguler_price} </div>
                                <div className='text-sm font-bold my-1'>{ele.short_content}</div>
                                <div className='text-sm bg-[#30bc7f] text-white py-2'>{key % 2 === 0 ? "Best Seller" : "Expert Recommended"}</div>
                            </div>
                        </label>

                    })
                }


            </section>







        </div>
    )
}

export default CarouselFile