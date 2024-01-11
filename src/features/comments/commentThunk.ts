import { createAsyncThunk } from "@reduxjs/toolkit";
import comments from "../../data/comments.json";
import { CommentsInterface } from "../../interfaces/comments/comments";
import { CiLight } from "react-icons/ci";
const token = localStorage.getItem("token");
export const getCommentsListFromAPIThunk = createAsyncThunk(
  "comment/getCommentsFromApi",
  async () => {
    try {
      const response = await fetch(
        "https://3h3fjely6k.execute-api.eu-west-3.amazonaws.com/dev/comments",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "GET",
        }
      );
      if (!response.ok) {
        console.error("error", response.status);
      }
      const json = await response.json();

      return json;
    } catch (error) {
      console.error("Error en fetching comments list:", error);
      throw error;
    }
  }
);
