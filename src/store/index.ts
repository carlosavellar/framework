import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: productReducer,
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
