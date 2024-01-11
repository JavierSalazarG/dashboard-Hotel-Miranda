import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from "../../data/rooms.json";
import { RoomsInterface } from "../../interfaces/rooms/rooms";

const token = localStorage.getItem("token");

interface RequestError {
  status: number;
  message: string;
}

const getRoomsListFromAPIThunk = createAsyncThunk<
  RoomsInterface[],
  void,
  { rejectValue: RequestError }
>("room/getRoomsFromApi", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(
      "https://3h3fjely6k.execute-api.eu-west-3.amazonaws.com/dev/rooms",
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
    return rejectWithValue({
      status: 500, // You can modify this status code as needed
      message: "Error fetching Rooms list",
    });
  }
});

export { getRoomsListFromAPIThunk };
