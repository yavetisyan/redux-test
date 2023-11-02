import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './features/counts/countSlice'
import postsReducer from './features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  }
})

