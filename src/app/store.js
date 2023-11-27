import { configureStore } from "@reduxjs/toolkit";
import { CommentSlice } from "../features/comments/commentSlice";
export const store = configureStore({
  reducer: {
    comment: CommentSlice.reducer,
  },
});
