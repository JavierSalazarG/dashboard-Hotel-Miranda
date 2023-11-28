import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../data/user.json";
export const getUsersListFromAPIThunk = createAsyncThunk(
  "user/getUserFromApi",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 1000);
    });
  }
);
