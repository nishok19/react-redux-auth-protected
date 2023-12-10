import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./authSlice";
import loaderSlice from "./loaderSlice";

export const store = configureStore({
  reducer: {
    auth: userSlice,
    loader: loaderSlice,
  },
});
