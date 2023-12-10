import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("reduxx, ", action.payload);
      state.user = action.payload;
      state.authStatus = true;
    },
    removeUser: (state) => {
      state.user = {};
      state.authStatus = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
