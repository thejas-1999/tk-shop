import { createSlice } from "@reduxjs/toolkit";

// Define the initial state, checking if user info is stored in localStorage
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

// Create a slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload)); // Consistent key name
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

// Export the actions and reducer
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

