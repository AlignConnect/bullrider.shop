"use client";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import dynamic from "next/dynamic";


import BottomPopupForm from "./components/bottompopup/BottomHandler";
import { useDispatch, useSelector } from "react-redux";


const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <p>Loading...</p>,
});

const Header = dynamic(() => import("../brcgg/components/Header"), {
  loading: () => <p>Header is Loading...</p>,
});

const Recommendation = dynamic(
  () => import("../brcgg/components/Recommendation"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Feel = dynamic(() => import("../brcgg/components/Feel"), {
  loading: () => <p>Loading...</p>,
});

const Active_Life = dynamic(() => import("../brcgg/components/Active_Life"), {
  loading: () => <p>Loading...</p>,
});

const Key_benifits = dynamic(() => import("../brcgg/components/Key_benifits"), {
  loading: () => <p>Loading...</p>,
});

const Use_it = dynamic(() => import("./components/Use_it"), {
  loading: () => <p>Loading...</p>,
});

const Sevan_kare = dynamic(() => import("../brcgg/components/Sevan_kare"), {
  loading: () => <p>Loading...</p>,
});

const Page = () => {
  const productInfo = useSelector((state) => state.productInfo);

  const products = productInfo?.productsdata;

  useEffect(() => {
    localStorage.setItem("PATH", "bullrider.shop/brct");
  }, []);

  return (
    <div className="bg-zinc-500">
      <div className="bg-yellow-200 py-1 uppercase fontPoppins font-semibold text-sm text-black text-center">
        <div className="flex items-center justify-center gap-1">
          <div className="">*विज्ञापन-संबंधी(Advertorial)</div>
        </div>
      </div>

      <Header />

      <Recommendation />

      <Feel />

      <Active_Life />

      <Key_benifits />

      <Use_it />

      <Sevan_kare />
      <div className="bg-white">
        <div className="   fontPoppins">
          <div className="py-2 sm:max-w-xl w-full mx-auto">
            <div className="text-sm  pt-4 text-black">We are available on:-</div>

            <div className="flex items-center gap-7 py-2">
              <a href="https://bit.ly/3zR3csP">
                <img
                  src="/checkout_images/flipkart.png"
                  alt=""
                  className="sm:w-28 w-20 mx-auto"
                />
              </a>
              <a href="https://amzn.to/3XpFkUY">
                <img
                  src="/checkout_images//amazon.png"
                  alt=""
                  className="sm:w-24 w-20 mx-auto "
                />
              </a>
            </div>
            <div className="py-2">
              <div className="text-sm  pt-4 text-black">We accept:-</div>
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eecd9cfe-706a-4d7f-0556-a9f504eb7d00/public"
                alt=""
                className="w-5/6 pt-2"
              />
            </div>
          </div>


          <Footer />
        </div>
      </div>
      <BottomPopupForm />
    </div>
  );
};

export default Page;
