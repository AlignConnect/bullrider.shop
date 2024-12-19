import axios from "axios";
import Joi from "joi";
export class CheckoutFile {
  constructor() {}

  static getCheckOutData = async ({
    APP_API_URL,
    get_next_key,
    get_next_url,
  }) => {
    const url =
      process.env.NEXT_APP_API_URL +
      "product/fetch_with_api_key?api_key=" +
      get_next_key;

    const res = await fetch(url, {
      headers: {
        web_site_url: get_next_url,
      },
    });

    if (!res.ok) {
      throw new Error("Interal Server Error Please Try out After some Time");
    }
    return await res.json();
  };

  //this is for joi validation

  static joiValidator = (formdata) => {
    const schema = Joi.object({
      name: Joi.string().trim().required(),
      phone: Joi.string()
        .regex(/^[6-9]\d{9}$/)
        .required()
        .messages({ "string.regex": "Please Fill Correct Value" }),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      pincode: Joi.number().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      address: Joi.string(),
    });

    const { error, value } = schema.validate(formdata, {
      allowUnknown: false,
      abortEarly: true,
      stripUnknown: false,
    });

    if (error) {
      throw error.message;
    }
    return value;
  };

  // this is for generate pincode ,city and state

  static PincodeValidation = async (pincodevalue) => {
    const url = "https://api.postalpincode.in/pincode/" + Number(pincodevalue);
    const pinCode = await fetch(url)
      .then((v) => v)
      .then((response) => response.json())
      .catch((err) => err);
    // console.log(pinCode[0].PostOffice[0].State)
    return {
      pincode: pincodevalue,
      state: pinCode[0].PostOffice[0].State,
      city: pinCode[0].PostOffice[0].District,
    };
  };

  //this is for create order in brahmikalp

  static createOrder = async (formdata) => {
    const orderData = {
      customer_name: formdata.name,
      customer_phone: String(formdata.phone),
      customer_email: formdata.email,
      customer_address: formdata.address,
      pincode: String(formdata.pincode),
      state: formdata.state,
      city: formdata.city,
      postOffice: null,
      product: formdata.id,
      product_name: formdata.product_name,
      price: formdata.price,
      discount: formdata.discount,
      totalPrice: formdata.price - formdata.discount,
      payment_mode: formdata.online ? "online" : "cod",
      form_id: null,
    };

    try {
      const { get_next_url, get_next_key } = handleCheckApiKey();

      const url =
        process.env.NEXT_APP_API_URL + "order/create?api_key=" + get_next_key;

      const response = await axios.post(url, orderData, {
        headers: {
          "Content-Type": "application/json",
          web_site_url: get_next_url,
        },
      });

      return response;
    } catch (error) {
      throw error.message;
    }
  };

  static PaymentInitial = (paymentdata, setalertVerify) => {
    const options = {
      key: paymentdata.razorpay_key_id,
      amount: paymentdata.amount,
      name: paymentdata.product_name,
      description: "X - Transaction",
      image: window.location.origin + paymentdata.img,
      order_id: paymentdata.id,
      notes: { merchant_order_id: "SGI-" + paymentdata.OrderId },
      prefill: {
        name: paymentdata.customer_name,
        email: paymentdata.customer_email,
        contact: paymentdata.customer_phone,
      },
      handler: async (response) => {
        response["receipt"] = paymentdata.receipt;

        try {
          const { get_next_url, get_next_key } = handleCheckApiKey();

          const { data } = await axios.post(
            `${process.env.NEXT_APP_API_URL}order/verify?api_key=${get_next_key}`,
            response,
            { headers: { web_site_url: get_next_url } }
          );

          if (data.message === "Payment verified successfully") {
            return (window.location.href = `${process.env.NEXT_APP_URL}/order-status?orderId=${paymentdata?.OrderId}`);
            //  setalertVerify((e) => ({ open: true, message: "Payment Success" }))
            // return alert("PAYMENT SUCCESS")
          } else {
            // return setalertVerify((e) => ({ open: true, message: "Payment Failed" }))
            return alert("PAYMENT FAILED");
          }
        } catch (error) {
          // return setalertVerify((e) => ({ open: true, message: "Something Went Wrong" }))
          return alert("PAYMENT CATCH FAILED");
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      options.handler(response);
    });
    rzp1.open();
  };
}

//this function used to checkapi before the order create

export const handleCheckApiKey = () => {
  let get_next_url = "";
  let get_next_key = "";

  const apicheck = localStorage.getItem("PATH_KEY");

  if (!apicheck) {
    get_next_url = process.env.NEXT_APP_URL;
    get_next_key = process.env.NEXT_APP_API_KEY;
  } else {
    switch (apicheck) {
      case "/":
        get_next_url = process.env.NEXT_APP_URL;
        get_next_key = process.env.NEXT_APP_API_KEY;
        break;

      case "/bra":
        get_next_url = process.env.NEXT_APP_URL_BRA;
        get_next_key = process.env.NEXT_APP_API_KEY_BRA;
        break;

      case "/brb":
        get_next_url = process.env.NEXT_APP_URL_BRB;
        get_next_key = process.env.NEXT_APP_API_KEY_BRB;
        break;

      case "/brx":
        get_next_url = process.env.NEXT_APP_URL_BRX;
        get_next_key = process.env.NEXT_APP_API_KEY_BRX;
        break;

      case "/brt":
        get_next_url = process.env.NEXT_APP_URL_BRT;
        get_next_key = process.env.NEXT_APP_API_KEY_BRT;
        break;

      case "/brcart":
        get_next_url = process.env.NEXT_APP_URL_BRCART;
        get_next_key = process.env.NEXT_APP_API_KEY_BRCART;
        break;

      case "/brf":
        get_next_url = process.env.NEXT_APP_URL_BRF;
        get_next_key = process.env.NEXT_APP_API_KEY_BRF;
        break;

      case "/brct":
        get_next_url = process.env.NEXT_APP_URL_BRCT;
        get_next_key = process.env.NEXT_APP_API_KEY_BRCT;
        break;

      case "/brcf":
        get_next_url = process.env.NEXT_APP_URL_BRCF;
        get_next_key = process.env.NEXT_APP_API_KEY_BRCF;
        break;

      default:
        get_next_url = process.env.NEXT_APP_URL;
        get_next_key = process.env.NEXT_APP_API_KEY;
        break;
    }
  }

  return { get_next_url, get_next_key };
};
