import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "../slices/apiSlice";

const store = configureStore({
  reducer: {
    [appSlice.reducerPath]: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appSlice.middleware),
  devTools: true,
});

export default store;
