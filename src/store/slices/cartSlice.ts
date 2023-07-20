import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICart {
  id?: number;
  name?: string;
  price?: number;
}

interface ICartState {
  carts: ICart[];
  total: number;
  showModal: boolean;
  totalPrice: number;
}

const INITIAL_STATE: ICartState = {
  carts: [{}],
  total: 0,
  showModal: false,
  totalPrice: 0,
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
    sumTotal: (state) => {
      state.total += 1;
    },
    sumTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
    },
    setShowModal: (state, action: PayloadAction<{ show: number }>) => {
      state.total = action.payload.show;
    },
  },
});

export const { addToCart, sumTotal, sumTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
