import dynamic from 'next/dynamic'
import React from 'react'

const OrderNow = dynamic(() => import('./OrdernowTaboola'));

const Sec1 = () => {
    return (

        <section className="bg-white py-3">
            <div className="flex flex-col items-center p-4">

                <div className="w-full px-4">
                    <p className="text-lg font-medium text-black mb-4">
                        क्या वैवाहिक जीवन में अपनी पार्टनर के साथ बेहतर परफॉर्मेंस चाहते हैं? क्या आपको अपनी ताकत, सहनशक्ति और जीवन शक्ति में वृद्धि चाहिए? &nbsp;
                        <span
                            className="text-lg font-bold text-orange-600 mb-4">
                            चिंता न करें, बुल राइडर कैप्सूल आपके लिए एक बेहतर आयुर्वेदिक समाधान हो सकता है!
                        </span>

                    </p>

                </div>

                {/* Image */}
                <div className="w-full  p-4">
                    <img
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/74172802-1641-4420-39c4-7bcfe092be00/public"
                        alt="Bull Rider Capsule Promotion"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* Text */}


                <div className="w-full  p-2">
                    <img
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/736294ba-6a91-469f-9f2f-01a916bb1400/public"
                        alt="Bull Rider Capsule Promotion"
                        className="w-full h-auto rounded-lg"
                    />
                </div>


                <div className="w-full px-4">
                    <p className="text-lg font-medium text-black mb-4">
                        बुल राइडर कैप्सूल  &nbsp;
                        <span
                            className="text-lg font-bold text-orange-600 mb-4">
                            13 शक्तिशाली जड़ी-बूटियों से बनाया गया है &nbsp;
                        </span>
                        इन प्रत्येक हर्ब्स की  पुरुष स्वास्थ्य को बेहतर बनाने में एक अपनी विशेषता है जैसे: -
                    </p>

                </div>

            </div>

            <div>
                <OrderNow />
            </div>

            <div className="mx-auto bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8eb1991e-95fc-4533-9acc-441ed851a400/public')] w-[98%] pt-4">
                <h1 className="text-4xl font-bold text-white text-center my-4">Powerful Herbs</h1>


                <div className='sm:w-[75%] mx-auto'>
                    <div className=" p-4 rounded-lg text-white grid grid-cols-5 sm:grid-cols-7 items-center gap-3 my-3">

                        <div className='col-span-2'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/00b7d850-e9df-4030-6fe5-f85b3a83e700/public" alt="Ashwagandha" className="w-full  object-cover rounded-lg mb-2" />
                        </div>


                        <div className='col-span-3 sm:col-span-5'>
                            <h2 className="text-2xl font-bold mb-2 text-[#dfba7b]">अश्वगंधा</h2>
                            <p className="text-md">तनाव को कम करता है और स्टैमिना बढ़ाता है</p>
                        </div>

                    </div>




                    <div className=" p-4 rounded-lg text-white grid grid-cols-5 sm:grid-cols-7 items-center gap-3 my-3">

                        <div className='col-span-2'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/630eeb86-8c82-49fa-8aab-436daacba000/public" alt="Ashwagandha" className="w-full  object-cover rounded-lg mb-2" />
                        </div>

                        <div className='col-span-3 sm:col-span-5'>
                            <h2 className="text-2xl font-bold mb-2 text-[#dfba7b]">शिलाजीत</h2>
                            <p className="text-md">टेस्टोस्टेरोन लेवल और जीवन शक्ति को बढ़ाता है </p>
                        </div>

                    </div>

                    <div className=" p-4 rounded-lg text-white grid grid-cols-5 sm:grid-cols-7 items-center gap-3 my-3">

                        <div className='col-span-2'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e8a9166b-a63f-4e9d-f3d6-a46184f25a00/public" alt="Ashwagandha" className="w-full  object-cover rounded-lg mb-2" />
                        </div>

                        <div className='col-span-3 sm:col-span-5'>
                            <h2 className="text-2xl font-bold mb-2 text-[#dfba7b]">सफेद मूसली</h2>
                            <p className="text-md">ऊर्जा और सहनशक्ति को बढ़ाता है</p>
                        </div>

                    </div>

                    <div className=" p-4 rounded-lg text-white grid grid-cols-5 sm:grid-cols-7 items-center gap-3 my-3">

                        <div className='col-span-2'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/179a7cf3-74a7-4961-91a9-557869270100/public" alt="Ashwagandha" className="w-full  object-cover rounded-lg mb-2" />
                        </div>

                        <div className='col-span-3 sm:col-span-5'>
                            <h2 className="text-2xl font-bold mb-2 text-[#dfba7b]">गोक्षुरा </h2>
                            <p className="text-md">जोश, एवं ऊर्जा बढ़ाकर पूरे दिन एनर्जेटिक रखता है</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-2 px-4 text-[#dfba7b] py-2">और +9 जड़ी-बूटियाँ जो आपके समग्र स्वास्थ्य को सुखदायी बनाने में मदद करती है!</h2>


            </div>


            <div className="bg-[#dfba7b] p-4 rounded-lg text-gray-900 w-[97%] mx-auto">
                <div className="flex flex-col space-y-2 font-semibold text-black">
                    <div className="flex items-center gap-3 sm:py-2">

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8f9dab8f-4e16-423a-025c-a6d0957bc200/public" alt="sdf" loading='lazy' className='w-[50px]' />
                        </div>

                        <p className='pt-2 fontPoppins'>COD Payment Available</p>
                    </div>
                    <div className="flex items-center gap-3 sm:py-2">
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/11b39e92-fc29-4b1b-069a-16b47734a600/public" alt="sdf" loading='lazy' className='w-[50px]' />
                        </div>
                        <p className='pt-2 fontPoppins'>Big Discount in Festival Season</p>
                    </div>
                    <div className="flex items-center gap-3 sm:py-2">
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dfdb54a7-c442-4da5-85e7-f201c2cbc400/public" alt="sdf" loading='lazy' className='w-[50px]' />
                        </div>
                        <p className='pt-2 fontPoppins'>Save 10% Extra on Prepaid</p>
                    </div>
                    <div className="flex items-center gap-3 sm:py-2">
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5fbc54ab-6d83-4442-fcfc-945ef2105800/public" alt="sdf" loading='lazy' className='w-[50px]' />
                        </div>
                        <p className='py-2 fontPoppins'>First Choice of men in India</p>
                    </div>
                </div>
            </div>



        </section>

    )
}

export default Sec1