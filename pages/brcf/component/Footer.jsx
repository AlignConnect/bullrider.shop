import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='bg-gray-200 fontNoto'>

            <div className='py-4 sm:max-w-[70%] mx-auto text-black'>

                <div className="flex items-center justify-center gap-2 py-2">
                    <div className="bg-black rounded-full">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4673b9a2-df3e-4ca7-5b09-c411e0e1ed00/public" alt="" className='w-16 md:w-20 mx-auto' />
                    </div>
                    <div className="">
                        <div className="flex items-center gap-1">
                            <div className="fontPoppins uppercase text-black md:text-xl text-md font-extrabold">
                                BullRider Capsule
                            </div>
                            <img src="/main/home_images/verify.svg" alt="" className='w-4' />
                        </div>
                        <div className="fontPoppins text-[0.7rem]">
                            THE GOOD MEN SECRET
                        </div>
                    </div>
                </div>




                <div className="text-center text-[0.8rem] md:text-[0.9rem] py-3 px-2">
                    Empower your workouts with Bull Rider Capsules—crafted to boost your strength, enhance stamina, and build immunity naturally.
                </div>


                <div className='text-md text-center pt-4 font-semibold'>
                    We are Available:-
                </div>


                <div className="flex justify-center items-center gap-7 py-3">
                    <a href="https://www.flipkart.com/r-ayurveda-bull-rider-capsule-pack-of-30/p/itme2215b6569e1b">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" alt="" className='sm:w-28 w-24 mx-auto' />
                    </a>
                    <a href="https://amzn.to/3XpFkUY">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" alt="" className='sm:w-24 w-20 mx-auto ' />
                    </a>
                </div>

                <hr className='my-3' />

                <div className="fontNoto  text-center   text-xl font-extrabold">
                    स्वास्थ्य अस्वीकरण
                </div>

                <p className='px-2 text-[1rem] py-2 text-center'>
                    इस उत्पाद का उद्देश्य किसी बीमारी का निदान, उपचार, इलाज या रोकथाम करना नहीं है। यदि आप दवा ले रहे  हैं, हृदय रोग  है या कोई पुरानी बीमारी है तो हम सुझाव देते हैं कि हमारे किसी भी उत्पाद का उपयोग करने से पहले एक सामान्य चिकित्सक से परामर्श करें। सभी उत्पादों पर परिणाम विशिष्ट नहीं होते हैं और हर किसी को इन परिणामों का अनुभव नहीं होगा। "bullrider capsule" ने आयुष से लाइसेंस प्राप्त कर लिया है। आयुष प्रमाणपत्र सरकार द्वारा दिया गया एक प्राधिकरण है। हमारे उत्पादों के उपभोग या उपयोग के बाद होने वाली किसी भी प्रकार की समस्या के लिए "bullrider capsule" उत्तरदायी नहीं होगा।
                </p>


                <p className='px-2 text-[1rem] py-2 text-center'>
                    <span className='font-semibold'>अस्वीकरण-</span> परिणाम व्यक्ति-दर-व्यक्ति भिन्न हो सकते हैं। वेबसाइट पर दिखाई गई छवियां केवल प्रतिनिधित्व हैं।
                </p>

                <p className='px-2 text-[1rem] py-2 text-center'>
                    "किसी भी धोखाधड़ी योजना/लॉटरी/लकी ड्रा के तहत किसी नकद/पुरस्कार की पेशकश करने वाले फर्जी कॉल/एसएमएस/ईमेल से सावधान रहें। कोई भी जानकारी साझा न करें या किसी भी राशि का भुगतान न करें"
                </p>


                <div className="">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d7a611cf-2eae-4586-7527-94f98908f100/public" alt="" className='w-22 mx-auto' />
                </div>

                <div className="py-5">
                    <div className="fontPoppins text-sm sm:flex justify-center items-center text-center gap-4">

                        <Link href='/privacy-policy' className='underline '>
                            Privacy Policy
                        </Link><br />

                        <Link href='/terms-conditions' className='underline  '>
                            Terms & Conditions
                        </Link><br />

                        <Link href='/return-refund' className='underline  '>
                            Return & Refund Policy
                        </Link><br />


                        <Link href='/shipping-info' className='underline '>
                            Delivery information
                        </Link><br />

                        <Link href='/reference' className='underline '>
                            Reference
                        </Link><br />
                    </div>
                </div>


                <div className="text-center text-blue-800 mb-16 md:mb-4 text-sm">
                    © 2024 bullrider capsule | All Rights Reserved.
                </div>




            </div>


        </section>
    )
}

export default Footer