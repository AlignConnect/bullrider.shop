import { resolveRTKError } from "@/redux/rtkQuery";
import { useFetchProductsQuery } from "@/redux/services/products";
import { getStoreProductInfo } from "@/redux/slices/ProductInfo";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const MiddleCalled = ({ children }) => {
  const {
    data: products,
    error,
    isLoading,
  } = useFetchProductsQuery({
    id: "9565097296187",
  });

  const dispatch = useDispatch();

  
  useEffect(() => {
    if (products) {
      dispatch(
        getStoreProductInfo({
          productsdata: products,
          allVariants: products?.variants?.slice().reverse(),
          selectProducts: products?.variants[1]
        })
      );
    }
  }, [products]);

  useEffect(() => {
    if (error) {
      return toast.error(resolveRTKError(error));
    }
  }, [error]);

  return <div>{children}</div>;
};

export default MiddleCalled;
