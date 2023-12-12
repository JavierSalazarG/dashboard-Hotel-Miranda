import { AnyAction, ThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import bookings from "../../data/bookings.json";
import { BookingInterface } from "../../interfaces/booking/booking";

export const getBookingListFromAPIThunk = createAsyncThunk(
  "booking/getBookingFromApi",
  async (_, thunkAPI) => {
    try {
      const response = await new Promise<Array<BookingInterface>>((resolve) => {
        setTimeout(() => {
          resolve(bookings);
        }, 1000);
      });

      return response;
    } catch (error) {
      console.error("Error fetching booking list:", error);
      throw error;
    }
  }
);
