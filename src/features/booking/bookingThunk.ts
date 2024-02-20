import { ThunkAction, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { BookingInterface } from "../../interfaces/booking/booking";

const token = localStorage.getItem("token");

interface RequestError {
  status: number;
  message: string;
}

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
      throw new Error("Failed to fetch bookings");
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

// Definir tipo de thunk de la aplicación si es necesario
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  unknown,
  unknown,
  AnyAction
>;

export const dispatchGetBookingListFromAPIThunk =
  (): AppThunk => async (dispatch) => {
    try {
      await dispatch(getBookingListFromAPIThunk());
    } catch (error) {
      console.error("Error dispatching getBookingListFromAPIThunk:", error);
    }
  };
