import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Noto_Serif_Devanagari } from "next/font/google";
import { IconButton } from '@mui/material';


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const FlipAma = ({ open, handleClose, }) => {
    return (
        <div>

            <Dialog
                open={open}
                maxWidth='xs'
                onClose={handleClose}
                sx={{
                    "& .MuiPaper-root.MuiDialog-paper":{
                        mx:2,
                        my:0,
                        maxHeight:'calc(100% - 40px)'
                    }
                }}
            >
                <DialogContent sx={{
                    px:1,
                    py:2
                }}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right:{xs:5,sm:20},
                            top: 5,
                            color:'black',
                            border:'1px solid black',
                            px:1,
                            py:0
                        }}
                    >
                        x
                    </IconButton>
                    <div className={`${noto.className}   text-black`}>
                        <div className="bg-[white] ">

                            <section className="text-end " style={{ fontFamily: "sans-serif" }}>

                                <div className='text-center'>
                                    <section className="w-full pyd-2">
                                        <a href={"https://bit.ly/3yxvxmN"} style={{ textDecoration: 'none' }}><img src="/checkout_images/flippro.webp" alt="no" className="" /></a>
                                    </section>

                                    <section className="p-2 bg-[white] text-center font-bold border border-white rounded-[5px] mx-2 flex justify-center items-center gap-2" >
                                        <div className='w-[3rem] md:w-[5rem]'  >
                                            <img src="/common_images/secure.png" alt="no" className="w-full" />
                                        </div>

                                        <div className='text-md'>
                                            Buy from Trusted Website
                                        </div>
                                    </section>

                                    <div className='text-md ' >
                                        Flipkart से खरीदने के लिए निचे क्लिक करें
                                    </div>

                                    <div className="grid justify-center my-1">
                                        <div className="flex items-center gap-2">
                                            <div className="fingImg11">
                                                <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                            </div>

                                            <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                                <a href={"https://bit.ly/3yxvxmN"} style={{ textDecoration: 'none' }}><img src="/common_images/flipkart.png" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                            </div>


                                            <div className="fingImg">
                                                <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-md  mt-5 mb-2 font-noto' >
                                        Amazon से खरीदने के लिए निचे क्लिक करें
                                    </div>
                                    <div className="grid justify-center">
                                        <div className="flex items-center gap-2">
                                            <div className="fingImg11">
                                                <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                            </div>

                                            <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                                <a href={"https://amzn.to/3UTWFEh"} style={{ textDecoration: 'none' }}>
                                                    <img src="/common_images/amazon.png" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                            </div>


                                            <div className="fingImg">
                                                <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='font-noto bg-[#ffa800] pt-2 my-4 -mx-1 px-1 rounded-md text-center font-bold text-md'>आपकी यौन समस्या का 100% गारंटीड इलाज</div>

                                </div>

                            </section>
                        </div>
                    </div>

                </DialogContent>

            </Dialog>
        </div>
    )
}

export default FlipAma