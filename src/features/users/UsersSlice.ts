import { createSlice } from "@reduxjs/toolkit";
import { deleteUsersAPIThunk, getUsersListFromAPIThunk } from "./usersThunk";
import { UsersSliceInterface } from "../../interfaces/users/usersSliceInterfaces";
const initialState: UsersSliceInterface = {
  data: [],
  status: "idle",
  error: undefined,
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
    deletedUsers: (state, action) => {
      state.data = state.data.filter((user) => user._id !== action.payload);

      state.data = [...state.data];
    },
    updateUsers: (state, action) => {
      const { id, updatedUserData } = action.payload;
      state.data = state.data.map((user) =>
        user._id === id ? { ...user, ...updatedUserData } : user
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersListFromAPIThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const uniqueData = action.payload.filter(
          (newUser) =>
            !state.data.some((existingUser) => existingUser._id === newUser._id)
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
    builder
      .addCase(deleteUsersAPIThunk.fulfilled, (state, action: any): void => {
        state.status = "fulfilled";
        state.data = state.data.filter(
          (user) => user._id !== action.payload._id
        );
      })
      .addCase(deleteUsersAPIThunk.rejected, (state, action): void => {
        state.status = "rejected";
        state.error = action.payload
          ? action.payload.message
          : "Error deleting user";
      })
      .addCase(deleteUsersAPIThunk.pending, (state, action): void => {
        state.status = "pending";
      })
      // Agrega esta línea para resolver el error
      .addDefaultCase((state) => {
        state.status = "idle";
      });
  },
});

export const { addUsers, deletedUsers, updateUsers } = UserSlice.actions;
export const getUsersData = (state: any) => state.user.data;
export const getUsersStatus = (state: any) => state.user.status;
export const getUsersError = (state: any) => state.user.error;
