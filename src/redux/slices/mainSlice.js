import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  loading: false,
};

export const emailLogin = createAsyncThunk(
  "login/emailLogin",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);

      const res = await axios.post(
        `https://brunchclone.shop/api/user/login`,
        payload
      );
      console.log(res);
      if (res.status === 200) {
        localStorage.clear();
        localStorage.setItem("token", res.data.accessToken);
      } else {
        throw new Error(res.statusText);
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
      state.loading = false;
      console.log(action);
    },
    [emailLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      alert("로그인 정보가 일치하지 않습니다!");
    },
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
