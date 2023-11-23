import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type PostObjectType, type PostState } from "./types";
import { POSTS_SLICE_TYPE } from "./constants";

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: "",
};

const slice = createSlice({
  name: POSTS_SLICE_TYPE,
  initialState,
  reducers: {
    fetchPosts(state: PostState) {
      state.isLoading = true;
    },
    fetchPostsOnSuccess(
      state: PostState,
      action: PayloadAction<Array<PostObjectType>>
    ) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    fetchPostsOnFailure(state: PostState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error =
        action.payload || "something went wrong while fetching Posts";
    },
  },
});

export const { fetchPosts, fetchPostsOnSuccess, fetchPostsOnFailure } =
  slice.actions;

export default slice.reducer;
