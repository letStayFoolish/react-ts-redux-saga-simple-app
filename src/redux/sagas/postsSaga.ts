import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPosts,
  fetchPostsOnFailure,
  fetchPostsOnSuccess,
} from "../slices/dataSlice";

// worker
function* loadingData(): any {
  try {
    let posts = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/posts")
    );

    const response = yield posts.data.slice(0, 10);

    console.log("response: ", response);

    yield put(fetchPostsOnSuccess(response));
  } catch (error) {
    if (
      typeof error === "object" &&
      error &&
      "message" in error &&
      typeof error.message === "string"
    ) {
      console.error(error);
      yield put(fetchPostsOnFailure(error.message));
    }
  }
}

// watcher
function* watchLoadingData() {
  yield takeLatest(fetchPosts.type, loadingData);
}

export default watchLoadingData;
