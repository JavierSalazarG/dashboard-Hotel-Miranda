import { createAsyncThunk, ThunkAction } from "@reduxjs/toolkit";

import { BookingInterface } from "../../interfaces/booking/booking";

<<<<<<< HEAD
interface RequestError {
  status: number;
  message: string;
}
=======
export const getBookingListFromAPIThunk = createAsyncThunk(
  "booking/getBookingFromApi",
  async () => {
    try {
      const response = await new Promise<Array<BookingInterface>>((resolve) => {
        setTimeout(() => {
          resolve(bookings);
        }, 1000);
      });
>>>>>>> 6ce3bdea8a74c0da61a1c862c1c166dde1f92820

const token = localStorage.getItem("token");

export const getBookingListFromAPIThunk = createAsyncThunk<
  BookingInterface[],
  void,
  { rejectValue: RequestError }
>("booking/getBookingFromApi", async (_, thunkAPI) => {
  try {
    const response = await fetch(
      "https://3h3fjely6k.execute-api.eu-west-3.amazonaws.com/dev/bookings",
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
    console.error("Error fetching booking list:", error);
    return thunkAPI.rejectWithValue({
      status: 500,
      message: "Error fetching booking list",
    });
  }
});

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export const dispatchGetBookingListFromAPIThunk: AppThunk = (dispatch) => {
  return dispatch(getBookingListFromAPIThunk());
};
