import { USERS_URL } from "../src/constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: (data) => ({
        url: USERS_URL / auth,
        method: postMessage,
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
