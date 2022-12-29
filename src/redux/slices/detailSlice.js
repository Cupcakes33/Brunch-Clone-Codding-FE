import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://brunchclone.shop/",
});

const getToken = () => {
  // 토큰을 가져오는 역할을 하는 함수를 만듭니다.
  const token = localStorage.getItem("token");
  // 로컬스토리지에서 토큰을 가져옵니다. 토큰 저장할때 이름 토큰이라 그대로 쓰셔도 됩니다.
  return token ? `Bearer ${token}` : null;
  // 토큰이 로컬스토리지에 있으면(빈값이 아니면) 앞에 Bearer 라는 문자열을 붙혀서 리턴합니다.
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

  // 401 에러 발생시 어떻게 처리를 해줄지 서술합니다.
  // 위의 코드는 로컬 3000 으로 보내주는 코드입니다.
);

const initialState = {
  result: [],
  detail: {},
  isLoading: false,
  error: false,
};

export const __getResult = createAsyncThunk(
  "result/getresult",
  async (payload, thunkApI) => {
    
    try {
      const response = await instance.get(`api/post/${payload}`);
      
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
      const res = await instance.post(`api/comment/${payload.postId}`, {
        content: payload.content,
      });
      

      if (res.status === 201) {
        const respons = await instance.get(`api/post/${payload.postId}`);
        return thunkApI.fulfillWithValue(respons?.data);
      }
    } catch (err) {
      return thunkApI.rejectWithValue(err);
    }
  }
);

export const __deletecomment = createAsyncThunk(
  "commentlist/deletecomment",
  async (payload, thunkApI) => {
    try {
      const { commentId, postId } = payload;
      
      const res = await instance.delete(
        `api/comment/comment-delete/${commentId}`
      );
      if (res.status === 201) {
        const result = await instance.get(`api/post/${postId}`);
      

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
    [__deletecomment.pending]: (state) => {
      state.isLoading = true;
    },

    [__deletecomment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },

    [__deletecomment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default detailSlice.reducer;
