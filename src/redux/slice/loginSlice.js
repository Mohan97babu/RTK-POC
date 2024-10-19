import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8085/api/auth"

const initialState = {
    data: [],
    status: "idle",
    error: null,
};

export const login = createAsyncThunk('auth/signin', async (payload) => {
    const response = await axios.post(`${baseURL}/signin/admin`, payload);
    return response.data;
});

export const signup = createAsyncThunk('auth/signup', async (payload) => {
    const response = await axios.post(`${baseURL}/signup`, payload);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(signup.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export default authSlice.reducer;