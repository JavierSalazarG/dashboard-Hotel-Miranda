import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../data/user.json";
import { UsersInterface } from "../../interfaces/users/users";
export const getUsersListFromAPIThunk = createAsyncThunk(
  "user/getUserFromApi",
  async (_, thunkAPI) => {
    try {
      const response = await new Promise<Array<UsersInterface>>((resolve) => {
        setTimeout(() => {
          resolve(users);
        }, 1000);
      });

      return response;
    } catch (error) {
      console.error("Error fetching Rooms list:", error);
      throw error;
    }
  }
);
users