import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";
const instance = axios.create({
  baseURL: "https://brunchclone.shop/",
});
const cookie = new Cookies();
const getCookie = cookie.get("token");
instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${getCookie}`;
  return config;
});
const initialState = {
  userInfo: {},
  isLoading: true,
  errorCurse: false,
  alertMsg: "",
};

//addUserInfo
export const addUserInfo = createAsyncThunk(
  "loginSlice/addUserInfo",
  async ({ writer, email, password, thunkAPI }) => {
    console.log(writer, email, password);
    try {
      const rest = await instance.post(`/api/user/register`, {
        writer: writer,
        email: email,
        password: password,
      });
      return rest.msg;
    } catch (error) {}
  }
);

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [addUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [addUserInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.errorCurse = false;
      state.alertMsg = payload;
    },
  },
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
