import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBookingListFromAPIThunk } from "./bookingThunk";
import { BookingSliceInterface } from "../../interfaces/booking/bookingSliceInterfaces";
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
    addBooking: (state, action: PayloadAction<BookingInterface>): void => {
      state.data = [action.payload, ...state.data];
    },
    deleteBooking: (state, action: any): void => {
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
          (newBooking) =>
            !state.data.some(
              (existingBooking) => existingBooking._id === newBooking._id
            )
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

export const { deleteBooking, addBooking } = bookingSlice.actions;
export const getBookingsData = (state: { booking: BookingSliceInterface }) =>
  state.booking.data;

export const getBookingsStatus = (state: { booking: { status: string } }) =>
  state.booking.status;

export const getBookingsError = (state: { booking: BookingSliceInterface }) =>
  state.booking.error;

export default bookingSlice.reducer;
