import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authAPI from "../../global/interceptor";

const posts_URL = "http://localhost:8085/api/v1/school";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const listSchools = createAsyncThunk('schools/fetchSchools', async ({ page, size }) => {
  const response = await authAPI.get(`${posts_URL}?page=${page}&size=${size}`);
  return response.data;
});
export const addSchool = createAsyncThunk('schools/addSchool', async (school) => {
  console.log(school, "slice data");
  const response = await authAPI.post(posts_URL, school);
  return response.data;
})
export const updateSchool = createAsyncThunk('schools/updateSchool', async (school) => {
  const response = await authAPI.put(`${posts_URL}/${school.id}`, school);
  return response.data;
})
const schoolSlice = createSlice({
  name: 'schools',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(listSchools.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(listSchools.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(listSchools.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch Schools';
      });
    builder
      .addCase(addSchool.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addSchool.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(addSchool.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to add School ';
      });
  },
});

export default schoolSlice.reducer;
