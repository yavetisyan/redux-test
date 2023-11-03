import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counts/countSlice";
import postsReducer from "./features/posts/postsSlice";
import userReduser from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: userReduser,
  },
});
