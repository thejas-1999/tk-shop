import { PRODUCTS_URL } from "../src/constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails:builder.query({
        query: (productId) => ({
          url: `${PRODUCTS_URL}/${productId}`,
        }),
        keepUnusedDataFor: 5,
      }),
  }),
  overrideExisting: false, // Optionally add this to avoid warnings about endpoint overriding
});

export const { useGetProductsQuery,useGetProductDetailsQuery } = productApiSlice;

