// import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
// import axios from "axios";;

// const posts_URL = "https://fakestoreapi.com/products";

// const initialState ={
//     data:[],
//     status:"idle",
//     error:null,
// }

// export const listPosts = createAsyncThunk('posts/fetchPosts',async() =>{
//     const response = await axios.get(posts_URL);
//     return response.data;
// })
// export const addNewPost = createAsyncThunk('posts/addNewPost',async(initialPost)=>{
//     const response =await axios.post(posts_URL,initialPost);
//     return response.data;
// })