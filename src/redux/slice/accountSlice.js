import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../global/interceptor";

const base_URL = "http://localhost:8085/api/v1/account";

const initialState ={
    data:[],
    status: "idle",
    error: null,
};

export const listAccountDetails = createAsyncThunk('account/fetchDetails',async()=>{
    const response = await authAPI.get(`${base_URL}/`);
    return response.data;
})

const accountSlice = createSlice({
    name:'account',
    initialState,
    extraReducers:(builder) =>{
        builder
        .addCase(listAccountDetails.pending,(state) =>{
            state.status = 'loading';
        })
        .addCase(listAccountDetails.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(listAccountDetails.rejected,(state,action) =>{
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch Account Details';
        })
    }
})

export default accountSlice.reducer;