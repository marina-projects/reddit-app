//data
// import { postData } from "../../templatesData";
import { fetchPosts } from "../../app/api";

//redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//async request

export const loadPostsFromAPI = createAsyncThunk(
  'posts/loadPostsFromAPI',
  async (subredit, { rejectWithValue }) => {
    try {
      const posts = await fetchPosts(subredit);
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postListSlice = createSlice({
    name: "posts",
    initialState: {
      allPosts: [], // Оригинальные посты
      posts: [],    // Отображаемые посты
      status: 'idle',
      error: null,
    },
    reducers: {
      /*
      loadPosts: (state) => {
        state.allPosts = postData; // Загружаем все посты
        state.posts = postData;    // Отображаем изначально все посты
      },
      */
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
    extraReducers: (builder) => {
      builder
        .addCase(loadPostsFromAPI.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(loadPostsFromAPI.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.allPosts = action.payload;
          state.posts = action.payload;
        })
        .addCase(loadPostsFromAPI.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
    },
  });
  
  export const selectPosts = (state) => state.posts.posts;
  export const selectStatus = (state) => state.posts.status;
  export const selectError = (state) => state.posts.error;

  export const { loadPosts, filterByCategory, resetFilter, filterBySearch } = postListSlice.actions;
  export default postListSlice.reducer;
  