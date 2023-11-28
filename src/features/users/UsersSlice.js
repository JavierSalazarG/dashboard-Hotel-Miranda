import { createSlice } from "@reduxjs/toolkit";
import { getUsersListFromAPIThunk } from "./usersThunk";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersListFromAPIThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getUsersListFromAPIThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getUsersListFromAPIThunk.pending, (state) => {
        state.status = "pending";
      });
  },
});

export const getUsersData = (state) => state.user.data;
export const getUsersStatus = (state) => state.user.status;
export const getUsersError = (state) => state.user.error;
