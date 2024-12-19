import React from 'react'
import Ordernow from './Ordernow'

const Use_it = () => {


    const all_benefits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='reason_trust bg-white rounded-md sm:my-4 my-2' key={key}>
                <img src={e.benefits_img} className='w-full mx-auto p-2 rounded-xl' alt='benefits_imgs' />
                <div className=" fontNoto text-center text-sm md:text-[1.3rem] py-2 px-1 leading-tight">{e.benefits_content}</div>
            </div >
        })
    }

    const reasons = (arr) => {
        return arr?.map((e, key) => {
            return <div key={key} className='sm:py-5 py-2 px-1 mx-2 '>
                <img src={e.reason_img} className='mx-auto md:w-16 w-12 pt-2' alt='reason_img' loading="lazy" />
                <div className='md:text-xl text-sm font-extrabold text-center text-black pt-3'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.reason_title }}
                    />
                </div>
            </div >
        })
    }


    return (
        <section>
            <div className="">
                <div className="bg-[#e5a939] fontNoto">
                    <div className="sm:max-w-[70%] mx-auto md:py-8 py-5">

                        <p className='fontNoto sm:text-[1.2vw] text-lg text-justify sm:px-20 px-2 sm:text-center md:py-14'>
                            Bull rider capsule आयुर्वेदिक जड़ीबूटियों और भस्मो से बना हुआ प्राकृतिक उत्पाद है जिसका अनुमोदित मात्रा में सेवन करने पर कोई भी साइड इफ़ेक्ट नहीं पाया जाता है। यह सेहत के लिए उपयोगी और सेवन के लिए पूर्णतः सुरक्षित उत्पाद है!
                        </p>

                        <div className=" text-black font-extrabold sm:text-[3vw] text-[1.8rem] w-full text-center pt-6 md:pt-0">
                            आजमाए और तंदुरुस्त जीवन पाएं
                        </div>


                        <div className=' grid sm:grid-cols-3 grid-cols-2 sm:gap-16 gap-2 sm:py-5 py-2 mx-2 '>
                            {
                                all_benefits([
                                    {
                                        benefits_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/648333e8-9289-41e8-8cee-475a97057900/public",
                                        benefits_content: "Bull rider capsule के साथ ऊर्जा एवं स्फूर्ति बढ़ाएं और अपने लाइफस्टाइल को नया मोड़ दें।  "
                                    },
                                    {
                                        benefits_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8a79af5a-0c38-4deb-a5cf-1c3d338e9400/public",
                                        benefits_content: "रोग प्रतिरोधक क्षमता बढाकर बिमारियों से दूर रहे और स्वस्थ व खुशहाल लाइफ जिए "
                                    },
                                    {
                                        benefits_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ee475ef1-20ec-46f1-e9d1-a4781e1b0d00/public",
                                        benefits_content: "ज्यादा एनर्जी और स्टैमिना के साथ जिम में प्रॉपर वर्कआउट करें और मसल ग्रोथ में बृद्धि देखे "
                                    },
                                    {
                                        benefits_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f38b34ce-9773-4cab-fba4-a1953f9bb200/public",
                                        benefits_content: "थकान और आलस भरे लाइफ से छुटकारा पाए, दिन भर ताजगी और स्फूर्ति महसूस करें "
                                    },
                                    {
                                        benefits_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0daf32fe-f605-4022-5ae5-bf2306661e00/public",
                                        benefits_content: "इसके आलावा बेहतर जोश-उर्जा के साथ वैवाहिक जीवन में ज्यादा खुशहाली बढती है"
                                    },
                                    {
                                        benefits_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b0d57fc7-757b-4b9e-c2b9-00f4cbfa1800/public",
                                        benefits_content: "Bull rider capsule के इंग्रेडिएंट्स मसल रिकवरी और मसल ग्रोथ में मदद करते है।  "
                                    }
                                ])
                            }
                        </div>

                        <Ordernow />

                    </div>
                </div>


                <div className="bg-white fontNoto">
                    <div className="sm:max-w-[50%] mx-auto md:py-8 py-5">

                        <div className="fontPoppins uppercase sm:text-[2.2vw] text-[1.8rem] py-1 font-extrabold text-center">
                            Reason to Trust
                        </div>

                        <div className="bg-[#faf0d8] rounded-md mx-3 mt-2 rsn" >
                            <div className=' grid md:grid-cols-3 grid-cols-3 md:gap-2  mx-1'>
                                {
                                    reasons([
                                        // {
                                        //     reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1091ddec-5aac-4edc-9cf7-748af296a400/public",
                                        //     reason_title: "100% मनी<br/> बैक गारंटी "
                                        // },
                                        {
                                            reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b2e4e47e-6d1f-4c84-c85b-3f2a3512f600/public",
                                            reason_title: "20 लाख+<br/> संतुष्ट ग्राहक "
                                        },
                                        {
                                            reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77613456-74cc-497e-c30f-fdc2667ca900/public",
                                            reason_title: "COD पेमेंट<br/> उपलब्ध "
                                        },
                                        {
                                            reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3f2dca83-5221-43cc-8919-28b35c924300/public",
                                            reason_title: "Flipkart, Amazon<br/> पर लिस्टेड"
                                        }
                                    ])
                                }
                            </div>
                        </div>

                    </div>

                    <Ordernow />


                </div>

            </div>


        </section>
    )
}

export default Use_it