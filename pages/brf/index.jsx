"use client";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import dynamic from "next/dynamic";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import BottomPopupForm from "./components/bottompopup/BottomHandler";
import { useSelector } from "react-redux";

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

const Use_it = dynamic(() => import("../brct/components/Use_it"), {
  loading: () => <p>Loading...</p>,
});

const Sevan_kare = dynamic(() => import("../brcgg/components/Sevan_kare"), {
  loading: () => <p>Loading...</p>,
});


const Page = () => {
  const productInfo = useSelector((state) => state.productInfo);

  const products = productInfo?.productsdata;

  useEffect(() => {
    localStorage.setItem("PATH", "bullrider.shop/brf");
  }, []);

  return (
    <div className="">
      <Header />

      <Recommendation />

      <Feel />

      <Active_Life />

      <Key_benifits />

      <Use_it />

      <Sevan_kare />

      <div className=" bg-white px-3 py-3">

      <div className="max-w-4xl mx-auto">
          <div className="text-sm  pt-4 text-black">We are available on:-</div>

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
        <div className="py-2">
          <div className="text-sm  pt-4 text-black">We accept:-</div>
          <img
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eecd9cfe-706a-4d7f-0556-a9f504eb7d00/public"
            alt=""
            className="w-72 pt-2"
            />
        </div>
            </div>

        <div className="text-center mt-3 sm:pb-5 pb-16 bg-zinc-100">
          <img
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/beba635f-ed41-4131-6f07-3aa09a652500/public"
            alt="Logo"
            className="w-28 mx-auto"
            width="100%"
            height="100%"
            loading="lazy"
          />
          <p className="text-md mt-2 font-semibold fontPoppins">
            {products?.vendor}
          </p>
          <p className="text-sm mt-1 fontPoppins">
            FF 14, Ujala Avenue, Sarkhej Road, Vishala, Ahmedabad Gujarat
            (INDIA) - 380055
          </p>
        </div>
      </div>
      <BottomPopupForm />
    </div>
  );
};

export default Page;
