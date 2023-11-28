import { createAsyncThunk } from "@reduxjs/toolkit";
import comments from "../../data/comments.json";
export const getCommentsListFromAPIThunk = createAsyncThunk(
  "comment/getCommentsFromApi",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(comments);
      }, 1000);
    });
  }
);
