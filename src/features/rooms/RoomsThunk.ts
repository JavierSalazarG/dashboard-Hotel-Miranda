import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from "../../data/rooms.json";
import { RoomsInterface } from "../../interfaces/rooms/rooms";
export const getRoomsListFromAPIThunk = createAsyncThunk(
  "room/getRoomsFromApi",
   async () => {
    try {
      const response = await new Promise<Array<RoomsInterface>>((resolve) => {
        setTimeout(() => {
          resolve(rooms);
        }, 1000);
      });

      return response;
    } catch (error) {
      console.error("Error fetching Rooms list:", error);
      throw error;
    }
  }
);
