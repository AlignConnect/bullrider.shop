import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { changeSelectedProduct } from "@/redux/slices/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import ShiProcket from "@/pages/commonUse/shiprocket";

const BottomPopupForm = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const searchParams = useSearchParams();

  const taboola_tracking = searchParams.get("tbclid");

  const productInfo = useSelector((state) => state.productInfo);

  const products = productInfo?.productsdata;

  const quantity = productInfo?.quantity;

  const allVariants = productInfo?.allVariants;

  const selectProducts = productInfo?.selectProducts;

  const handleChangeSingleVarient = (event) => {
    const variantId = event.target.value;
    // console.log('variantId: ', variantId);
    const selected = allVariants.find((v) => {
      return v.id === Number(variantId);
    });
    // console.log('selected: ', selected);
    dispatch(changeSelectedProduct({ selectProducts: selected }));
  };

  return (
    <div className="fontPoppins bg-white  bottom_pop">
      <div className="flex items-center gap-2 justify-center px-2 ">
        <div className="">
          <select
            className="border border-[#b59c49] text-sm font-medium text-gray-700 py-1.5 px-2 bg-white focus:outline-none rounded-lg"
            onChange={handleChangeSingleVarient}
            value={selectProducts?.id || ""}
          >
            {allVariants.map((variant) => {
              return (
                <option
                  className="!bg-gray-200  text-black "
                  key={variant.id}
                  value={variant.id}
                >
                  {variant.title}
                </option>
              );
            })}
          </select>
        </div>

        <div className="">
          {/* <Link
            href={{
              pathname: "/checkouts/",
              query: { tbclid: taboola_tracking },
            }}
          >
            <button className="bg-green-800 text-white font-semibold py-1.5 px-12 rounded-md md:text-md text-md shoporder">
              Buy Now
            </button>
          </Link> */}
            <ShiProcket />
        </div>
      </div>
    </div>
  );
};
export default BottomPopupForm;
