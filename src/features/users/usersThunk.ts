import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../data/user.json";
import { UsersInterface } from "../../interfaces/users/users";

const token = localStorage.getItem("token");
interface RequestError {
  status: number;
  message: string;
}

export const getUsersListFromAPIThunk = createAsyncThunk<
  UsersInterface[],
  void,
  { rejectValue: RequestError }
>("user/getUserFromApi", async (_, thunkAPI) => {
  try {
    const response = await new Promise<Array<UsersInterface>>((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 1000);
    });

    if (!response) {
      throw new Error("Failed to fetch users list");
    }

    return response;
  } catch (error) {
    console.error("Error fetching users list:", error);
    return thunkAPI.rejectWithValue({
      status: 500,
      message: error.message || "Error fetching users list",
    });
  }
});

export const deleteUsersAPIThunk = createAsyncThunk<
  UsersInterface[],
  string,
  { rejectValue: RequestError }
>("user/deleteUser", async (id: string, thunkAPI) => {
  try {
    const response = await fetch(
      `https://3h3fjely6k.execute-api.eu-west-3.amazonaws.com/dev/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error("Error deleting user:", error);
    return thunkAPI.rejectWithValue({
      status: 500,
      message: error.message || "Error deleting user",
    });
  }
});
