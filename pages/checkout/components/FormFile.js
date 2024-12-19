import React, { useEffect, useState } from 'react'
import  inputDataValue from '../../../forcheckout/component/inputarray'
import { CheckoutFile } from '../../../forcheckout/component/checkout';
import { useGlobalContext } from '@/statemanage/context'
import Image from 'next/image';
import Script from 'next/script';
import OrderModel from '../../../forcheckout/component/OrderModel';
import { useSearchParams } from 'next/navigation'


const FormFile = () => {



    const { openPopup, isPopupOpen, closePopup } = useGlobalContext();



    const searchParams = useSearchParams();



    const { chng, setchng, ActiveProduct, setActiveProduct } = useGlobalContext();
    const [alertVerify, setalertVerify] = useState({ open: false, message: "" })
    const [CashDelivery, setCashDelivery] = useState({ open: false, Orderid: "" })


    const handleChange = async (e) => {

        // if (e.target.name === "pincode" && e.target.value.length === 6) {
        //     let checkStatus = await CheckoutFile.PincodeValidation(e.target.value)
        //     return setchng({ ...chng, pincode: checkStatus.pincode, city: checkStatus.city, state: checkStatus.state })
        // }


        setchng({ ...chng, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        try {
            const handle = CheckoutFile.joiValidator(chng);

            const combine = { ...ActiveProduct, product_name: ActiveProduct.name, ...handle }


            const createOrder = await CheckoutFile.createOrder(combine)

            if (createOrder.status === 200) {
                if (combine.online) {
                    createOrder.data.data["customer_name"] = combine.name;
                    createOrder.data.data["customer_email"] = combine.email;
                    createOrder.data.data["customer_phone"] = combine.phone;

                    CheckoutFile.PaymentInitial({ ...createOrder.data.data, OrderId: createOrder.data.OrderId, img: ActiveProduct.img }, { openPopup, setalertVerify })


                } else {
                    // openPopup();
                    // return setCashDelivery({ open: true, Orderid: createOrder.data.OrderId });
                    return window.location.href = `${process.env.NEXT_APP_URL}/order-status?orderId=${createOrder.data.OrderId}`;
                }
            } else {
                return alert("Failed to Create Order")
            }

            // console.log({ ...ActiveProduct, ...handle })
        } catch (error) {
            return alert(error);
        }

    }


    useEffect(() => {
        setchng((ex) => ({ ...ex, name: searchParams.get("name") ?? "", phone: searchParams.get("phone") ?? "" }))
    }, [])


    return (

        <section>

            <div className='m-2 md:m-5 rounded-xl'>
                <form onSubmit={handleFormSubmit}>

                    <div className='bg-[#ececec]'>
                        <h2 className='text-center py-3 font-bold text-2xl'>Shipping Details</h2>
                        {
                            inputDataValue?.map((ele, key) => {
                                return <div key={key} className='w-full px-3 mx-auto py-2'>
                                    <div>{ele.label}</div>
                                    <div className='flex items-center border p-2 rounded-[50px] bg-white'>
                                        <div className='text-xl px-2'>{ele.icon}</div>
                                        <div className='w-full'>
                                            <input {...ele.inputValue} className='px-2 outline-0' onChange={handleChange} value={chng[ele.inputValue.name]} />
                                        </div>
                                    </div>
                                </div>
                            })
                        }


                        {/* after testing */}
                        {/* ------------------------------------------------- */}
                        {/* <div>
                                <select>
                                </select>
                            </div> */}
                        {/* --------------------------------------------------------- */}

                    </div>

                    <hr className='my-3' />

                    <div className='border border-xl border-[green] rounded-md p-2'>

                        <h2 className='text-xl font-black my-3'>Your Order</h2>

                        <div className='flex justify-between px-3'>

                            <h2 className='font-bold text-lg col-span-1'>Product</h2>
                            <h2 className='font-bold text-lg col-span-1'>Subtotal</h2>


                        </div>

                        <div className='flex justify-between px-3 border-b-2 py-2'>
                            <h2>{ActiveProduct?.name}</h2>
                            <h2>Rs.{ActiveProduct?.price}</h2>
                        </div>


                        <div className='flex justify-between px-3  border-b-2 py-2'>
                            <h2>Discount</h2>
                            <h2>Rs.{ActiveProduct?.discount == 0 ? "" : "-"} {ActiveProduct?.discount}</h2>
                        </div>


                        <div className='flex justify-between p-3'>
                            <h2 className='text-green-600 font-bold text-xl'>Total</h2>
                            <h2 className='text-green-600 font-bold text-xl'>Rs.{ActiveProduct?.price - ActiveProduct?.discount}</h2>
                        </div>


                        <div className='font-bold text-lg'>Choose Your payment Method</div>

                        <section>

                            <div className={`border p-2 my-2 ${ActiveProduct?.online && 'border-green-400 bg-green-100 rounded-md'}`}>
                                <label htmlFor='onlinepayment' className='flex gap-3 items-center py-1'>
                                    <input
                                        checked={ActiveProduct?.online}
                                        type='radio'
                                        name='payment'
                                        id='onlinepayment'
                                        onChange={() => {
                                            setActiveProduct((ele) => ({ ...ele, online: true, discount: ActiveProduct?.price * 10 / 100 }))
                                        }}
                                    />
                                    <Image src={"/checkout_images/bank.png"} width={250} height={300} alt='noim' />
                                </label>

                            </div>


                            <div className={`border p-2 my-2 ${!ActiveProduct.online && 'border-green-400 bg-green-100 rounded-md'}`}>
                                <label htmlFor='codpayment'>
                                    <input
                                        checked={!ActiveProduct?.online}
                                        type='radio'
                                        name='payment'
                                        id='codpayment'
                                        onChange={() => {
                                            setActiveProduct((ele) => ({ ...ele, online: false, discount: 0 }))
                                        }}
                                    /> Cash On Delivery
                                </label>
                            </div>

                        </section>


                        <div className='w-full text-center my-2 py-2 bg-[#13a05c] text-white font-bold text-lg rounded-md'>
                            <input type='submit' value={"Place Order"} />
                        </div>


                    </div>




                </form>


            </div>

            {/* <AlertModel alertVerify={alertVerify} setalertVerify={setalertVerify} />*/}
            <OrderModel CashDelivery={CashDelivery} setCashDelivery={setCashDelivery} isPopupOpen={isPopupOpen} closePopup={closePopup} />
            {/* <button onClick={openPopup} className='bg-red-500'>Open Popup</button> */}


            <Script src='https://checkout.razorpay.com/v1/checkout.js' />

        </section>

    )
}

export default FormFile