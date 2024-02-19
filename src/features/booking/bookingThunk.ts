import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store"; // Importar RootState si es necesario
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

// Definir tipo de thunk de la aplicación si es necesario
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

// Exportar la función del thunk de manera separada si es necesario
export const dispatchGetBookingListFromAPIThunk: AppThunk = (dispatch) => {
  return dispatch(getBookingListFromAPIThunk());
};
