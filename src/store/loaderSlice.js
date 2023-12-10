import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: true,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    enableLoader: (state) => {
      state.loader = true;
    },
    disableLoader: (state) => {
      state.loader = false;
    },
  },
});

export const { enableLoader, disableLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
