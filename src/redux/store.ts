import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import createSagaMiddleware from "redux-saga";
import watchLoadingData from "./sagas/postsSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchLoadingData);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
