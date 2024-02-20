import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomsInterface } from "../../interfaces/rooms/rooms";

const rooms = require("../../data/rooms.json"); // Cambiado para que funcione con require

const token = localStorage.getItem("token");

interface RequestError {
  status?: number;
  message?: string;
}

export const getRoomsListFromAPIThunk = createAsyncThunk<
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

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching Rooms list:", error);
    return rejectWithValue({
      status: 500, // Puedes modificar este código de estado según sea necesario
      message: "Error fetching Rooms list",
    });
  }
});
