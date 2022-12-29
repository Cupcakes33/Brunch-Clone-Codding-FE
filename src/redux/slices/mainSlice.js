import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  loading: false,
  statusText: null,
  sideMenuUserInfo: {},
};

const instance = axios.create({
  baseURL: "https://brunchclone.shop/",
});

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : null;
};

instance.interceptors.request.use((config) => {
  config.headers["Authorization"] = getToken();
  return config;
});

instance.interceptors.response.use((response) => {
  response.headers["Authorizaion"] = getToken();
  response.status === 401 && localStorage.removeItem("token");
  return response;
});

export const emailLogin = createAsyncThunk(
  "login/emailLogin",
  async (payload, thunkAPI) => {
    const res = await instance.post(`api/user/login`, payload);
    try {
      if (res.status === 200) {
        localStorage.clear();
        localStorage.setItem("token", res.data.accessToken);
        return thunkAPI.fulfillWithValue(res.data.writer);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userInfo = createAsyncThunk(
  "info/userInfo",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.get(`api/writer-info`);
      if (res.status === 200) {
        const { writer, profileImage } = res.data.result;
        return thunkAPI.fulfillWithValue({ writer, profileImage });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {},

  extraReducers: {
    [emailLogin.pending]: (state) => {
      state.loading = true;
    },
    [emailLogin.fulfilled]: (state, action) => {
      alert(`환영합니다! ${action.payload} 작가님!`);
      state.loading = false;
    },
    [emailLogin.rejected]: (state, action) => {
      alert("로그인 정보가 일치하지 않습니다.");
      state.loading = false;
    },
    [userInfo.pending]: (state) => {
      state.loading = true;
    },
    [userInfo.fulfilled]: (state, action) => {
      state.sideMenuUserInfo = action.payload;
      state.loading = false;
    },
    [userInfo.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
