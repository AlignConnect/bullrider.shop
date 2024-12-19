import React from 'react'

import Accordion from './Accordion';
import FormData from './Formdata';
import Ordernow from './Ordernow';

const Second_content = () => {





    const items = [
        {
            title: 'INGREDIENTS',
            content: `Carefully crafted with 13 ayurvedic potent herbs to keep you active and healthy.<br/>
            <img class="herb_img" src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ddcd5dd3-434e-4178-5fb9-79335b1be600/public" alt="Herb Image"/>
            `,
        },
        {
            title: 'BENEFITS',
            content: `
            <ol class="custom-ol-class">
                <li>Relaxes the mind and increases the ability to handle stress.</li>
                <li>It helps to make you physically & mentally active.</li>
                <li>Provides energy and fights weakness and tiredness.</li>
                <li>It meets the daily energy requirement.</li>
                <li>Keeps bones healthy and strong.</li>
                <li>Supports your immune power and makes you strong.</li>
                <li>Helps to improve strength, stamina, energy, and vigor.</li>
                <li>It helps to make you energetic and agile.</li>
                <li>Protects against infections and diseases and keeps the body healthy.</li>
                <li>Promotes anti-aging, good for skin, and hair health.</li>
                <li>The "BULL RIDER" capsule is an ayurvedic product that has no side effects.</li>
            </ol>
            `,
        },
        {
            title: 'PRODUCT DESCRIPTION',
            content: `
            <ol class="custom-ol-class">
                <li>In today's fast-paced life, the nutrients from food are not enough for you. You need more!! That's why presenting Bull Rider Capsule. It is an Ayurvedic medicine to boost strength, stamina, and immunity. It fulfills the essential nutrients for your healthy body. Bull Rider Capsule is prepared from a blend of premium Ayurvedic herbs such as Shilajit, Ashwagandha, Safed Musli, Shatavari, Kaucha, Gokshura, Jatiphala (Jaiphal), Kesar, Makardhwaj, Abrak Bhasma, Vang Bhasma, Kapoor, and Laung. These herbs help to boost immune power, develop new energy in the body, and eliminate weakness and diseases.</li>
                <li>Ashwagandha is known as the best immunity booster. It helps to supply nutrients to the body, which increases stamina and strength. It is also noted as a stress reliever and it helps to make you mentally strong. Shilajit emphasizes the creation of the human body and makes the body healthy and strong. Safed Musli helps in increasing the level of testosterone hormone along with increasing strength and stamina. Vanga Bhasma improves the body's immunity to fight infection due to its rejuvenating nature. As a result, you can stay healthy and strong. Kauncha contains considerable quantities of vitamins C and E, to boost immune, skin, and hair health. Shatavari eliminates the factor of oxidative stress and improves blood circulation in veins, which helps in getting relief from flaccidity and lethargy.</li>
                <li>Bull Rider Capsule is specially formulated with a proper combination of these herbs to boost immunity and keep you healthy and energetic. Ayurveda believes that even the most complex problems that chemical-based medicines can not solve can be solved by regular consumption of natural herbs. This product is certified by the Ministry of Ayush and this company has been approved by GMP and ISO. There is no risk of any side effects from its use.</li>
            </ol>
            `,
        },

        {
            title: 'DOSAGE AND DURATION',
            content: `
            <ol class="custom-ol-class">
                <li>Take 1 capsule twice a day with lukewarm milk or water.</li>
                <li>We recommend taking it with milk for better results.</li>
                <li>Ayurveda is known to eliminate your problems from the root. Take Bull Rider Capsule for at least 3-4 months to overcome your problems and improve strength, stamina, and Immunity.</li>
            </ol>
            `,
        },

        {
            title: 'WHO SHOULD TAKE IT?',
            content: `
            <ol class="custom-ol-class">
                <li>Those who want to improve their strength, stamina, and vitality.</li>
                <li>Those men who are suffering from low immunity and want to boost it.</li>
                <li>Those people who want energetic and agile life.</li>
                <li>Those who want a healthy & active body and mind.</li>

            </ol>
            `,
        }
    ];



    return (
        <section className='bg-white max-w-8xl mx-auto !fontPoppins '>



            <div className="max-w-5xl mx-auto">

                <div className="pt-5 " id="benifits">
                    <Accordion items={items} />
                </div>

                <Ordernow />

            </div>

            <div className="fontPoppins flex items-center justify-center gap-3 py-2 px-2 my-3">


                <div className=" relative">

                    <div className=" ">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80d0fbc3-8c40-47bf-0953-38b03dec6b00/public" alt="" fetchPriority='high' />
                    </div>

                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 fontPoppins text-white font-extrabold sm:text-3xl text-2xl w-full text-center ">
                        THE AYURVEDA LIFESTYLE
                    </div>

                </div>

            </div>

            <div className="text-center text-sm sm:text-xl pt-2 px-2">
                Ayurveda is one of the world’s oldest forms of holistic medicine and still widely used today.
            </div>


            <div className="mx-5">

                <div className="grid sm:grid-cols-3 grid-cols-1 items-center justify-center gap-5 py-7">

                    <div className="">

                        <div className="">

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/32e004cb-a0b8-4090-4165-896d7f13f000/public" alt="" className='w-full' fetchPriority='high' />

                            <div className="grid grid-cols-2 items-center justify-center gap-5 pt-3">

                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/48283953-e2f6-4e04-ed45-e02626206300/public" alt="" className='w-full h-full' fetchPriority='high' />
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/64881607-fce8-4bbb-6857-676486bc4400/public" alt="" className='w-full h-full' fetchPriority='high' />

                            </div>
                        </div>

                    </div>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/62940377-027e-4ca1-7ed0-02d78e4ece00/public" alt="" className='w-full h-full' fetchPriority='high' />

                    <div className="">

                        <div className="">


                            <div className="grid grid-cols-2 items-center justify-center gap-5 pb-3">

                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f3334b6d-25e3-4526-ea2b-8af5cc942600/public" alt="" className='w-full h-full' fetchPriority='high' />
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/310f203e-3ac4-4831-e4b5-1a77d4dfd300/public" alt="" className='w-full h-full' fetchPriority='high' />

                            </div>


                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f8e1496f-ed08-465d-588e-b423babccd00/public" alt="" className='w-full' fetchPriority='high' />
                        </div>

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
                        WE'RE PROUD TO BE
                    </div>

                </div>

            </div>


            <div className="max-w-5xl mx-auto pb-10">

                <div className="grid sm:grid-cols-8 grid-cols-4 items-center justify-center gap-3 mx-4 pt-3">

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f1c52deb-7312-40e2-95da-eda95c325000/public" alt="certificate_img" fetchPriority='high' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4595bc60-36ce-49fc-ae47-928fd0ae6700/public" alt="certificate_img" fetchPriority='high' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/46ee522a-ad2f-4f02-a730-22d19081e700/public" alt="certificate_img" fetchPriority='high' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4ec433fb-275d-4537-d576-189e775c8f00/public" alt="certificate_img" fetchPriority='high' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d8207224-61ca-4432-7465-5ce01aca0500/public" alt="certificate_img" fetchPriority='high' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c62809b6-f9e7-43f1-98c5-2183cf5e3000/public" alt="certificate_img" fetchPriority='high' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c75a423f-3ca7-455c-a5b6-dc37d9e0cb00/public" alt="certificate_img" fetchPriority='high' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d7be6b57-e4d4-4674-3fa4-b5360e6f4e00/public" alt="certificate_img" fetchPriority='high' />

                </div>

            </div>

            {/* <div className="" id='contact-us'>

                <FormData />

            </div> */}



        </section >
    )
}

export default Second_content