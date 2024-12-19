//libraries
import { configureStore } from "@reduxjs/toolkit";

//reducers
import postsReducer from '../features/postList/postListSlice';
import categoriesReducer from '../features/categoriesList/categoriesListSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        categories: categoriesReducer
    }
})