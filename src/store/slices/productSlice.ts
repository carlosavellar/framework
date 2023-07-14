import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    value: [{ id: 1, name: "coconut" }],
  },
  reducers: {
    fetchProduct: (state, action) => {
      state.value = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { fetchProduct } = productSlice.actions;

export default productSlice.reducer;
