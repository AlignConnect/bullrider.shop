import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';
import { IoSearchCircle } from 'react-icons/io5';
import { BiSolidOffer } from "react-icons/bi";




const Header = () => {


    const navLinks = [
        {
            name: "BENEFITS",
            path: "#benifits"
        },
        {
            name: "INGREDIENTS",
            path: "#benifits"
        },
        {
            name: "VIDEO",
            path: "#video"
        },
        {
            name: "FAQS",
            path: "#faqs"
        },
        {
            name: "CONTACT US",
            path: "#contact-us"
        },
    ];


    const [menuOpen, setMenuOpen] = useState(false);

    const handleNev = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <section className="bg-white ">

            <div className='text-sm bg-yellow-500 fontPoppins py-2 font-semibold text-center '>

                <div className="flex items-center justify-center">
                    <BiSolidOffer size={20} />

                    <div className="">
                        Get Flat 10% OFF On Online Order
                    </div>
                </div>


            </div>

            <div className="grid sm:grid-cols-3 grid-cols-2 items-center sm:justify-center justify-between py-2">

                <div className="">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/beba635f-ed41-4131-6f07-3aa09a652500/public" loading='lazy' fetchPriority='high' alt="" className=' w-2/5 sm:w-24 sm:mx-auto pl-2' />
                </div>

                <div className="fontPoppins">
                    <div className="hidden sm:block">

                        <div className="text-[0.9rem] flex justify-center items-center gap-6">
                            {navLinks.map((link, index) => {
                                return (
                                    <Link href={link.path} key={index}>
                                        <div className=' text-black hover:text-yellow-500 font-semibold' key={index}>{link.name}</div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div onClick={handleNev} className="md:hidden cursor-pointer pl-36">
                        <AiOutlineMenu size={25} color='black' />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-5">
                    <FaCartShopping size={25} className='sm:block hidden' />
                    <IoSearchCircle size={35} className='sm:block hidden' />
                </div>

                <div className={
                    menuOpen ?
                        "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-white p-5 ease-out duration-500 font-semibold"
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

        </section>
    )
}

export default Header