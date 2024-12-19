import { useEffect, useState } from 'react';
import reviews from './reviews.json'
import { FaStar } from 'react-icons/fa6';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ReviewSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className="bg-white sm:pb-5 pb-10">
            <div className="max-w-6xl fontPoppins mx-auto items-center">
                <Slider {...settings}>
                    {reviews.map(({ id, name, image, review }) => (
                        <div key={id} className='p-2'>
                            <div className="bg-[#fff9ef] rounded-lg p-6 sm:p-10 review_sdw ">

                                <div className="flex items-center ">
                                    <img className="w-12 h-12 rounded-full object-cover" src={image} alt={name} />
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-lg">{name}</h3>
                                        <div className="flex ">
                                            {Array(5).fill().map((_, i) => (
                                                <FaStar color='#daaf01' key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">

                                    <p className="text-gray-600 text-sm fontPoppins">&ldquo;{review}&rdquo;</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ReviewSection;
