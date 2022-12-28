import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  result: [],
  post: {},
  isloading: false,
  error: false,
  auth: false,
};

export const postItem = createAsyncThunk(
  "postSlice/postItem",
  async (data, thunkAPI) => {
    try {
      let result;
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER}api/post`,
        data
      );
      if (res.status === 201) {
        result = await axios.get(`${process.env.REACT_APP_SERVER}api/post`);
        return result.data;
      } else {
        return thunkAPI.rejectWithValue({ message: "등록 실패  :: 서버오류" });
      }
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: "등록 실패  :: 서버오류" });
    }
  }
);

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [postItem.pending]: (state, action) => {
      state.isloading = true;
    },
    [postItem.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.auth = true;
      state.items = payload.data;
    },
    [postItem.rejected]: (state, action) => {
      state.isloading = false;
      state.error = true;
    },
  },
});

export default postSlice.reducer;