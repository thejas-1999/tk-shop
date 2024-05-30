export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
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

  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
