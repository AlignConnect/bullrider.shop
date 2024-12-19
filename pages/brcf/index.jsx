import dynamic from "next/dynamic";
import React from "react";
import { useEffect } from "react";

const Header = dynamic(() => import("./component/Header"));
const Bigtaboola = dynamic(() =>
  import("./component/brcf_bigb")
);

const Sec1 = dynamic(() => import("./component/Sec1"));
const Sec2 = dynamic(() => import("./component/Sec2"));
const Sec3 = dynamic(() => import("./component/Sec3"));
const Sec4 = dynamic(() => import("./component/Sec4"));

const Footer = dynamic(() => import("./component/Footer"), {
  loading: () => <p>Loading...</p>,
});
const Footerpop = dynamic(() =>
  import("@/pages/commonUse/bottompopup/BottomHandler")
);

const OrderNow = dynamic(() => import("./component/OrdernowTaboola"));

const index = () => {
  useEffect(() => {
    localStorage.setItem("PATH", "bullrider.shop/brcf");
  }, []);

  return (
    <section className="w-full mx-auto sm:w-[580px]">
      <div className="bg-zinc-900 text-center text-white pt-2 text-sm sm:text-xl ">*विज्ञापन-संबंधी</div>
      <Header />
      <Bigtaboola />
      {/* <OrderNow /> */}
      <Sec1 />
      <OrderNow />
      <Sec2 />
      <OrderNow />
      <Sec3 />
      <OrderNow />
      <Sec4 />

      {/* <Form /> */}

      <Footer />
      <Footerpop />
    </section>
  );
};

export default index;
