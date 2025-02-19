//libraries
import { configureStore } from "@reduxjs/toolkit";

//reducers
import postsReducer from '../features/postList/postListSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})