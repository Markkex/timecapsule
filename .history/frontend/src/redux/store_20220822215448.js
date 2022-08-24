import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user";
export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware [

  ]
});
