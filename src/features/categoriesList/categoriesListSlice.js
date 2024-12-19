//libraries
import { createSlice } from "@reduxjs/toolkit";

//data
import { categoriesData } from "../../templatesData";

const categoriesListSlice = createSlice(
    {
        name: 'categories',
        initialState: {
            categories: []
        },
        reducers: {
            loadCategories: (state) => {
                state.categories = categoriesData;
            }
        } 
    }
)

export const selectCategories = (state) => state.categories.categories;
export default categoriesListSlice.reducer;
export const {loadCategories} = categoriesListSlice.actions;