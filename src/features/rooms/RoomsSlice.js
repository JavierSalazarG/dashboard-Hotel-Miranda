import { createSlice } from "@reduxjs/toolkit";
import { getRoomsListFromAPIThunk } from "./RoomsThunk";

export const RoomsSlice = createSlice({
  name: "room",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addRoom: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
    deletedRoom: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
      state.data = [...state.data];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomsListFromAPIThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const uniqueData = action.payload.filter(
          (newRoom) =>
            !state.data.some((existRooms) => existRooms.id === newRoom.id)
        );

        state.data = [...state.data, ...uniqueData];
      })
      .addCase(getRoomsListFromAPIThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || "Error desconocido";
      })
      .addCase(getRoomsListFromAPIThunk.pending, (state) => {
        state.status = "pending";
      })
      .addDefaultCase((state) => {
        state.status = "idle";
      });
  },
});

export const { addRoom, deletedRoom } = RoomsSlice.actions;
export const getRoomsData = (state) => state.room.data;
export const getRoomsStatus = (state) => state.room.status;
export const getRoomsError = (state) => state.room.error;
