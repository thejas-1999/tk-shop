import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], itemsPrice: 0, shippingPrice: 0, taxPrice: 0, totalPrice: 0 };

const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      // Calculate items price
      state.itemsPrice = addDecimal(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      // Calculate shipping price (if order is over 1000 free else 50 rupee is shipping price)
      state.shippingPrice = addDecimal(state.itemsPrice > 1000 ? 0 : 50);

      // Calculate tax price (15%)
      state.taxPrice = addDecimal(Number((state.itemsPrice * 15) / 100));

      // Calculate total price
      state.totalPrice = addDecimal(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      );

      localStorage.setItem("cart", JSON.stringify(state)); // Corrected localStorage method
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
