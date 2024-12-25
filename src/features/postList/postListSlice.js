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
      filterBySearch: (state, action) => {
        const term = action.payload.toLowerCase();
        state.posts = state.allPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(term) || // Поиск в заголовке
            post.shortText.toLowerCase().includes(term) // Поиск в тексте
        );
      },
      resetFilter: (state) => {
        state.posts = state.allPosts; // Сбрасываем фильтр, показываем все посты
      },
    },
  });
  
  export const selectPosts = (state) => state.posts.posts;
  export const { loadPosts, filterByCategory, resetFilter, filterBySearch } = postListSlice.actions;
  export default postListSlice.reducer;
  