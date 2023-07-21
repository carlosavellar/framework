import { AnyAction, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import usersReducer from "./slices/usersSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    prod: productReducer,
    cart: cartReducer,
    user: usersReducer,
  },
});
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

function userReducer(state: unknown, action: AnyAction): unknown {
  throw new Error("Function not implemented.");
}
