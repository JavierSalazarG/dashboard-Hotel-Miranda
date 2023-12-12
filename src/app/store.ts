import { configureStore } from "@reduxjs/toolkit";
import { CommentSlice } from "../features/comments/commentSlice.ts";
import { UserSlice } from "../features/users/UsersSlice.js";
import { RoomsSlice } from "../features/rooms/RoomsSlice.ts";
import { bookingSlice } from '../features/booking/bookingSlice';
export const store = configureStore({
  reducer: {
    comment: CommentSlice.reducer,
    user: UserSlice.reducer,
    room: RoomsSlice.reducer,
    booking: bookingSlice.reducer,
  },
});
