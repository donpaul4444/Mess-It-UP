// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  userinfo: typeof window !== 'undefined' && localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userinfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.userinfo = null;
      localStorage.removeItem("userInfo");
    },
    // You can define other actions here
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
