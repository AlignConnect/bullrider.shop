"use client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateOrderMutation,
  useCreateRzyOrderMutation,
  useFetchProductsQuery,
  useVerifyPaymentMutation,
} from "../../redux/services/products";
import { resolveRTKError } from "../../redux/rtkQuery";
import dynamic from "next/dynamic";
import Script from "next/script";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSelectedProduct,
  decrementQuantity,
  incrementQuantity,
} from "@/redux/slices/ProductInfo";
import Loader from "../commonUse/Loader";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const YoutubeFrame = dynamic(() => import("./components/YoutubeFrame"), {
  loading: () => <p>load</p>,
});

const Page = () => {
  const navigate = useRouter();

  const dispatch = useDispatch();

  const [tagsall, settagsall] = useState("bullrider.shop");

  const [errors, setErrors] = useState("");

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

  const searchParams = useSearchParams();
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
    let isValid = true;

    const newErrors = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      zipcode: "",
      country: "",
      state: "",
      city: "",
    };

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
        newErrors[field] = `${field.replace("_", " ")} is required`;
        isValid = false;
        // break;
      }
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    if (!/^[6789]\d{9}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must start with 6, 7, 8, or 9 and be 10 digits";
      isValid = false;
    }
    if (!/^\d{6}$/.test(formData.zipcode)) {
      newErrors.zipcode = "zipcode must be 6 digits";
      isValid = false;
    }

    console.log("newErrors: ", newErrors);
    setErrors(newErrors);

    if (!isValid) {
      toast.error("Please correct the errors in the form.");
    }

    return isValid;
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

  return (
    <div className="bg-zinc-500 relative">
      <Loader visible={isSubmitting} />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <ToastContainer />
      <div className=" sm:max-w-2xl w-full mx-auto bg-[#f7f9f6] fontPoppins">
        <Link href="/">
          <img
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/beba635f-ed41-4131-6f07-3aa09a652500/public"
            alt="Logo"
            className="w-32 mx-auto"
            width="100%"
            height="100%"
            loading="lazy"
          />
        </Link>

        <div class=" mb-5 bg-green-700 text-center text-white py-1">
          <span class="">GET 10% OFF ON ALL PREPAID ORDERS</span>
        </div>

        <div className="px-3 sm:px-5">
          <Accordion className="!bg-inherit">
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-semibold"
            >
              <div className="flex justify-between gap-5 !text-md w-full">
                <div className=""> Order Summary ({quantity} item)</div>
                <div className="pe-3"> ₹{parseInt(subtotal)}</div>
              </div>
            </AccordionSummary>
            <AccordionDetails className="bg-zinc-100">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <span>Sub total</span>
                  <span>₹{parseInt(subtotal)}</span>
                </div>

                <div className="flex space-x-4">
                  <img
                    src={products?.image?.src}
                    alt={products?.title}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col">
                      <span>{products?.title?.split("-")[0]}</span>
                      {console.log("products: ", products)}
                      <span>{selectProducts?.title}</span>

                      <span>Qty: {quantity}</span>
                    </div>
                    <div className="">
                      <span>₹{selectProducts?.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* <div className="">
          <div className="">
            <Slider {...settings}>
              <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bfca7edd-fbc8-4c4b-9aea-97d352443700/public" />
              </div>
              <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ac3be94c-874d-43db-6075-4b8769dae200/public" />
              </div>
              <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4ff9cc18-a234-4dce-b696-7b812073a800/public" />
              </div>
              <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/11128aae-552f-4b9d-cf47-0d3af9e7c900/public" />
              </div>
            </Slider>
          </div>
        </div> */}

        <div className=" px-3 sm:px-5">
          <div className="py-6  grid ">
            {/* <h2 className="text-xl md:text-2xl font-semibold text-gray-900 pt-2">
              {products?.title}
            </h2>
            <div className="flex items-baseline space-x-2 mt-4">
              <span className="text-red-500 text-lg line-through">
                ₹{parseInt(selectProducts?.compare_at_price)}
              </span>
              <span className="text-3xl font-semibold text-gray-900">
                <span>₹{parseInt(subtotal)}</span>
              </span>
              <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-0.5 rounded-full">
                {parseInt(
                  ((selectProducts?.compare_at_price - selectProducts?.price) /
                    selectProducts?.compare_at_price) *
                    100
                )}
                % off
              </span>
            </div> */}

            {/* <div className="grid grid-cols-1 items-center py-3 mt-2 selectedItem ">
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
                      className={`border rounded-lg p-2 sm:p-4 mb-4 sm:flex items-center justify-between gap-5 ${
                        selectProducts.id === variant.id ? "activeStatus2" : ""
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 ${
                          key === 1 && "pt-5"
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
            </div> */}

            <div className="bg-green-50 text-green-700 px-2 py-4 sm:p-4 rounded-lg sm:mt-4 mt-2 -mx-1 border border-green-800 border-dashed">
              <h3 className="text-lg font-semibold">OFFER</h3>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Get {discount}% instant discount on online payment</li>
                <li>COD available</li>
              </ul>
            </div>

            {/* <div className="flex  items-center gap-3 mt-3 mb-5">
              <label className="block text-sm text-gray-700 font-semibold">
                Quantity:
              </label>
              <div className="flex border border-black w-fit  items-center space-x-2">
                <button
                  type="button"
                  onClick={() =>
                    dispatch(decrementQuantity({ quantity: quantity }))
                  }
                  disabled={quantity <= 1}
                  className="bg-gray-200 px-2 py-1 "
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
                  className="bg-gray-200 px-2 py-1 "
                >
                  +
                </button>
              </div>
            </div> */}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="rounded-xl shadow-md space-y-4 p-3  bg-white">
              <div className="flex space-x-3">
                <div className="flex-1">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className={`mt-1 block w-full border ${
                      errors.first_name ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm p-2`}
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.first_name}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className={`mt-1 block w-full border ${
                      errors.last_name ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm p-2`}
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.last_name}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={`mt-1 block w-full border ${
                    errors.first_name ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm p-2`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <div className="relative">
                  <span className="absolute top-2 text-lg px-2 border-r-2">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className={`mt-1 block w-full border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm p-2 pl-14`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex space-x-3">
                <div className="flex-1">
                  <label
                    htmlFor="zipcode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pincode
                  </label>
                  <input
                    id="zipcode"
                    type="text"
                    maxLength="6"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    autoComplete="postal-code"
                    className={`mt-1 block w-full border ${
                      errors.zipcode ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm p-2 `}
                  />
                  {errors.zipcode && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.zipcode}
                    </p>
                  )}
                </div>

                <div className=" flex-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    autoComplete="locality"
                    className={`mt-1 block w-full border ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm p-2 `}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  value={formData.state || ""}
                  onChange={handleChange}
                  autoComplete="state"
                  className={`mt-1 block w-full border ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm p-2 `}
                />
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  autoComplete="country"
                  className={`mt-1 block w-full border ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm p-2 `}
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  autoComplete="street-address"
                  className={`mt-1 block w-full border ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm p-2 `}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>
              {/* <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comment
                </label>
                <input
                  id="tags"
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  autoComplete="off"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div> */}
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mt-8">
              Payment method
            </h2>
            <div className="mt-4">
              <label className="flex items-center space-x-3 border px-2 py-3 rounded-md">
                <input
                  type="radio"
                  name="delivery_method"
                  value="online"
                  defaultChecked
                  className="text-green-600 focus:ring-green-500"
                  onChange={handleChange}
                />
                <div className="w-7/12 sm:w-8/12  items-center space-x-2">
                  <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eecd9cfe-706a-4d7f-0556-a9f504eb7d00/public"
                    alt="Paytm"
                    className=""
                  />
                </div>
                <span className="text-green-600 text-xs font-semibold col-span-2">
                  Extra {discount}% off
                </span>
              </label>
              <label className="flex items-center space-x-3 mt-4 border p-2 rounded-md">
                <input
                  type="radio"
                  name="delivery_method"
                  value="cod"
                  className="text-gray-600 focus:ring-green-500"
                  onChange={handleChange}
                />
                <span className="text-gray-800">Cash on delivery</span>
              </label>
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mt-8">
              Order info
            </h2>
            <div className="bg-green-500 text-white p-4 rounded-lg mt-4">
              <div className="flex justify-between text-sm">
                <span>Sub total</span>
                <span>₹{parseInt(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Qty</span>
                <span>x {quantity}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Shipping Cost</span>
                <span>Free</span>
              </div>
              {formData.delivery_method !== "cod" && (
                <div className="flex justify-between text-sm mt-2">
                  <span>Discount({discount}%)</span>
                  <span>-₹{formData.discount_amount}</span>
                </div>
              )}
              <div className="border-t border-green-400 mt-3"></div>
              <div className="flex justify-between font-bold text-lg mt-3">
                <span>Total</span>
                <span>₹{parseInt(formData.amount)}</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-200 hover:bg-yellow-300 text-green-900 font-semibold py-2 px-4 rounded-lg w-full mt-4"
              >
                Place Order
              </button>
            </div>
          </form>

          <div className="flex justify-around text-center text-gray-700 mt-6">
            <div>
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b817eb42-9165-400c-4947-0dc9142fec00/public"
                alt="100% organic"
                className="h-8 mx-auto"
              />
              <p className="text-xs mt-2">100% organic</p>
            </div>
            <div>
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1b0073a2-efe5-4626-62e7-fa5cacdddc00/public"
                alt="Toxic free"
                className="h-8 mx-auto"
              />
              <p className="text-xs mt-2">Toxic free</p>
            </div>
            <div>
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2770bcc4-17b9-4e22-088a-1334e1482800/public"
                alt="Secure payments"
                className="h-8 mx-auto"
              />
              <p className="text-xs mt-2">Secure payments</p>
            </div>
            <div>
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/162709bc-60b9-40f8-4c96-d1d1571e5500/public"
                alt="Free shipping"
                className="h-8 mx-auto"
              />
              <p className="text-xs mt-2">Free shipping</p>
            </div>
          </div>

          <div className="my-5">
            <YoutubeFrame vid="pTE4dr5C_Bo?si=Z6FXVUKE4waUdmcU" className="" />
          </div>

          <div className="text-center mt-3">
            <img
              src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/beba635f-ed41-4131-6f07-3aa09a652500/public"
              alt="Logo"
              className="w-32 mx-auto"
              width="100%"
              height="100%"
              loading="lazy"
            />

            <p className="text-md mt-2 font-semibold">{products?.vendor}</p>
            <p className="text-md mt-1">
              FF 14, Ujala Avenue, Sarkhej Road, Vishala, Ahmedabad Gujarat
              (INDIA) - 380055
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
