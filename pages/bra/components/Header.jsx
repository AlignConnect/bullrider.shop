import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Header = () => {

    const navLinks = [
        {
            name: " Why bullrider capsule",
            path: "/why-bullrider"
        },
        {
            name: "Customer Support",
            path: "https://wa.me/9099857272?text=Hi"
        },
    ];


    const [menuOpen, setMenuOpen] = useState(false);

    const handleNev = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <section>
            <div className='bg-[#000000]'>

                <div className="flex items-center md:justify-between justify-around py-2 sm:py-3 px-1 sm:px-3">
                    <div className="flex items-center gap-2 ">
                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4673b9a2-df3e-4ca7-5b09-c411e0e1ed00/public" alt="" className='w-16 md:w-20 mx-auto' />
                        </div>
                        <div className="">
                            <div className="flex items-center gap-1">
                                <div className="fontPoppins uppercase text-yellow-500 md:text-xl text-md font-semibold">
                                    Bull Rider Capsule
                                </div>
                                <img src="/main/home_images/verify.svg" alt="" className='w-4' />
                            </div>
                            <div className="fontPoppins text-white text-[0.7rem]">
                                THE GOOD MEN SECRET
                            </div>
                        </div>
                    </div>

                    <div className="fontPoppins">
                        <div className="hidden sm:block">

                            <div className="text-md flex justify-center items-center gap-6">
                                {navLinks.map((link, index) => {
                                    return (
                                        <Link href={link.path} key={index}>
                                            <div className=' text-white hover:text-blue-500' key={index}>{link.name}</div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        <div onClick={handleNev} className="md:hidden cursor-pointer pl-16">
                            <AiOutlineMenu size={25} color='white' />
                        </div>
                    </div>

                    <div className={
                        menuOpen ?
                            "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-white p-5 ease-out duration-500"
                            : "fixed right-[-100%] w-[65%] h-screen top-0 p-10 ease-in duration-700"
                    }
                    >
                        <div className="flex w-full items-center justify-end py-3">
                            <div onClick={handleNev} className="cursor-pointer text-white">
                                <AiOutlineClose size={22} color='black' />
                            </div>
                        </div>

                        <div className="fontPoppins">
                            <ul className=''>
                                {navLinks.map((link, index) => {
                                    return (
                                        <Link onClick={() => setMenuOpen(false)} href={link.path} key={index}>
                                            <li className='text-black hover:text-blue-500 py-3' key={index}>{link.name}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>


            </div >


            <div className="py-3  bg-[#F8F4E1] ">

                <div className=" mx-2 border border-dashed border-black rounded-md  p-1">

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80d6bce7-565d-4f83-46be-3f9ec77a9b00/public" alt="" className='w-full rounded-lg mx-auto 
                    ' />
                </div>

                <div className="bg-[#543310] mt-4 mx-auto fontPoppins">
                    <div className="text-xl sm:text-3xl  text-center text-white font-extrabold py-3">
                        Bull Rider Capsule क्यों?
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Header