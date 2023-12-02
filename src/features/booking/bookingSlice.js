import { createSlice } from "@reduxjs/toolkit";
import { getBookingListFromAPIThunk } from "./bookingThunk";

export const BookingSlice = createSlice({
  name: "booking",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addBooking: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
    deletedBooking: (state, action) => {
      state.data = state.data.filter(
        (booking) => booking.id !== action.payload
      );

      state.data = [...state.data];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBookingListFromAPIThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const uniqueData = action.payload.filter(
          (newUser) =>
            !state.data.some((existingUser) => existingUser.id === newUser.id)
        );

        state.data = [...state.data, ...uniqueData];
      })
      .addCase(getBookingListFromAPIThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || "Error desconocido";
      })
      .addCase(getBookingListFromAPIThunk.pending, (state) => {
        state.status = "pending";
      })
      .addDefaultCase((state) => {
        state.status = "idle";
      });
  },
});

export const { deletedBooking, addBooking } = BookingSlice.actions;
export const getBookingsData = (state) => state.booking.data;
export const getBookingsStatus = (state) => state.booking.status;
export const getBookingsError = (state) => state.booking.error;
