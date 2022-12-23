import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice";
import detailReducer from "../slices/detailSlice";
import mainReducer from "../slices/mainSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    detale: detailReducer,
    main: mainReducer,
  },
});
