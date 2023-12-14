import { configureStore } from "@reduxjs/toolkit";
import { CommentSlice } from "../features/comments/commentSlice.ts";
import { UserSlice } from "../features/users/UsersSlice.ts";
import { RoomsSlice } from "../features/rooms/RoomsSlice.ts";
import { bookingSlice } from '../features/booking/bookingSlice';
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    comment: CommentSlice.reducer,
    user: UserSlice.reducer,
    room: RoomsSlice.reducer,
    booking: bookingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export default {store};