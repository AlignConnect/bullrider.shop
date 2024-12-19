import { MdOutlineWifiCalling3 } from "react-icons/md";
import Image from 'next/image';
import Link from "next/link";

const OrderModel = ({ isPopupOpen, closePopup, CashDelivery, setCashDelivery }) => {
    return (
        <div>

            <div className="">
                {isPopupOpen && (
                    <div className="overlay">
                        <div className="popup">
                            <button className="closeButton" onClick={closePopup}>
                                X
                            </button>
                            {/* Your popup content goes here */}
                            <section>

                                <div className='py-2 text-center'>

                                    <div>
                                        <Image src="/checkout_images/thankyou.png" alt="no" width={70} height={200} className='mx-auto' />
                                    </div>
                                    <h3 className='thank_h3 pop mb-0'>Thank you</h3>

                                    <div style={{ fontSize: "18px", fontWeight: "600" }}>Order Successfully Placed</div>

                                    <div className='my-2'>
                                        <div className='mb-0 font-bold'>Your Order i'd</div>
                                        <div className='gr_ ans'>#{CashDelivery.Orderid}</div>
                                    </div>

                                    <div className='my-2'>
                                        <div className='mb-0 font-bold'>Estimated Delivery Date</div>
                                        {/* <div className='text-[#494949]'>{dayjs().add(5, 'days').format('ddd, MMM DD, YYYY')}</div> */}
                                    </div>


                                    <div className='my-2'>
                                        <div className='mb-0 font-bold'>Payment Method </div>
                                        <div className='text-[#494949] ans'>  "Cash on Delivery" </div>
                                    </div>

                                    <div className='my-2'>
                                        <div className='font-bold'>Call to inquire about your order</div>

                                        <div className='my-3'>
                                            <a href="tel:+919099857272" className='text-[#2fc43e] decoration-none font-bold text-xl flex justify-center items-center gap-2'>

                                                <div><MdOutlineWifiCalling3 className='rounded-[50px] text-white bg-[#2fc43e] p-2 text-4xl' /></div>

                                                <div>9099857272</div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className='hope py-1'>
                                        Hope you enjoyed this Purchase!
                                    </div>


                                    <div className='mt-3 mb-2 bg-green-500 inline-block px-4 py-1 rounded-md text-white font-bold'>
                                        {/* <button className='bg-green-500' >OK</button> */}
                                        <Link href={"https://flipkart.la/4cWPCCM"}
                                            onClick={() => {
                                                closePopup();
                                                setCashDelivery({ open: false, Orderid: "" });
                                                return
                                            }}

                                        >Ok</Link>

                                    </div>


                                </div>

                            </section>
                        </div>
                    </div>
                )}
            </div>



        </div>
    )
}

export default OrderModel