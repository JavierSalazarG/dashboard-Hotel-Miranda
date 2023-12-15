import { createSlice } from "@reduxjs/toolkit";
import { getCommentsListFromAPIThunk } from "./commentThunk";
import { CommentsSliceInterface } from "../../interfaces/comments/commentsSliceInterfaces";
import { RootState } from "../../app/store";

const initialState: CommentsSliceInterface ={
  data: [],
  status: 'idle',
  error: undefined
}
export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    AddArchive: (state, action):void => {
      state.data = state.data.map((comment) =>
        comment.id === action.payload ? { ...comment, archive: true } : comment
      );

      state.data = [...state.data];
    },
    DeleteArchive: (state, action) => {
      state.data = state.data.map((comment) =>
        comment.id === action.payload ? { ...comment, archive: false } : comment
      );

      state.data = [...state.data];
    },
  },
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
export const { AddArchive, DeleteArchive } = CommentSlice.actions;

export const getCommentNotArchiveData = (state: RootState) =>
  state.comment.data.filter((data) => !data.archive);
export const getCommentData = (state: RootState) => state.comment.data;
export const getCommentStatus = (state: RootState) => state.comment.status;
export const getCommentError = (state: RootState) => state.comment.error;
