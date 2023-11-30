import { createSlice } from "@reduxjs/toolkit";
import { getUsersListFromAPIThunk } from "./usersThunk";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addUsers: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
    deletedUsers: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);

      state.data = [...state.data];
    },
    updateUsers: (state, action) => {
      const { id, updatedUserData } = action.payload;
      state.data = state.data.map((user) =>
        user.id === id ? { ...user, ...updatedUserData } : user
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersListFromAPIThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const uniqueData = action.payload.filter(
          (newUser) =>
            !state.data.some((existingUser) => existingUser.id === newUser.id)
        );

        state.data = [...state.data, ...uniqueData];
      })
      .addCase(getUsersListFromAPIThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || "Error desconocido";
      })
      .addCase(getUsersListFromAPIThunk.pending, (state) => {
        state.status = "pending";
      })
      .addDefaultCase((state) => {
        state.status = "idle";
      });
  },
});

export const { addUsers, deletedUsers, updateUsers } = UserSlice.actions;
export const getUsersData = (state) => state.user.data;
export const getUsersStatus = (state) => state.user.status;
export const getUsersError = (state) => state.user.error;
