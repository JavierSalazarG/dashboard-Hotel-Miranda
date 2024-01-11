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
>("user/getUserFromApi", async () => {
  try {
    const response = await fetch(
      "https://3h3fjely6k.execute-api.eu-west-3.amazonaws.com/dev/users",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new RequestError(response.status, "");
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error("Error fetching Rooms list:", error);
    throw error;
  }
});

export const deleteUsersAPIThunk = createAsyncThunk<
  UsersInterface[],
  string,
  { rejectValue: RequestError }
>("user/deleteUser", async (id: string, thunkAPI) => {
  console.log(id);
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
      throw new RequestError(response.status, "Failed to delete user");
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error("Error deleting user:", error);
    return thunkAPI.rejectWithValue({
      status: 500, // Puedes ajustar el código de estado según sea necesario
      message: error.message || "Error deleting user",
    });
  }
});
