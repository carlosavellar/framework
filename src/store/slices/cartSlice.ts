import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICart {
  id: number;
  name: string;
  price: number;
}

interface ICartState {
  carts: ICart[];
}

const INITIAL_STATE: ICartState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ id: number; name: string; price: number }>
    ) => {
      state.carts.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
      });
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
