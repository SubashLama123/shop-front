import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/product/productApi";
import { userApi } from "../features/auth/userApi";



export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,

  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat([
    productApi.middleware,
    userApi.middleware
  ])
})