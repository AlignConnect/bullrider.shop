
import { createApi } from "@reduxjs/toolkit/query/react";
import rtkBaseQuery from "../rtkQuery";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: rtkBaseQuery,
  tagTypes: ["Products"],

  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: (data) => ({ url: "/products", params: data }),
      transformErrorResponse: (error) => error.data,
      providesTags: (result) => {
        if (!result) {
          return [{ type: "Products", id: "LIST" }];
        }
        return [
          { type: "Products", id: result.id },
          { type: "Products", id: "LIST" },
        ];
      },
    }),

    //--------------------------------------------------------

    fetchOrders: builder.query({
      query: (data) => ({ url: "/orders", params: data }),
      transformErrorResponse: (error) => error.data,
      providesTags: (result) => {


        if (!result) {
          return [{ type: "Orders", id: "LIST" }];
        }
        return [
          { type: "Orders", id: result.order.id },
          { type: "Orders", id: "LIST" },
        ];
      },
    }),

    //-----------------------------------------------------

    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders/create",
        method: "POST",
        body: orderData,
        transformErrorResponse: (error) => error.data,
        invalidatesTags: ["Products"],
      }),
    }),

    updateOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders/update",
        method: "POST",
        body: orderData,
        transformErrorResponse: (error) => error.data,
        // invalidatesTags: ["Products"],
      }),
    }),

    createRzyOrder: builder.mutation({
      query: (orderData) => ({
        url: "/razorpay/generate",
        method: "POST",
        body: orderData,
        transformErrorResponse: (error) => error.data,
        // invalidatesTags: ["Products"],
      }),
    }),

    verifyPayment: builder.mutation({
      query: (orderData) => ({
        url: "/razorpay/verify",
        method: "POST",
        body: orderData,
        transformErrorResponse: (error) => error.data,
        // invalidatesTags: ["Products"],
      }),
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useCreateOrderMutation,
  useCreateRzyOrderMutation,
  useVerifyPaymentMutation,
  useUpdateOrderMutation,
  useFetchOrdersQuery
} = productsApi;
