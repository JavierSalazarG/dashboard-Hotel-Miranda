import { configureStore } from "@reduxjs/toolkit";
import { CommentSlice } from "../features/comments/commentSlice";
import { UserSlice } from "../features/users/UsersSlice";
export const store = configureStore({
  reducer: {
    comment: CommentSlice.reducer,
    user: UserSlice.reducer,
  },
});
