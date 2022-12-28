import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice";
import detailReducer from "../slices/detailSlice";
import mainReducer from "../slices/mainSlice";
import postReducer from "../slices/postSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    detailReducer,
    main: mainReducer,
    postReducer,
  },
});
