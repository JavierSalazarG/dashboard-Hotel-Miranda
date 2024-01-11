import { createSlice } from "@reduxjs/toolkit";
import { getBookingListFromAPIThunk } from "./bookingThunk";
import {
  BookingSliceInterface,
  statusOptions,
} from "../../interfaces/booking/bookingSliceInterfaces";
import { BookingInterface } from "../../interfaces/booking/booking";
const initialState: BookingSliceInterface = {
  data: [],
  status: "idle",
  error: undefined,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action): void => {
      state.data = [action.payload, ...state.data];
    },
    deleteBooking: (state, action): void => {
      state.data = state.data.filter(
        (booking) => booking._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingListFromAPIThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const uniqueData = action.payload.filter(
          (newUser) =>
            !state.data.some((existingUser) => existingUser._id === newUser._id)
        );

        (state as BookingSliceInterface).data = [...state.data, ...uniqueData];
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

export const { deleteBooking, addBooking } = bookingSlice.actions;
export const getBookingsData = (state: { booking: BookingSliceInterface }) =>
  state.booking.data;
export type BookingStatus = (typeof statusOptions)[number];

export const getBookingsStatus = (state: {
  booking: { status: BookingStatus };
}) => state.booking.status;
export const getBookingsError = (state: { booking: BookingSliceInterface }) =>
  state.booking.error;

export default bookingSlice;
