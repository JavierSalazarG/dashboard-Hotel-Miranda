import { configureStore } from "@reduxjs/toolkit";
import { CommentSlice } from "../features/comments/commentSlice";
import { UserSlice } from "../features/users/UsersSlice";
import { RoomsSlice } from "../features/rooms/RoomsSlice";
import { BookingSlice } from "../features/booking/bookingSlice";
export const store = configureStore({
  reducer: {
    comment: CommentSlice.reducer,
    user: UserSlice.reducer,
    room: RoomsSlice.reducer,
    booking: BookingSlice.reducer,
  },
});
