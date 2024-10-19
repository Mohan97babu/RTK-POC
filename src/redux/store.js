// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./slice/productSlice";
import postsReducer from "../redux/slice/postsSlice.js";
import schoolsReducer from "../redux/slice/schoolSlice.js";
import formShowReducer from "../redux/slice/formShow.js";
import authReducer from "../redux/slice/loginSlice.js";
import accountReducer from "../redux/slice/accountSlice.js"

export const store = configureStore({
  reducer: {
   [productApi.reducerPath]: productApi.reducer,
    posts:postsReducer,
    schools:schoolsReducer,
    formShow: formShowReducer,
    auth: authReducer,
    account: accountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
// import { configureStore } from "@reduxjs/toolkit";
//  import { productApi } from "../redux/slice/productSlice.js";
// import formShowReducer from "../redux/slice/formShow.js";
//  import postsReducer from "../redux/slice/";

// export const store = configureStore({
//   reducer: {
//     // [productApi.reducerPath]: productApi.reducer,
//     formShow: formShowReducer,
//     // posts: postsReducer,
//   },
//   // middleware: (getDefaultMiddleware) =>
//   //   getDefaultMiddleware().concat(productApi.middleware),
// });
