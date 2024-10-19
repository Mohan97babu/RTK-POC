// // src/redux/slice/productSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
      url:`products/${id}`,})
    }),
    postData: builder.mutation({
      query: (values) => ({
      url:`products`,
      method:"POST",
      body:values})
    }),
  }),
});

export const { useGetAllProductsQuery,useGetSingleProductQuery,usePostDataMutation} = productApi;
