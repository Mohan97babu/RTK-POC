import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const posts_URL = "https://fakestoreapi.com/products";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const listPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(posts_URL);
  console.log(response,"get");
  return response.data;
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
  const response = await axios.post(posts_URL, initialPost);
  return response.data;
});

  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(listPosts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(listPosts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(listPosts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(addNewPost.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data.push(action.payload);
        })
        .addCase(addNewPost.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

export default postsSlice.reducer;
