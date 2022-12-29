import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";
const instance = axios.create({
  baseURL: "https://brunchclone.shop/",
});
const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : null;
};
instance.interceptors.request.use(async (config) => {
  // 만든 인스턴스에 인터셉터를 추가합니다. request 는 요청을 할 때 항상 실행되는 미들웨어 역할을 합니다.
  config.headers["Authorization"] = getToken();
  // 요청을 보낼 때 헤더에 인증탭에 getToken()의 리턴값(저장된 토큰)을 실어보냅니다.
  return config;
});
instance.interceptors.response.use(
  //만든 인스턴스에 인터셉터를 추가합니다. response는 응답을 받을 때 항상 실행되는 미들웨어 입니다.
  (response) => {
    response.headers["Authorization"] = getToken();
    response.status === 401 && localStorage.removeItem("token");
    // 토큰이 잘못되어 status에 401(비인가) 에러가 뜨면 토큰을 제거합니다.
    return response;
  }
);
const initialState = {
  userInfo: {},
  isLoading: true,
  errorCurse: false,
  alertMsg: "",
};
//kakaoLogin
export const kakaoLogin = createAsyncThunk(
  "loginSlice/kakaoLogin",
  async (code) => {
    try {
      const rest = await instance.get(`/api/auth/kakao/callback?code=${code}`);
      
      const ACCESS_TOKEN = rest.data.accessToken;
      localStorage.setItem("token", ACCESS_TOKEN); // 로컬에 저장
      History.replace("/");
    } catch (error) {
      
      window.alert("로그인에 실패하셨습니다.");
    }
  }
);

//getUserInfo
export const getUserInfo = createAsyncThunk(
  "loginSlice/getUserInfo",
  async (payload, thunkAPI) => {
    try {
      
      const rest = await instance.get(`/api/writer-info`);
      const data = rest.data.result;
      
      return data;
    } catch (error) {}
  }
);

//addUserInfo
export const addUserInfo = createAsyncThunk(
  "loginSlice/addUserInfo",
  async ({ writer, email, password }, thunkAPI) => {
    
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

export const updateUserInfoData = createAsyncThunk(
  "loginSlice/updateUserInfoData",
  async ({ writer, selfIntro }, thunkAPI) => {
    try {
      const rest = await instance.put(`/api/user/update`, {
        writer,
        selfIntro,
      });
      
    } catch (error) {}
  }
);

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.errorCurse = false;
      state.userInfo = payload;
    },
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
