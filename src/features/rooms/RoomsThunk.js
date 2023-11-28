import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from "../../data/rooms.json";

export const getRoomsListFromAPIThunk = createAsyncThunk(
  "room/getRoomsFromApi",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(rooms);
      }, 2000);
    });
  }
);
