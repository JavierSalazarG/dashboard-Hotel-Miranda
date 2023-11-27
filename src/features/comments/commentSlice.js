import { createSlice } from "@reduxjs/toolkit";
import { getCommentsListFromAPIThunk } from "./commentThunk";

export const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsListFromAPIThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getCommentsListFromAPIThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getCommentsListFromAPIThunk.pending, (state) => {
        state.status = "pending";
      });
  },
});

export const getCommentData = (state) => state.comment.data;
export const getCommentStatus = (state) => state.comment.status;
export const getCommentError = (state) => state.comment.error;
