//data
import { postData } from "../../templatesData";

//redux
import { createSlice } from "@reduxjs/toolkit";

const postListSlice = createSlice({
    name: "posts",
    initialState: {
      allPosts: [], // Оригинальные посты
      posts: [],    // Отображаемые посты
    },
    reducers: {
      loadPosts: (state) => {
        state.allPosts = postData; // Загружаем все посты
        state.posts = postData;    // Отображаем изначально все посты
      },
      filterByCategory: (state, action) => {
        const categoryId = Number(action.payload); // Преобразуем payload в число
        state.posts = state.allPosts.filter((post) =>
          post.categoryId.includes(categoryId)
        );
      },
      resetFilter: (state) => {
        state.posts = state.allPosts; // Сбрасываем фильтр, показываем все посты
      },
    },
  });
  
  export const selectPosts = (state) => state.posts.posts;
  export const { loadPosts, filterByCategory, resetFilter } = postListSlice.actions;
  export default postListSlice.reducer;
  