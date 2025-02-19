import { fetchPosts, fetchComments } from "../../app/api";
import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

// Асинхронный экшен для загрузки постов
export const loadPostsFromAPI = createAsyncThunk(
  'posts/loadPostsFromAPI',
  async (subreddit, { rejectWithValue }) => {
    try {
      const posts = await fetchPosts(subreddit);
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Асинхронный экшен для загрузки комментариев
export const loadCommentsFromAPI = createAsyncThunk(
  'posts/loadCommentsFromAPI',
  async ({ subreddit, postId }, { rejectWithValue }) => {
    try {
      const comments = await fetchComments(subreddit, postId);
      return { postId, comments };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postListSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: [], 
    posts: [],
    comments: {},
    postsStatus: 'idle',
    commentsStatus: 'idle',
    error: null,
  },
  reducers: {
    
    filterBySearch: (state, action) => {
      const term = action.payload.toLowerCase();
      state.posts = state.allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.selftext.toLowerCase().includes(term) 
      );
    },
    resetFilter: (state) => {
      state.posts = state.allPosts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPostsFromAPI.pending, (state) => {
        state.postsStatus = 'loading';
      })
      .addCase(loadPostsFromAPI.fulfilled, (state, action) => {
        state.postsStatus = 'succeeded';
        state.allPosts = action.payload;
        state.posts = action.payload;
      })
      .addCase(loadPostsFromAPI.rejected, (state, action) => {
        state.postsStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(loadCommentsFromAPI.pending, (state) => {
        state.commentsStatus = 'loading';
      })
      .addCase(loadCommentsFromAPI.fulfilled, (state, action) => {
        state.commentsStatus = 'succeeded';
        const { postId, comments } = action.payload;
        state.comments[postId] = comments;
      })
      .addCase(loadCommentsFromAPI.rejected, (state, action) => {
        state.commentsStatus = 'failed';
        state.error = action.payload;
      });
  },
});

// Селекторы
export const selectPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.postsStatus;
export const selectCommentsStatus = (state) => state.posts.commentsStatus;
export const selectError = (state) => state.posts.error;

// Селектор для мемоизации массива комментариев
export const selectComments = createSelector(
  [(state) => state.posts.comments, (_, postId) => postId], // Передаем postId вторым аргументом
  (comments, postId) => comments[postId] ?? [] // Возвращаем конкретный массив комментариев
);



// Экспортируем экшены и редюсер
export const { filterByCategory, resetFilter, filterBySearch } = postListSlice.actions;
export default postListSlice.reducer;
