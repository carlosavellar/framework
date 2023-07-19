import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  foto?: string;
}

interface IProductState {
  products: IProduct[];
}

const INITIAL_STATE: IProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: INITIAL_STATE,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{
        name: string;
        description: string;
        price: number;
        foto?: string;
      }>
    ) => {
      state.products.push({
        id: 12,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        foto: action.payload.foto,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;
