"use client"
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

const Accordion = ({ items }) => {
    const [openIndices, setOpenIndices] = useState([0, 1]);

    const handleClick = (index) => {
        if (openIndices.includes(index)) {
            if (index !== 0 && index !== 1) {
                setOpenIndices(openIndices.filter((i) => i !== index));
            }
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    

    return (
        <div>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`item ${openIndices.includes(index) ? 'active' : ''} mx-1 px-1 border-t-2 border-[#e7d79e] py-1`}
                >
                    <div>
                        <button
                            className="fontPoppins text-[1rem] md:text-[1.4rem] w-full text-left"
                            onClick={() => handleClick(index)}
                        >
                            <div className="flex justify-between items-center font-semibold">
                                <div className="text-[#a44f1e] font-semibold py-2">{item.title}</div>
                                {openIndices.includes(index) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                            </div>
                        </button>
                    </div>

                    <div className="fontPoppins text-[0.9rem] sm:text-[1rem] py-1" hidden={!openIndices.includes(index)}>
                        <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;