import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  result: [],
  detail: {},
  isLoading: false,
  error: false,
};

export const __getResult = createAsyncThunk(
  "result/getresult",
  async (payload, thunkApI) => {
    console.log("payload", payload);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}api/post/${payload}`
      );
      console.log("response", response);
      return thunkApI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkApI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "commentlist/addcomment",
  async (payload, thunkApI) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER}api/comment/${payload.postId}`,
        { content: payload.content }
      );
      if (res.status === 201) {
        const result = await axios.get(
          `${process.env.REACT_APP_SERVER}api/post/${payload.postid}`
        );
        return thunkApI.fulfillWithValue(result?.data);
      }
    } catch (err) {
      return thunkApI.rejectWithValue(err);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "commentlist/deletecomment",
  async (payload, thunkApI) => {
    try {
      const { commentid, postid } = payload;

      const res = await axios.delete(
        `${process.env.REACT_APP_SERVER}api/comment/comment-delete/${commentid}`
      );
      if (res.status === 201) {
        const result = await axios.get(
          `${process.env.REACT_APP_SERVER}api/post/${postid}`
        );

        return thunkApI.fulfillWithValue(result.data);
      } else {
        return thunkApI.rejectWithValue();
      }
    } catch (err) {
      return thunkApI.rejectWithValue(err);
    }
  }
);

export const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {},
  extraReducers: {
    //get result
    [__getResult.pending]: (state) => {
      state.isLoading = true;
    },
    [__getResult.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
      console.log(state.detail);
    },
    [__getResult.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //add comment
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete comment
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },

    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },

    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default detailSlice.reducer;
