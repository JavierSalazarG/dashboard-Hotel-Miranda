import { createAsyncThunk } from "@reduxjs/toolkit";
import fetch from "cross-fetch";
interface LoginThunkArgs {
  bodydata: string;
}

export const loginThunk = createAsyncThunk(
  "login/getLoginnToken",
  async (bodydata) => {
    try {
      const response = await fetch(
        "https://3h3fjely6k.execute-api.eu-west-3.amazonaws.com/dev/login",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: bodydata,
        }
      );

      if (!response.ok) {
        console.error(response.status);
      }
      console.log(response);
      const json = await response.json();
      localStorage.setItem("token", json.token);
      console.log(json.token);
      return json;
    } catch (e) {
      console.error("Error in getLoginTokenThunk:", e);
      return rejectWithValue(e.message || "An error occurred");
    }
  }
);
