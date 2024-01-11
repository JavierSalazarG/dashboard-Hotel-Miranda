import { createAsyncThunk, ThunkAction } from "@reduxjs/toolkit";

import { BookingInterface } from "../../interfaces/booking/booking";

interface RequestError {
  status: number;
  message: string;
}

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
