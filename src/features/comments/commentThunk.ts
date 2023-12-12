import { createAsyncThunk } from "@reduxjs/toolkit";
import comments from "../../data/comments.json";
import { CommentsInterface } from "../../interfaces/comments/comments";
export const getCommentsListFromAPIThunk = createAsyncThunk(
  "comment/getCommentsFromApi",
  async (_, thunkAPI) => {
    try{
    const response = await new Promise<Array<CommentsInterface>>((resolve) => {
      setTimeout(() => {
        resolve(comments);
      }, 1000);
    })
    return response;
  } catch (error){
    console.error("Error en fetching comments list:", error);
    throw error
  }
  }
);
