"use client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateOrderMutation,
  useCreateRzyOrderMutation,
  useFetchProductsQuery,
  useVerifyPaymentMutation,
} from "@/redux/services/products";
import { resolveRTKError } from "@/redux/rtkQuery";
import dynamic from "next/dynamic";
import Script from "next/script";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter, useSearchParams } from "next/navigation";
import { IoStar } from "react-icons/io5";
import ReviewSection from "./components/ReviewSection";
import { TbTruckDelivery } from "react-icons/tb";
import { CiPercent } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMdEyeOff } from "react-icons/io";
import Link from "next/link";
import BottomPopupForm from "./components/bottompopup/BottomHandler";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSelectedProduct,
  decrementQuantity,
  incrementQuantity,
} from "@/redux/slices/ProductInfo";
import ShiProcket from "./commonUse/shiprocket";

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <p>Loading...</p>,
});

const product_img = [
  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5287cfe7-d246-4e2a-ecc6-d5cd80300400/public",
  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ae87bc3c-2a89-4311-fb8b-4b5d29f0a400/public",
  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/38dd4f80-1dbc-4b95-4cae-9a2e1143a900/public",
];

const settings_p_m = {
  customPaging: function (i) {
    return (
      <div>
        <img
          src={product_img[i]}
          alt={`Thumbnail ${i + 1}`}
          className="w-full mx-auto"
        />
      </div>
    );
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb slick-dots_custom",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const settings_key_benifits = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
};

const YoutubeFrame = dynamic(() => import("./components/YoutubeFrame"), {
  loading: () => <p>load</p>,
});

const Page = () => {
  const searchParams = useSearchParams();

  const taboola_tracking = searchParams.get("tbclid");

  const navigate = useRouter();

  const dispatch = useDispatch();

  const [tagsall, settagsall] = useState("bullrider.shop");

  useEffect(() => {
    const v = localStorage.getItem("PATH");

    settagsall((vx) => {
      if (v) {
        return v;
      } else {
        return vx;
      }
    });
  }, []);

  const productInfo = useSelector((state) => state.productInfo);

  const products = productInfo?.productsdata;
  const quantity = productInfo?.quantity;
  const allVariants = productInfo?.allVariants;
  const selectProducts = productInfo?.selectProducts;

  const [createOrder, { isLoading: isSubmitting }] = useCreateOrderMutation();
  const [createRzyOrder, { isLoading: isRzySubmitting }] =
    useCreateRzyOrderMutation();

  const [verifyPayment, { isLoading: isVerifyPayment }] =
    useVerifyPaymentMutation();

  const [subtotal, setSubtotal] = useState(0);
  const discount = 10;

  useEffect(() => {
    const bullriderorders = searchParams.get("bullriderorders");
  }, [searchParams]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    ip: "",
    phone: "",
    address: "",
    zipcode: "",
    country: "",
    state: "",
    city: "",
    tags: "bullrider-shop",
    payment_status: "Pending",
    delivery_method: "online",
    variant_id: 0,
    amount: 0,
    discount_amount: 0,
  });

  const PincodeValidation = async (pincodevalue) => {
    if (pincodevalue.length === 6) {
      const url =
        "https://api.postalpincode.in/pincode/" + Number(pincodevalue);
      const pinCode = await fetch(url)
        .then((v) => v)
        .then((response) => response.json())
        .catch((err) => err);
      if (pinCode && pinCode[0] && pinCode[0].Status === "Success") {
        return setFormData((prevState) => ({
          ...prevState,
          state: pinCode ? pinCode[0]?.PostOffice[0]?.State : "",
          city: pinCode ? pinCode[0]?.PostOffice[0]?.District : "",
          country: pinCode ? pinCode[0]?.PostOffice[0]?.Country : "",
        }));
      } else {
        return setFormData((prevState) => ({
          ...prevState,
        }));
      }
    }
  };

  useEffect(() => {
    if (formData.zipcode.length === 6) {
      PincodeValidation(formData.zipcode);
    }
  }, [formData.zipcode]);

  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    if (products) {
      setFormData((prevState) => ({
        ...prevState,
        variant_id: products.variants[1]?.id || "",
      }));
    }
  }, [products]);

  useEffect(() => {
    const calculatedSubtotal = parseInt(selectProducts?.price) * quantity;
    setSubtotal(calculatedSubtotal);

    let calculatedTotal = calculatedSubtotal;
    if (formData.delivery_method === "online") {
      const d_amount = (calculatedSubtotal * discount) / 100;

      setFormData((prevState) => ({
        ...prevState,
        discount_amount: d_amount,
      }));

      calculatedTotal = calculatedSubtotal - d_amount;
    } else {
      setFormData((prevState) => ({
        ...prevState,
        discount_amount: 0,
      }));
    }

    setFormData((prevState) => ({
      ...prevState,
      amount: calculatedTotal,
    }));
  }, [formData.delivery_method, quantity, selectProducts?.price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeSingleVarient = (event) => {
    const variantId = event.target.value;
    // console.log('variantId: ', variantId);
    const selected = allVariants.find((v) => {
      return v.id === Number(variantId);
    });

    dispatch(changeSelectedProduct({ selectProducts: selected }));

    setFormData((prevState) => ({
      ...prevState,
      variant_id: selected?.id || 0,
    }));
  };

  const validate = () => {
    let errorMsg = "";
    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "phone",
      "address",
      "zipcode",
      "country",
      "state",
      "city",
      "payment_status",
      "variant_id",
      "delivery_method",
      "amount",
      "discount_amount",
    ];

    for (const field of requiredFields) {
      const value = formData[field];

      if (
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "") ||
        (typeof value === "number" && isNaN(value))
      ) {
        errorMsg = `${field} is required`;
        break;
      }
    }

    if (!errorMsg && !/\S+@\S+\.\S+/.test(formData.email)) {
      errorMsg = "Invalid email address";
    } else if (!errorMsg && !/^[6789]\d{9}$/.test(formData.phone)) {
      errorMsg = "Phone number must start with 6, 7, 8, or 9 and be 10 digits";
    } else if (!errorMsg && !/^\d{6}$/.test(formData.zipcode)) {
      errorMsg = "zipcode must be 6 digits";
    }

    if (errorMsg) {
      toast.error(errorMsg);
    }

    return !errorMsg;
  };

  // this is for thankyou popup

  const createorderhandle = async (paymentStatus) => {
    try {
      let checkIp = await axios
        .get("https://api.ipify.org?format=json")
        .then((response) => {
          return response.data.ip;
        })
        .catch((error) => console.log(error));

      // console.log('formData: ', formData);
      const response = await createOrder({
        ...formData,
        quantity,
        tags: tagsall,
        product_price: selectProducts?.price,
        payment_status: paymentStatus,
        ip: checkIp ? checkIp : "",
        source_name: "144832430081",
      }).unwrap();

      if (window.conversion_code) {
        window.gtag("event", "conversion", {
          send_to: window.conversion_code,
          event_callback: () => {
            return;
          },
        });
      }

      setFormStatus(`Payment ${paymentStatus}! Order placed successfully!`);
      toast.success(`Payment ${paymentStatus}! Order placed successfully!`);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        zipcode: "",
        country: "",
        state: "",
        city: "",
        payment_status: "Pending",
        delivery_method: "online",
      });

      // return window.location.href = `${process.env.SHOPIFY_URL}/${response?.response?.order?.id}/orders/${response?.response?.order?.token}`

      let trackingUrl = "";

      const bullriderorders = searchParams.get("bullriderorders");
      const taboola_tracking = searchParams.get("tbclid");

      if (bullriderorders) {
        trackingUrl = `http://syndication.exoclick.com/tag.php?goal=e5270d80fbf05cec38238d2c07049cbd&tag=${bullriderorders}`;
      } else if (taboola_tracking) {
        trackingUrl = `https://trc.taboola.com/actions-handler/log/3/s2s-action?click-id=${taboola_tracking}&name=lead`;
      }

      try {
        await fetch(trackingUrl, {
          method: "GET",
          mode: "no-cors",
        });
        // console.log('Conversion tracking URL hit successfully.');
      } catch (error) {
        // console.error('Failed to hit conversion tracking URL:', error);
      }

      return (window.location.href =
        "/order-status/?orderId=" + response?.response?.order?.id);
    } catch (error) {
      setFormStatus("Failed to submit form. Please try again.");
      return toast.error("Failed to submit form. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const original_date = Date.now();

      if (formData.delivery_method === "online") {
        try {
          const {
            id: order_id,
            currency,
            amount,
            rzp_key_id,
          } = await createRzyOrder({
            amount: formData.amount,
            currency: "INR",
            receipt: "PLF-" + original_date,
          }).unwrap();

          const options = {
            key: rzp_key_id,
            amount,
            currency,
            name: products?.vendor,
            description: "X - Transaction",
            image: products?.image?.src,
            order_id,
            handler: async function (response) {
              await handlePaymentSuccess(response, original_date);
            },
            prefill: {
              name: formData.first_name,
              email: formData.email,
              contact: formData.phone,
            },
            theme: {
              color: "#3399cc",
            },
          };

          const rzp = new Razorpay(options);

          rzp.on("payment.failed", function (response) {
            handlePaymentFailure(response, original_date);
          });

          rzp.on("payment.closed", function () {
            handlePaymentExit(original_date);
          });

          rzp.open();
        } catch (error) {
          return toast.error(resolveRTKError(error));
        }
      } else {
        createorderhandle("Pending");
      }
    } else {
      setFormStatus("Failed to submit order. Please try again.");
      return toast.error("Failed to submit order. Please try again.");
    }
  };

  const handlePaymentSuccess = async (response, order_id) => {
    const resPaymentStatus = await verifyPayment(response);

    if (resPaymentStatus.data.status === "success") {
      try {
        return createorderhandle("Paid");
      } catch (error) {
        return createorderhandle("Fail");
      }
    } else {
      return createorderhandle("Fail");
    }
  };

  const handlePaymentFailure = async (response, order_id) => {
    try {
      return createorderhandle("Fail");
    } catch (error) {
      return createorderhandle("Fail");
    }
  };

  const handlePaymentExit = async (order_id) => {
    try {
      return createorderhandle("Pending");
    } catch (error) {
      return createorderhandle("Fail");
    }
  };

  const ratingValue = 4.8;
  const totalStars = 5;

  const Benifits_brc = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div className="flex items-center gap-2" key={key}>
          <img
            src={e.img_benifits}
            className="md:w-10 w-8 py-1 "
            alt="benifits"
          />
          <div className="fontPoppins md:text-[0.9vw] text-[0.9rem] font-semibold text-black my-1">
            {e.benifits_content}
          </div>
        </div>
      );
    });
  };

  const reasons = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div key={key} className="">
          <img
            src={e.reason_img}
            className="mx-auto md:w-20 w-16 "
            alt="reason_img"
            loading="lazy"
          />
          <div className="md:text-md text-sm text-center text-black font-semibold pt-2">
            <div dangerouslySetInnerHTML={{ __html: e.reason_title }} />
          </div>
        </div>
      );
    });
  };

  const all_benefits = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div className=" bg-[#fff9ef] rounded-xl py-3 mx-2 " key={key}>
          <img
            src={e.benefits_img}
            className="w-5/6 mx-auto p-2 rounded-xl"
            alt="benefits_imgs"
          />
          <div className=" fontNoto text-center text-[1rem] md:text-[1.2vw] leading-tight font-semibold md:px-2 pt-2">
            {e.benefits_content}
          </div>
        </div>
      );
    });
  };

  const Ingrediants_all = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div className=" bg-[#fff9ef] rounded-xl py-3 mx-1 my-2 " key={key}>
          <div className=" fontNoto text-[#a06103]  text-center text-[1.6rem] md:text-[1.4vw]  font-extrabold ">
            {e.Ingrediants_title}
          </div>
          <img
            src={e.Ingrediants_img}
            className="w-5/6 mx-auto p-2 rounded-xl"
            alt="benefits_imgs"
          />
          <div className=" fontNoto text-center text-[1rem] md:text-lg leading-tight font-semibold md:px-6 pt-2  text-gray-700">
            {e.Ingrediants_content}
          </div>
        </div>
      );
    });
  };

  const What_we_offer = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div key={key} className="py-3">
          <img
            src={e.img_w_w_o}
            className="mx-auto md:w-24 w-16 "
            alt="reason_img"
            loading="lazy"
          />
          <div className="md:text-lg text-sm text-center text-gray-700 font-semibold pt-2">
            <div dangerouslySetInnerHTML={{ __html: e.w_w_o_title }} />
          </div>
        </div>
      );
    });
  };

  const delivery_options = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div
          className="flex items-center md:justify-center gap-2 md:py-3 py-1 "
          key={key}
        >
          <div className="">{e.icons}</div>
          <div className="fontPoppins">
            <div className="md:text-md text-md text-[#a06103] font-extrabold uppercase ">
              {e.title}
            </div>
            <div className="text-sm fontPoppins">{e.content}</div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    localStorage.setItem("PATH", "bullrider.shop");
  }, []);

  return (
    <div className="bg-zinc-500">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <ToastContainer />
      <div className=" sm:max-w-xl w-full mx-auto bg-white fontPoppins">
        <div className="mx-auto container">
          <Slider {...settings_p_m}>
            {product_img.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>

        <div className=" px-3 sm:px-5">
          <div className="my-6  grid ">
            <h2 className="fontPoppins text-3xl md:text-[2vw] font-extrabold text-gray-900 pt-3 md:mt-[11rem] mt-[6rem]">
              {/* {products?.title} */}
              Bull Rider Capsule
            </h2>
            <span className="text-[#b98625] sm:text-[1vw] text-md font-semibold pt-1">
              Ayurvedic Medicine For Strength, Stamina & Immunity
            </span>

            <div className="fontPoppins sm:flex items-center sm:space-x-3 space-x-2 pt-3">
              {/* Stars */}
              <div className="flex sm:pb-0 pb-2 text-[#ffd203]">
                {Array.from({ length: totalStars }, (_, index) => (
                  <IoStar
                    key={index}
                    color={
                      index < Math.round(ratingValue) ? "gold" : "lightgray"
                    }
                    size={26}
                  />
                ))}
              </div>

              {/* Rating Text */}
              <span className="sm:text-lg font-medium">Excellent</span>

              {/* Rating Value */}
              <span className="sm:text-lg font-semibold">{ratingValue}</span>

              {/* Divider */}
              <span className="sm:text-lg">|</span>

              {/* Number of Reviews */}
              <span className="sm:text-lg font-semibold">59 reviews</span>

              {/* Trusted Reviews */}
              <span className="text-sm text-gray-500">trusted reviews</span>
            </div>

            <div className="sm:px-2 text-left my-3 md:my-5">
              {Benifits_brc([
                {
                  img_benifits:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2f0d9d4f-59e6-4c42-29cd-94602bd7ca00/public",
                  benifits_content:
                    "स्ट्रेंथ, एनर्जी और स्टैमिना बढ़ाने में मददगार ",
                },
                {
                  img_benifits:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1482b6ab-bf6d-459e-56d2-c33afa8c6f00/public",
                  benifits_content: "वैवाहिक जीवन खुशहाल बनाने में मददगार",
                },

                {
                  img_benifits:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8d346116-5231-4b0f-c048-c13771eefd00/public",
                  benifits_content: "पूरे दिन जोश और ऊर्जा का एहसास",
                },
                {
                  img_benifits:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2f119d2f-1c67-4161-3f89-414ad776bf00/public",
                  benifits_content: "मसल स्ट्रेंथ और मसल रिकवरी में मददगार",
                },
              ])}
            </div>

            <div className=" text-black px-2 py-2 sm:p-4 rounded-lg sm:mt-4 mt-2 -mx-1 border border-yellow-800 border-dashed">
              <h3 className="text-lg font-semibold">OFFER</h3>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Get {discount}% instant discount on online payment</li>
                <li>COD available</li>
              </ul>
            </div>

            <div className="flex items-center py-2 space-x-2 mt-4">
              <span className="text-gray-500 text-lg line-through">
                ₹{parseInt(selectProducts?.compare_at_price)}
              </span>
              <span className="text-4xl font-extrabold text-gray-900">
                <span>₹{parseInt(subtotal)}</span>
              </span>
              <span className="clip_off text-black text-sm font-semibold bg-yellow-300 px-4 py-0.5 ">
                {parseInt(
                  ((selectProducts?.compare_at_price - selectProducts?.price) /
                    selectProducts?.compare_at_price) *
                  100
                )}
                % off
              </span>
            </div>

            {/* Size Info */}
            <div className="flex items-center my-2">
              <span className="text-lg font-semibold">Size:</span>
              <span className="bg-yellow-100 text-yellow-600 font-semibold py-1 px-2 rounded-md ml-2">
                {selectProducts?.title}
              </span>
            </div>

            <div className="grid grid-cols-12 items-center gap-3 fontPoppins py-2">
              {/* Main Message */}
              <div className="md:col-span-8 col-span-7  text-left">
                <h2 className="sm:text-[1.6vw] text-md font-extrabold">
                  Buy more, Save more!
                </h2>
                <p className="text-gray-600 text-sm fontPoppins text-left">
                  Don't miss out on these amazing deals!
                </p>
              </div>

              {/* Special Offer Button */}
              <div className="md:col-span-4 col-span-5 mx-auto">
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md md:text-md text-sm">
                  Special offer!
                </button>
              </div>
            </div>

            {/* <div className="flex  items-center gap-3 mt-3">
              <label className="text-lg font-semibold">Quantity:</label>
              <div className="flex border border-yellow-400 w-fit  items-center space-x-2 bg-yellow-100">
                <button
                  type="button"
                  onClick={() =>
                    dispatch(decrementQuantity({ quantity: quantity }))
                  }
                  disabled={quantity <= 1}
                  className="bg-yellow-100 px-2 py-1 "
                >
                  -
                </button>
                <span className="px-5">{quantity}</span>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(incrementQuantity({ quantity: quantity }))
                  }
                  disabled={quantity >= 5}
                  className="bg-yellow-100 px-2 py-1 "
                >
                  +
                </button>
              </div>
            </div> */}

            <div className="grid grid-cols-1 items-center py-3 mt-2 selectedItem ">
              {allVariants?.map((variant, key) => {
                return (
                  <label
                    key={variant.id}
                    value={variant.id}
                    htmlFor={variant.id}
                    className={`relative`}
                  >
                    {key === 1 && (
                      <div className="absolute top-0 left-0 bg-[#df7700] px-1 rounded-ss-lg z-10 text-white text-sm">
                        Most popular
                      </div>
                    )}
                    <div
                      className={`border rounded-lg p-2 sm:p-4 mb-4 sm:flex items-center justify-between gap-5 ${selectProducts.id === variant.id ? "activeStatus2" : ""
                        }`}
                    >
                      <div
                        className={`flex items-center gap-3 ${key === 1 && "pt-5"
                          }`}
                      >
                        <input
                          type="radio"
                          id={variant.id}
                          name="name"
                          value={variant.id}
                          onChange={handleChangeSingleVarient}
                          checked={selectProducts.id === variant.id}
                        />
                        <div>
                          <h3 className="font-bold text-md">
                            {variant?.title} (
                            {parseInt(
                              ((variant?.compare_at_price - variant?.price) /
                                variant?.compare_at_price) *
                              100
                            )}
                            % off)
                          </h3>
                          <p className="text-sm text-gray-500">
                            (extra 10% discount on online payment)
                          </p>
                        </div>
                      </div>
                      <div className="text-left ms-5 sm:ms-0 flex items-center gap-2 sm:block ">
                        <p
                          className="line-through text-md text-gray-400"
                          style={{ textDecoration: "line-through red" }}
                        >
                          ₹{parseInt(variant?.compare_at_price)}
                        </p>

                        <p className="text-green-700 font-bold text-2xl">
                          ₹{parseInt(variant?.price)}
                        </p>
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
            <div className="sm:flex items-center gap-3">
            {/* <div className="flex  items-center gap-3 mt-2 mb-5">
              <label className="text-lg font-semibold">Quantity:</label>
              <div className="flex border border-yellow-400 w-fit  items-center space-x-2 bg-yellow-100">
                <button
                  type="button"
                  onClick={() =>
                    dispatch(decrementQuantity({ quantity: quantity }))
                  }
                  disabled={quantity <= 1}
                  className="bg-yellow-100 px-2 py-1 "
                >
                  -
                </button>
                <span className="px-5">{quantity}</span>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(incrementQuantity({ quantity: quantity }))
                  }
                  disabled={quantity >= 5}
                  className="bg-yellow-100 px-2 py-1 "
                >
                  +
                </button>
              </div>
            </div> */}
            <ShiProcket/>
         
        </div>

            <div className="text-[#b59c49] md:text-md text-sm bg-[#fff9ef] p-1 font-semibold px-2">
              Get extra 10% discount on online payment
            </div>
          </div>

          <div className=" grid grid-cols-4 gap-5  mx-1">
            {reasons([
              {
                reason_img:
                  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dfdd2c54-e5f0-47af-d805-a440a3cd4a00/public",
                reason_title: "ISO Certified",
              },
              {
                reason_img:
                  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c27825f6-1dea-48f7-cb9b-c8b2309c2300/public",
                reason_title: "FDA approved",
              },
              {
                reason_img:
                  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/56e95e80-2ee4-45fc-ce12-fcfd650e7100/public",
                reason_title: "Pure Ayurvedic",
              },
              {
                reason_img:
                  "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b0480c36-7e8d-4968-db61-7c5fd2249500/public",
                reason_title: "GMP Certified",
              },
            ])}
          </div>

          <img
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e87c6e29-6fc5-41dd-cde9-912aca28dc00/public"
          sizes="560px"
          alt="checkout "
          loading="lazy"
          className="mx-auto mt-2 mb-5 sm:mt-5 sm:mb-10"
          width="560"
          height="326"
        />

          {/* <div className="">
            <button className="bg-[#fee600] text-black text-2xl font-semibold py-2 my-6 w-full rounded-xl shoporder">
              <Link
                href={{
                  pathname: "/checkouts/",
                  query: { tbclid: taboola_tracking },
                }}
              >
                BUY NOW
              </Link>
            </button>
          </div> */}

          <div className=" text-[#a06103] font-extrabold sm:text-[2vw] text-[1.6rem] w-full ">
            Key Benifits
          </div>

          <div className="py-2 mb-3">
            <Slider {...settings_key_benifits}>
              <div className="">
                {all_benefits([
                  {
                    benefits_img:
                      "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5ab1695f-f4d5-4e2c-f2a2-d0aede17d500/public",
                    benefits_content:
                      "स्ट्रेंथ, एनर्जी और स्टैमिना बढ़ाने में मददगार ",
                  },
                ])}
              </div>
              <div className="">
                {all_benefits([
                  {
                    benefits_img:
                      "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0458bb6a-54f4-482e-9876-3941b2df2a00/public",
                    benefits_content: "पूरे दिन जोश और ऊर्जा का एहसास",
                  },
                ])}
              </div>
              <div className="">
                {all_benefits([
                  {
                    benefits_img:
                      "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e19d97c7-b53b-449c-b04e-0ff5ebb51400/public",
                    benefits_content: "मसल स्ट्रेंथ और मसल रिकवरी में मददगार",
                  },
                ])}
              </div>
              <div className="">
                {all_benefits([
                  {
                    benefits_img:
                      "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6dd343e2-879e-4388-8718-721fea334700/public",
                    benefits_content: "वैवाहिक जीवन खुशहाल बनाने में मददगार",
                  },
                ])}
              </div>
            </Slider>
          </div>

          <div className=" text-[#a06103] font-extrabold sm:text-[2vw] text-[1.6rem] w-full py-3 ">
            Key Ingredients
          </div>

          <div className="flex items-center border rounded-lg p-1 border-black my-1">
            <div className="flex-shrink-0">
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a1a62879-8c69-44f6-45e4-a1cd1ec58300/public"
                alt="100%"
                className="w-5/6 mx-auto"
              />
            </div>

            <div className="ml-4">
              <h1 className="text-lg font-semibold">13 Ayurvedic Herbs</h1>
            </div>
          </div>

          <div className="py-2 mb-3">
            <div className="grid grid-cols-2 items-center ">
              {Ingrediants_all([
                {
                  Ingrediants_title: "अश्वगंधा",
                  Ingrediants_img:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1c4ba9c2-d013-4727-98e0-dd23be25d700/public",
                  Ingrediants_content:
                    "तनाव को कम करता है और स्टैमिना बढ़ाता है ",
                },
                {
                  Ingrediants_title: "शिलाजीत",
                  Ingrediants_img:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/25e892f4-9640-4b63-4f10-e8b6a7a58000/public",
                  Ingrediants_content:
                    "टेस्टोस्टेरोन लेवल और विटेलिटी को बढ़ाता है ",
                },
                {
                  Ingrediants_title: "सफेद मूसली",
                  Ingrediants_img:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a93417bd-aa3b-44b3-d8bd-b81742f3b600/public",
                  Ingrediants_content: "ऊर्जा, ताकत और स्टैमिना को बढ़ाता है",
                },
                {
                  Ingrediants_title: "गोक्षुरा",
                  Ingrediants_img:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/823a0e55-a487-4268-02df-48881aa8c100/public",
                  Ingrediants_content:
                    "जोश एवं ऊर्जा बढ़ाकर पूरे दिन एनर्जेटिक रखता है ",
                },
              ])}
            </div>

            <p className="fontNoto text-lg md:text-xl font-extrabold pt-5 px-2">
              और +9 जड़ी-बूटियाँ जो आपके समग्र स्वास्थ्य को बेहतर बनाने में मदद
              करती है!
            </p>
          </div>

          <div className="bg-[#fff9ef] ">
            <div className=" text-[#a06103] font-extrabold sm:text-[2vw] text-[1.6rem] w-full py-3 pl-2">
              What We Offer
            </div>

            <div className="grid grid-cols-2 ">
              {What_we_offer([
                {
                  img_w_w_o:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/83e694bb-deec-4281-7750-fa7df27ef400/public",
                  w_w_o_title: "COD Payment<br/> Available",
                },
                {
                  img_w_w_o:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b89643de-5a42-425c-bea9-4d5fa0c9bb00/public",
                  w_w_o_title: "Big Discount<br/> in Festival Season",
                },
                {
                  img_w_w_o:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/42ffae41-344c-4b70-1827-a3e73708e100/public",
                  w_w_o_title: "First choice<br/> of men in India",
                },
                {
                  img_w_w_o:
                    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2ff59303-f4f2-4bab-1f8c-8285ab3a5500/public",
                  w_w_o_title: "Save 10% Extra<br/> on Prepaid",
                },
              ])}
            </div>
          </div>

          <div className="">
            <div className=" text-[#a06103] font-extrabold sm:text-[1.9vw] text-[1.4rem] w-full py-4 leading-tight">
              Right Way of Consumption
            </div>

            <div className="">
              <ul className="list-disc fontNoto ml-5 text-xl">
                <li>सुबह और रात्रि भोजन के बाद एक कैप्सूल दूध/पानी के साथ</li>
                <li>बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें</li>
                <li>एक महीने के अंदर प्रदर्शन में सुधार अनुभव कर सकते है</li>
              </ul>
            </div>

            <div className=" text-[#a06103] font-extrabold sm:text-[1.9vw] text-[1.4rem] w-full py-4 leading-tight">
              Details of Bull Rider Capsule
            </div>

            <p className="fontNoto  text-justify">
              Bull Rider Capsule एक शुद्ध प्राकृतिक और सुरक्षित उत्पाद है। इसके
              नेचुरल हर्ब्स बिना किसी भी तरह के साइड इफेक्ट्स के आपको ऊर्जावान
              और बेहतर परफ़ॉर्मर बनाकर अपने लक्ष्यों को हासिल करने में मदद करते
              हैं। इतना ही नहीं अगर लाइफ में खुशहाली बढ़ाना चाहते है पार्टनर के
              चेहरे पर संतुष्टि भरी मुस्कान देखना चाहते है तो Bull Rider Capsule
              को अपने जीवन में एक बार शामिल करके इसका कमाल देखे !
            </p>

            <img
              src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/92a487f8-6b6a-46fd-2848-154252c47b00/public"
              alt=""
              className="w-full rounded-xl  my-2"
            />

            <p className="text-[#a06103] fontNoto font-extrabold py-3">
              आज ही Bull Rider Capsule आज़माएं और अपने एनर्जी लेवल को उच्च स्तर
              पर ले जाएँ!
            </p>

            <p className="fontNoto  text-justify">
              इसके सेवन से पूरे दिन ताकत और स्फूर्ति महसूस कर सकते है। जिम के
              कठिन वर्कआउट के लिए जिस हाई एनर्जी की जरूरत होती है उसकी पूर्ति
              करने में मदद करेगा और जल्द होने वाली थकान से छुटकारा मिलेगा। इतना
              ही नहीं इसके पावरफुल इंग्रेडिएंट्स की मसल स्ट्रेंथ और पोस्ट
              वर्कआउट मसल रिकवरी में उपयोगिता सिद्ध हुई है।
            </p>

            <img
              src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4e96c721-fe79-471e-998b-5c19ce6ae000/public"
              alt=""
              className="w-full  my-2"
            />

            <p className="fontNoto  text-justify pt-3">
              यह उत्पाद{" "}
              <span className="text-[#a06103] font-semibold">
                GMP, ISO, और FDA{" "}
              </span>
              द्वारा अनुमोदित है। यह एक उच्च क्वालिटी आयुर्वेदिक उत्पाद है जिसे
              स्ट्रेंथ, स्टैमिना और एनर्जी बढ़ाने के साथ-साथ वैवाहिक जीवन में
              खुशहाली बढ़ाने के लिए{" "}
              <span className="text-[#a06103] font-semibold">
                भारतीय पुरुषों द्वारा बड़े पैमाने पर इस्तेमाल किया जा रहा है।
              </span>
            </p>

            <img
              src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/74172802-1641-4420-39c4-7bcfe092be00/public"
              className="w-full rounded-xl  my-2"
            />

            <p className="text-[#a06103] fontNoto text-xl font-extrabold py-3">
              <span className="text-2xl">महसूस ना हो थकान,</span> <br />
              आयुर्वेदिक तरीके से सालों- साल रहें जवान
            </p>

            <div className=" text-black font-extrabold sm:text-[2vw] text-[1.6rem] w-full py-4 leading-tight">
              Heres What our
              <br /> Customers Says
            </div>

            <ReviewSection />
          </div>

          <div className="my-5">
            <YoutubeFrame vid="pTE4dr5C_Bo?si=Z6FXVUKE4waUdmcU" className="" />
          </div>

          <div className="py-2">
            <div className="text-sm  pt-4 text-black">
              We are available on:-
            </div>

            <div className="flex items-center gap-7 py-2">
              <a href="https://bit.ly/3JvDOKa">
                <img
                  src="/checkout_images/flipkart.png"
                  alt=""
                  className="sm:w-28 w-20 mx-auto"
                />
              </a>
              <a href="https://amzn.to/49VCQC0">
                <img
                  src="/checkout_images//amazon.png"
                  alt=""
                  className="sm:w-24 w-20 mx-auto "
                />
              </a>
            </div>
          </div>

          <div className="py-2">
            <div className="text-sm  pt-4 text-black">We accept:-</div>
            <img
              src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eecd9cfe-706a-4d7f-0556-a9f504eb7d00/public"
              alt=""
              className="w-5/6 pt-2"
            />
          </div>

          <hr className="my-3" />

          <div className="grid md:grid-cols-2 items-center gap-2 py-4 px-2">
            {delivery_options([
              {
                icons: <TbTruckDelivery size={50} />,
                title: "Free Shipping",
                content: "Shipping on all prepaid orders",
              },
              {
                icons: <GiTakeMyMoney size={50} />,
                title: "COD Available",
                content: "Pay after recieving your pack",
              },
              {
                icons: <IoMdEyeOff size={50} />,
                title: "Discreet Delivery",
                content: "Discreet Delivery all over India",
              },
              {
                icons: <CiPercent size={50} />,
                title: "Prepaid Offer",
                content: "Save extra 10% on prepaid orders",
              },
            ])}
          </div>

          <section className="bg-black">
            <div className="max-w-7xl mx-auto py-7 ">
              <div className="sm:hidden block">
                <img
                  src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/beba635f-ed41-4131-6f07-3aa09a652500/public"
                  alt=""
                  className=" w-2/5 mx-auto"
                />
              </div>
              <div className=" grid grid-cols-2 text-center items-center justify-center gap-2 sm:gap-5 py-10 px-2">
                <div className="sm:block hidden">
                  <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/beba635f-ed41-4131-6f07-3aa09a652500/public"
                    alt=""
                    className=" w-3/4 sm:mx-auto "
                  />
                </div>

                <div className="">
                  <div className="text-gray-400 font-extrabold text-2xl">
                    Bull Rider
                  </div>
                  <ul className="text-white py-2 text-sm">
                    <li>About Us</li>
                    <li>Testimonials</li>
                    <li>Benefits</li>
                    <li>Reviews</li>
                    <li>Videos</li>
                  </ul>
                </div>

                <div className="">
                  <div className="text-gray-400 font-extrabold text-2xl">
                    Herbs
                  </div>
                  <ul className="text-white py-2 text-sm">
                    <li>Shilajit Suddha</li>
                    <li>Ashwagandha Ghana</li>
                    <li>Kaucha ghana</li>
                    <li>Shwet Musli</li>
                    <li>Gokshura</li>
                  </ul>
                </div>

                <div className="">
                  <div className="text-gray-400 font-extrabold text-2xl">
                    Terms
                  </div>
                  <ul className="text-white py-2 text-sm">
                    <Link href={"shipping-info"}>Delivery information</Link>
                    <br />
                    <Link href={"privacy-policy"}>Privacy Policy</Link>
                    <br />
                    <Link href={"return-refund"}>Return & Refund Policy</Link>
                    <br />
                    <Link href={"terms-conditions"}>Terms & Conditions</Link>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500 text-black text-sm mx-auto  text-center py-3 sm:mb-0 mb-16">
              All rights reserved © 2024 Bull Rider Capsule
            </div>
          </section>
        </div>
      </div>

      <BottomPopupForm />
    </div>
  );
};

export default Page;
